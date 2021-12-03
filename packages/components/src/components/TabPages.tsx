import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

interface TabPage {
  label: string
  slug: string
  component: React.ReactElement
}

type TabPagesProps = {
  mainTitle: string
  mainLink: string
  mainLabel: string
  pages?: TabPage[]
  children: React.ReactNode
}

export const TabPages = (props: TabPagesProps) => {
  const { mainTitle, mainLink, mainLabel, pages, children } = props
  const navigate = useNavigate()
  const { pageId } = useParams()

  const currentPage = pageId || ''

  let pageContent: React.ReactNode
  let thePage: TabPage | undefined

  if (pageId && pages) thePage = pages.find(page => page.slug === currentPage)

  if (currentPage === '') {
    pageContent = children
  } else if (thePage) {
    pageContent = thePage.component
  }

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    if (!newValue) {
      navigate(`/${mainLink}`)
    }

    navigate(`/${mainLink}/${newValue}`)
  }

  return (
    <>
      {thePage && (
        <Helmet>
          <title>{`${thePage.label} | ${mainTitle}`}</title>
        </Helmet>
      )}
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={currentPage}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label={mainLabel} value="" />
            {pages && pages.length > 0 && pages.map((page, i: number) => (
              <Tab key={i} label={page.label} value={page.slug} />
            ))}
          </Tabs>
        </Box>
        <Box>
          {pageContent ? pageContent : (
            <>
              <h2>Page not found</h2>
              <Button variant="text" component={Link} to={`/${mainLink}`}>
                Go back
              </Button>
            </>
          )}
        </Box>
      </Box>
    </>
  )
}
