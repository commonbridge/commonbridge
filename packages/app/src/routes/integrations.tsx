import { getIntegrations } from '../createApp'
import { NotFound } from './NotFound'
import { CommonBridgeIntegration } from '@commonbridge/integrations'
import { PageTitle } from '@commonbridge/components'
import { Avatar } from '@commonbridge/components'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

interface Integrations {
  integrations: CommonBridgeIntegration[] | undefined
}

export function Integrations() {
  const integrations = getIntegrations()
  if (!integrations) return <NotFound />

  integrations.sort((a, b) => {
    const aName = a.getDetails().name
    const bName = b.getDetails().name

    if (aName < bName) return -1

    if (aName > bName) return 1

    return 0
  })

  return (
    <>
      <PageTitle title="Integrations" />
      {integrations && (
        <Grid container spacing={2}>
          {integrations.map((integration) => {
            const details = integration.getDetails()
            return (
              <Grid item xs={12} md={6} lg={4} key={details.id}>
                <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <CardContent sx={{ marginBottom: 'auto' }}>
                    <Box sx={{ display: 'flex', marginBottom: '16px' }}>
                      <Avatar title={details.name} imgUrl={details.logo} sx={{height: 65, width: 65, fontSize: 25}} />
                      <Box sx={{ marginLeft: '1rem' }}>
                        <Typography sx={{ fontSize: 12 }} color="text.secondary">
                          {details.type.toLocaleUpperCase()}
                        </Typography>
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                          {details.name}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2">
                      {details.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined" size="small" component={Link} to={`/integrations/${details.id}`} sx={{ width: '100%' }}>
                      View {details.name}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      )}
    </>
  )
}
