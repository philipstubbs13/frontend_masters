import { openai } from './openai.js'
import math from 'advanced-calculator'
const QUESTION = process.argv[2] || 'hi'

// node functions.js "what is 12 * 100 / 12 + 290 / 67 * 2"
// node functions.js "Create me an image of a cat flying through space"
const messages = [
    {
      role: 'user',
      content: QUESTION,
    },
]

const functions = {
    calculate: ({ expression }) => {
        return math.evaluate(expression)
    },
    async generateImage({ prompt }) {
        const result = await openai.images.generate({ prompt })
        console.log(result)
        return result.data[0].url
    }
}

const getCompletion = (message) => {
    return openai.chat.completions.create({
        model: 'gpt-3.5-turbo-0613',
        messages,
        // function_call: { name: 'calculate' },
        functions: [
            {
                name: 'calculate',
                deescription: 'Run a math expression',
                parameters: {
                    type: 'object',
                    properties: {
                        expression: {
                            type: 'string',
                            description: 'The math expression to evaluate like "2 * 3 + (21 / 2) ^ 2"'
                        },
                    },
                    required: ['expression'],
                }
            },
            {
                name: 'generateImage',
                deescription: 'Create or generate image based on a description',
                parameters: {
                    type: 'object',
                    properties: {
                        prompt: {
                            type: 'string',
                            description: 'The description of the image to generate'
                        },
                    },
                    required: ['prompt'],
                }
            }
        ],
        temperature: 0
    })
}

let response
while(true) {
    response = await getCompletion(messages)

    if (response.choices[0].finish_reason === 'stop') {
        console.log(response.choices[0].message.content)
        break
    } else if (response.choices[0].finish_reason === 'function_call') {
        const fName = response.choices[0].message.function_call.name
        const args = response.choices[0].message.function_call.arguments

        const funcToCall = functions[fName]
        const params = JSON.parse(args)

        const result = funcToCall(params)

        messages.push({
            role: 'assistant',
            content: null,
            function_call: {
                name: fName,
                arguments: args
            }
        })

        messages.push({
            role: 'function',
            name: fName,
            content: JSON.stringify({ result })
        })
    }
}

