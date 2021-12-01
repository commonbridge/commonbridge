import { CommonBridgeIntegration } from '@commonbridge/integrations'
import { PageTitle } from '../components/PageTitle'
import LanguageIcon from '@mui/icons-material/Language'
import FeedIcon from '@mui/icons-material/Feed'

interface Integration {
  integration: CommonBridgeIntegration
}

export function Integration({ integration }: Integration) {
  const details = integration.getDetails()
  return (
    <>
      <PageTitle title={details.name} backTitle="Integrations" backLink="/integrations">
        {details.description && <p>{details.description}</p>}
        {details.url && (
          <a href={details.url} target="_blank">
            <LanguageIcon />
          </a>
        )}
        {details.docsUrl && (
          <a href={details.docsUrl} target="_blank">
            <FeedIcon />
          </a>
        )}
      </PageTitle>
    </>
  )
}
