import bodyParser from 'body-parser'
import express from 'express'
import helmet from 'helmet'
import { config } from 'dotenv'
import accessEnv from '@helpers/accessEnv'
import setupRoutes from '@server/routes'
import { setCorsHeader } from '@middleware/cors'
import errorHandler from '@middleware/errorHandler'

config({ encoding: 'utf-8' })

const PORT = accessEnv('PORT', 6969)

const app = express()

/**
 * List of middleware
 * - Cors
 * - Body parser
 * - Helmet
 */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())
app.disable('x-powered-by')

app.use(setCorsHeader)

errorHandler(app)
setupRoutes(app)

app.listen(PORT, '0.0.0.0', () => {
  console.info(`Server listinging on PORT: ${PORT}`)
})
