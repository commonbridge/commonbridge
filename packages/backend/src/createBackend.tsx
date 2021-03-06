import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import process from 'process'
import { createAuthDb } from './server/functions/auth'
import { createRoutes } from './server/routes'
import { GenericError } from './server/utils/error'
import {
  CreateBackend,
} from './types'

/**
 * Creates Common Bridge Backend.
 * @param port - Custom backend port, defaults to 3001s
 * @param integrations - Array of integrations.
 * @param plugins - Array of plugins.
 * @public
 */

export const createBackend = ({
  port,
  auths,
  integrations,
  plugins,
}: CreateBackend) => {
  const PORT = port || 3001

  // Add authentication providers to database
  createAuthDb(auths)

  // Initialize Express
  const app = express()

  // Helmet to enhance API security
  app.use(helmet())

  // BodyParser to parse JSON bodies into JS objects
  app.use(bodyParser.json())

  // CORS for all requests
  app.use(cors())

  // Morgan to log HTTP requests
  app.use(morgan('combined'))

  // Create api with all routes
  app.use('/api', createRoutes({
    integrations,
    plugins,
  }))

  const server = app.listen(PORT, () => {
    console.log(`Common Bridge app backend listening on port ${PORT}`)
  })

  app.get('*', (req, _res, next) => {
    const error = new GenericError(
      `${req.ip} tried to access ${req.originalUrl}`,
      301
    )
  
    next(error)
  })

  app.use((
    error: GenericError,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    if (!error.statusCode) error.statusCode = 500
  
    return res.status(error.statusCode).json({ error: error.toString() })
  })

  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server')
    server.close(() => {
      console.log('HTTP server closed')
    })
  })

  return {
    app,
    server
  }
}
