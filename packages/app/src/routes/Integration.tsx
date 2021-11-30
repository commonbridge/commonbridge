import { CommonBridgeIntegration } from '@commonbridge/integrations'
import { PageTitle } from '../components/PageTitle'

interface Integration {
  integration: CommonBridgeIntegration | undefined
}

export function Integration({ integration }: Integration) {
  console.log(integration)
  return (
    <PageTitle title="Integration" />
  )
}
