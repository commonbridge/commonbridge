import { Helmet } from 'react-helmet-async'
import { Breadcrumbs } from './Breadcrumbs'
import { Avatar } from './Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

export type PageTitleProps = {
  title: string
  description?: string
  avatar?: boolean
  avatarTitle?: string
  avatarImgUrl?: string
  noBorder?: boolean
  buttons?: React.ReactElement
  children?: React.ReactNode
}

export const PageTitle = (props: PageTitleProps) => {
  const { title, description, avatar, avatarTitle, avatarImgUrl, noBorder, buttons, children } = props

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Breadcrumbs title={title} />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <Box sx={{ display: 'flex' }}>
          {avatar && (
            <Avatar
              title={avatarTitle || title}
              imgUrl={avatarImgUrl}
              sx={{ height: '75px', fontSize: '28px', marginRight: '1rem', width: '75px' }}
            />
          )}
          <Box>
            <Typography variant="h4" component="h1" sx={{ marginTop: 0, fontWeight: 'bold' }}>
              { title }
            </Typography>
            {description && (
              <Typography variant="subtitle1" component="p">{description}</Typography>
            )}
            {children && (
              <Box sx={{ marginTop: '10px' }}>
                {children}
              </Box>
            )}
          </Box>
        </Box>
        {buttons && (
          <Box sx={{ marginBottom: '10px', marginLeft: '10px', marginTop: '10px', width: { xs:'100%', sm: 'auto' } }}>
            <Stack
              spacing={2}
              direction={{ xs: 'column', sm: 'row' }}
            >
              {buttons}
            </Stack>
          </Box>
        )}
      </Box>
      {!noBorder && (
        <Divider
          sx={{ marginBottom: '24px', marginTop: '24px' }}
        />
      )}
    </>
  )
}
