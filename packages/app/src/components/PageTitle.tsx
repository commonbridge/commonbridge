import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

export type PageTitleProps = {
  title: string
  backTitle?: string
  backLink?: string
  children?: React.ReactNode
}

export const PageTitle = ({ title, backTitle, backLink, children }: PageTitleProps) => {
  return (
    <Box>
      {backLink && (
        <Link to={backLink}>
          {`back${backTitle ? ` to ${backTitle}` : ''}`}
        </Link>
      )}
      <h1>
        { title }
      </h1>
      {children}
    </Box>
  )
}
