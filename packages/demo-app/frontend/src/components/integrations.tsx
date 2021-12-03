import { CommonBridgeIntegration } from '@commonbridge/integrations'
import { createIntegration as githubIntegration } from '@commonbridge/integration-github'
// import { createIntegration as hubspotIntegration } from '@commonbridge/integration-hubspot'
import { createIntegration as shopifyIntegration } from '@commonbridge/integration-shopify'
import { createIntegration as stripeIntegration } from '@commonbridge/integration-stripe'

export const integrations = (): CommonBridgeIntegration[] => {
  return [
    githubIntegration(),
    shopifyIntegration(),
    stripeIntegration(),
  ]
}
