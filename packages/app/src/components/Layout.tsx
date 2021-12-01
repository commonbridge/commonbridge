import { useState } from 'react'
// import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
import { Outlet } from 'react-router-dom'
import NavLink from './NavLink'
import { RouteLink } from '../types'
import { styled, createTheme, Theme, ThemeProvider, CSSObject } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import HomeIcon from '@mui/icons-material/Home'
import CableIcon from '@mui/icons-material/Cable'
import ExtensionIcon from '@mui/icons-material/Extension'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: '57px',
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(1, 1),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
)

const Layout = ({ routes }: { routes: any }) => {
  const [open, setOpen] = useState(false)

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  
  const darkTheme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  })

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const defaultRoutes: RouteLink[] = [
    {
      name: 'Dashboard',
      path: '/',
      icon: <HomeIcon />
    },
    {
      name: 'Integrations',
      path: 'integrations',
      icon: <CableIcon />
    },
    {
      name: 'Plugins',
      path: 'plugins',
      icon: <ExtensionIcon />
    },
  ] 

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex', minHeight: '100vh', overflowX: 'hidden' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={toggleDrawer}>
              {open ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {defaultRoutes.map((route, i: number) => (
              <NavLink route={route} key={i} />
            ))}
          </List>
          <Divider />
          <List>
            <NavLink
              route={{
                name: 'Create Bridge',
                path: 'create',
                icon: <AddCircleOutlineIcon />
              }}
            />
          </List>
          {routes && routes.length > 0 && (
            <>
              <Divider />
              <List>
                {routes.map((route: RouteLink, i: number) => (
                  <NavLink route={route} key={i} />
                ))}
              </List>
            </>
          )}
        </Drawer>
        <Paper sx={{ width: '100%' }}>
          <Box component="main" sx={{ flexGrow: 1, p: 3, width: { xs: 'calc(100vw - 57px)', sm: '100%' } }}>
            <Outlet />
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}

export default Layout
