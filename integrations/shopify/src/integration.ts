import { createApiIntegration, ApiIntegration } from '@commonbridge/integrations'
import Shopify from '@shopify/shopify-api'

// const logo = require('./assets/logo.svg') as string

export const createIntegration = (): ApiIntegration => {
  return createApiIntegration({
    id: 'shopify',
    client: Shopify.Clients.Rest,
    name: 'Shopify',
    description: 'The all-in-one commerce platform to start, run, and grow a business.',
    // logo,
    url: 'https://shopify.com/',
    getOptions: [],
    putOptions: [],
  })
}
