import { createApiIntegration, ApiIntegration } from '@commonbridge/integrations'
import hubspot from '@hubspot/api-client'

export const createIntegration = (): ApiIntegration => {
  return createApiIntegration({
    id: 'hubspot',
    client: hubspot.Client,
    name: 'Hubspot',
    description: '',
    url: 'https://www.hubspot.com/',
    getOptions: [],
    putOptions: [],
  })
}
