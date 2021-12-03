import express from 'express'
import { generateIntegrations } from './integrations'
import { CreateRoutes } from '../../types'

export const createRoutes = ({
  integrations,
  plugins,
}: CreateRoutes) => {
  const router = express.Router()
  
  if (integrations) router.use('/integrations', generateIntegrations(integrations))

  if (plugins) router.use('/plugins')

  return router
}
