import { CommonBridgeIntegration } from '@commonbridge/integrations'
import { PageTitle } from '../components/PageTitle'

interface Integrations {
  integrations: CommonBridgeIntegration[] | undefined
}

export function Integrations({ integrations }: Integrations) {
  console.log(integrations)
  return (
    <PageTitle title="Integrations" />
  )
}
