import { Fragment } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const Breadcrumbs = ({ title }: { title: string}) => {
  const { pageId } = useParams()
  const page = pageId ? pageId : title

  const location = useLocation().pathname
  const paths = location.split('/')
  paths.shift()

  if (paths.length === 1 && paths[0] === '') return <></>

  if (paths[paths.length - 1] === '') paths.pop()

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
    <Typography variant="body2" component="div" sx={{ marginBottom: '15px' }}>
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
          {' / '}
        </Fragment>
      ))}
      <Button
        size="small"
        disabled
      >
        {page.toLocaleUpperCase()}
      </Button>
    </Typography>
  )
}
