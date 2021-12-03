import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PageTitle, SplitButton, TabPages } from '@commonbridge/components'
import { getIntegration } from '../createApp'
import { NotFound } from './NotFound'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import LanguageIcon from '@mui/icons-material/Language'
import FeedIcon from '@mui/icons-material/Feed'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export function Integration() {
  const [openDeactivate, setOpenDeactivate] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  if (!id) return <NotFound title="No Integration Found" />

  const integration = getIntegration(id)
  if (!integration) return <NotFound title="No Integration Found" />

  const details = integration.getDetails()
  
  return (
    <>
      <PageTitle
        title={details.name}
        description={details.description}
        avatar={true}
        noBorder={true}
        buttons={
          <>
            <Button variant="contained">Activate</Button>
            <Button variant="outlined" color="error" size="small" onClick={() => setOpenDeactivate(true)}>Deactivate</Button>
            <Dialog
              open={openDeactivate}
              onClose={() => setOpenDeactivate(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {`Are you sure you want to deactivate ${details.name}?`}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  This will remove any bridges using this integration.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDeactivate(false)} variant="outlined">Cancel</Button>
                <Button onClick={() => setOpenDeactivate(false)} variant="contained" color="error" autoFocus>
                  Deactivate
                </Button>
              </DialogActions>
            </Dialog>
            <SplitButton
              options={[
                { title: 'Create bridge', action: () => navigate(`/create?from=${details.id}`), hide: true },
                { title: 'Bridge from Stripe', action: () => navigate(`/create?from=${details.id}`) },
                { title: 'Bridge to Stripe', action: () => navigate(`/create?to=${details.id}`) },
              ]}
              onSelect={true}
            />
          </>
        }
      >
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
      <TabPages
        mainTitle={details.name}
        mainLink={`integrations/${id}`}
        mainLabel="Details"
      >
        <h2>Details</h2>
      </TabPages>
    </>
  )
}
