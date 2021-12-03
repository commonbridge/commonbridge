import { createIntegration as githubIntegration } from '@commonbridge/integration-github'
import { createIntegration as shopifyIntegration } from '@commonbridge/integration-shopify'
import { createIntegration as stripeIntegration } from '@commonbridge/integration-stripe'
import { createBackend } from './createBackend'

createBackend({
  integrations: [
    githubIntegration(),
    shopifyIntegration(),
    stripeIntegration(),
  ]
})
