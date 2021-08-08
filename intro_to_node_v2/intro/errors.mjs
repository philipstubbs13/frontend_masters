import { readFile } from 'fs/promises'

process.on('uncaughtException', (e) => {
  console.log(e)
})

try {
  const result = await readFile(new URL('app.mj', import.meta.url), 'utf-8')
} catch (e) {
  throw e
  console.log('hello')
}