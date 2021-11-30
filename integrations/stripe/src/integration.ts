import { createIntegration, CommonBridgeIntegration } from '@commonbridge/integrations'
import Stripe from 'stripe'

export const createStripeIntegration = (apiKey: string): CommonBridgeIntegration => {
  return createIntegration({
    id: 'stripe',
    client: new Stripe(apiKey, {
      // @ts-ignore: Null to default to account version
      apiVersion: null,
    }),
    name: 'Stripe',
    description: '',
  })
}
