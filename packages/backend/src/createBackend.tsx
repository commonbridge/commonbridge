import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import process from 'process'
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
  integrations,
  plugins,
}: CreateBackend) => {
  const PORT = port || 3001

  const app = express()

  app.use(bodyParser.json())

  app.use('/api', createRoutes({
    integrations,
    plugins,
  }))

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

  const server = app.listen(PORT, () => {
    console.log(`Complete Bridge app backend listening on port ${PORT}`)
  })

  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server')
    server.close(() => {
      console.log('HTTP server closed')
    })
  })

  return server
}
