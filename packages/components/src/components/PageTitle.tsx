import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export type PageTitleProps = {
  title: string
  backTitle?: string
  backLink?: string
  children?: React.ReactNode
}

export const PageTitle = ({ title, children }: PageTitleProps) => {
  return (
    <Box sx={{ marginBottom: '30px' }}>
      <Breadcrumbs title={title} />
      <Typography variant="h4" component="h1" sx={{ marginTop: 0, fontWeight: 'bold' }}>
        { title }
      </Typography>
      {children}
    </Box>
  )
}

const Breadcrumbs = ({ title }: { title: string}) => {
  const location = useLocation().pathname
  const paths = location.split('/')
  paths.shift()

  if (paths.length === 1 && paths[0] === '') return <></>

  const links = [
    { title: 'Dashboard', path: '/' }
  ]

  for (let i = 0; i < paths.length - 1; i++) {
    const element = paths[i]

    const allPaths = [...paths]

    const thePath = allPaths.slice(0, i+1)

    links.push({
      title: element,
      path: `/${thePath.join('/')}`
    })
  }

  return (
    <Typography variant="caption" component="div">
      {links.length > 0 && links.map((link, i: number) => (
        <Fragment key={i}>
          <Button
            size="small"
            key={i}
            to={link.path}
            component={Link}
          >
            {link.title.toLocaleUpperCase()}
          </Button>
          {' > '}
        </Fragment>
      ))}
      <Button
        size="small"
        disabled
      >
        {title.toLocaleUpperCase()}
      </Button>
    </Typography>
  )
}
