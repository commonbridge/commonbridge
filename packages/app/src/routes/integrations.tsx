import { CommonBridgeIntegration } from '@commonbridge/integrations'
import { Link } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'

interface Integrations {
  integrations: CommonBridgeIntegration[] | undefined
}

export function Integrations({ integrations }: Integrations) {
  console.log(integrations)
  return (
    <>
      <PageTitle title="Integrations" />
      {integrations && integrations.map((integration) => {
        const details = integration.getDetails()

        return (
          <Link to={`${details.id}`} key={details.id}>
            <h2>{details.name}</h2>
            <p>{details.description}</p>
          </Link>
        )
      })}
    </>
  )
}
