import { createApiIntegration, ApiIntegration } from '@commonbridge/integrations'
import Stripe from 'stripe'

// const logo = require('./assets/logo.svg') as string

export const createIntegration = (): ApiIntegration => {
  return createApiIntegration({
    id: 'stripe',
    client: Stripe,
    name: 'Stripe',
    description: 'Online payment processing for internet businesses.',
    // logo,
    url: 'https://stripe.com/',
    getOptions: [],
    putOptions: [],
  })
}
