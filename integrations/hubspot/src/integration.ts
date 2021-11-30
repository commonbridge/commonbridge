import { createIntegration, CommonBridgeIntegration } from '@commonbridge/integrations'
import hubspot from '@hubspot/api-client'

export const createHubspotIntegration = (apiKey: string): CommonBridgeIntegration => {
  return createIntegration({
    id: 'hubspot',
    client: new hubspot.Client({ apiKey: apiKey }),
    name: 'Hubspot',
    description: '',
  })
}
