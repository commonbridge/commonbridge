import { createApiIntegration, ApiIntegration } from '@commonbridge/integrations'
import Stripe from 'stripe'

export const createStripeIntegration = (): ApiIntegration => {
  return createApiIntegration({
    id: 'stripe',
    client: Stripe,
    name: 'Stripe',
    description: '',
    url: 'https://stripe.com/',
    getOptions: [],
    putOptions: [],
  })
}
