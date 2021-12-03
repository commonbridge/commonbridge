import express from 'express'
import {
  AddIntegration,
  AddIntegrations
} from '../../types'

const router = express.Router()

export const addIntegration = (integration: AddIntegration) => {
  const details = integration.getDetails()

  router.get(`/${details.id}`, (_req, res) => {
    res.status(200).json(details)
  })

  return router
}

export const generateIntegrations = (integrations: AddIntegrations) => {
  for (let i = 0; i < integrations.length; i++) {
    const element = integrations[i]
    addIntegration(element)
  }

  router.get('/add')

  return router
}

