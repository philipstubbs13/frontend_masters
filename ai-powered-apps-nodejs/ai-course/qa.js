import { openai } from './openai.js'
import { Document } from 'langchain/document'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { CharacterTextSplitter } from 'langchain/text_splitter'
import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { YoutubeLoader } from 'langchain/document_loaders/web/youtube'

// node qa "What is the xbox warranty?"
// node qa "where did brian work?"
const question = process.argv[2] || 'hi'
const video = `https://youtu.be/zR_iuq2evXo?si=cG8rODgRgXOx9_Cn`

export const createStore = (docs) =>
  MemoryVectorStore.fromDocuments(docs, new OpenAIEmbeddings())

const docsFromYTVideo = (video) => {
    const loader = YoutubeLoader.createFromUrl(video, {
        language: 'en',
        addVideoInfo: true
    })
    return loader.loadAndSplit(
        new CharacterTextSplitter({
            separator: ' ',
            chunkSize: 2500,
            chunkOverlap: 100,
        })
    )
}

const docsFromPDF = () => {
    const loader = new PDFLoader('xbox.pdf')
    return loader.loadAndSplit(
        new CharacterTextSplitter({
            separator: '. ',
            chunkSize: 2500,
            chunkOverlap: 200
        })
    )
}

const loadStore = async () => {
    const videoDocs = await docsFromYTVideo(video)
    const pdfDocs = await docsFromPDF()

    // console.log(videoDocs[0], pdfDocs[0])
    return createStore([...videoDocs, ...pdfDocs])
}

const query = async () => {
    const store = await loadStore()
    const results = await store.similaritySearch(question, 2)
    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        temperature: 0,
        messages: [
            {
                role: 'system',
                content:
                'You are a helpful AI assistant. Answser questions to your best ability.',
            },
            {
                role: 'user',
                content: `Answer the following question using the provided context. If you cannot answer the question with the context, don't lie and make up stuff. Just say you need more context.
                Question: ${question}
          
                Context: ${results.map((r) => r.pageContent).join('\n')}`,
            },
        ]
    })

    console.log(
        `Answer: ${response.choices[0].message.content}\n\nSources: ${results
          .map((r) => r.metadata.source)
          .join(', ')}`
      )
}

query()