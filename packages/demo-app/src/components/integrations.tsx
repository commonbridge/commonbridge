import { CommonBridgeIntegration } from '@commonbridge/integrations'
// import { createHubspotIntegration } from '@commonbridge/integration-hubspot'
import { createStripeIntegration } from '@commonbridge/integration-stripe'

export const integrations = (): CommonBridgeIntegration[] => {
  return [
    // createHubspotIntegration(),
    createStripeIntegration(),
  ]
}
