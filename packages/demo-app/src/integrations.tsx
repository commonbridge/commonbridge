import { CommonBridgeIntegration } from '@commonbridge/integrations'
import { createHubspotIntegration } from '@commonbridge/integration-hubspot'
import { createStripeIntegration } from '@commonbridge/integration-stripe'

export const integrations = (): CommonBridgeIntegration[] => {
  return [
    createHubspotIntegration(process.env.INTEGRATION_HUBSPOT_KEY || ''),
    createStripeIntegration(process.env.INTEGRATION_STRIPE_KEY || '')
  ]
}
