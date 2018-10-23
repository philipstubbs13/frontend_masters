import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'
// Declare an app from express
const app = express()

const apiRouter = express.Router()


apiRouter.get('/', (req, res) => res.json({api: true}))
apiRouter.all('*', (req, res) => res.json({apiAll: true}))

GET => /api
GET => /api/ajfkda/afjd

setupMiddware(app)
connect()
// setup basic routing for index route

app.use('/signin', signin)

app.use('/api', apiRouter)

// catch all
app.get('/', (req, res) => res.json({ first: true}))
app.all('*', (req, res) => {
  res.json({ok: true})
})

export default app
