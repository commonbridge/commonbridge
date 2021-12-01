import { useNavigate, useParams } from 'react-router-dom'
import { PageTitle, SplitButton } from '@commonbridge/components'
import { getIntegration } from '../createApp'
import { NotFound } from './NotFound'
import IconButton from '@mui/material/IconButton'
import LanguageIcon from '@mui/icons-material/Language'
import FeedIcon from '@mui/icons-material/Feed'

export function Integration() {
  const navigate = useNavigate()
  const { id } = useParams()
  if (!id) return <NotFound title="No Integration Found" />

  const integration = getIntegration(id)
  if (!integration) return <NotFound title="No Integration Found" />

  const details = integration.getDetails()
  return (
    <>
      <PageTitle title={details.name}>
        {details.description && <p>{details.description}</p>}
        {details.url && (
          <IconButton
            component="a"
            href={details.url}
            target="_blank"
          >
            <LanguageIcon />
          </IconButton>
        )}
        {details.docsUrl && (
          <IconButton
            component="a"
            href={details.docsUrl}
            target="_blank"
          >
            <FeedIcon />
          </IconButton>
        )}
      </PageTitle>
      <SplitButton
        options={[
          { title: 'Create bridge', action: () => navigate(`/create?from=${details.id}`), hide: true },
          { title: 'Bridge from Stripe', action: () => navigate(`/create?from=${details.id}`) },
          { title: 'Bridge to Stripe', action: () => navigate(`/create?to=${details.id}`) },
        ]}
        onSelect={true}
      />
    </>
  )
}
