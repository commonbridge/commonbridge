import { useState } from 'react'
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
  const [open, setOpen] = useState(true)

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  
  const customTheme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#7247ff',
      },
      secondary: {
        main: '#7247ff',
      },
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
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: 'flex', minHeight: '100vh', overflowX: 'hidden' }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader sx={{ justifyContent: 'space-between' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" height="40" width="40" style={{fill: '#7247ff'}}>
              <path d="M400.55,487.24A44.45,44.45,0,1,0,445,531.69,44.5,44.5,0,0,0,400.55,487.24Zm0,61.46a17,17,0,1,1,17-17A17,17,0,0,1,400.55,548.7Z"/>
              <path d="M768.56,244.3A401.26,401.26,0,1,0,800,400,398.63,398.63,0,0,0,768.56,244.3Zm-632-107.74A372.54,372.54,0,0,1,772.29,386.28H641.85V363.75a44.43,44.43,0,0,0-26.44-84.84,279.69,279.69,0,0,0-89.11-72.44,273.78,273.78,0,0,0-83.09-27.06,44.44,44.44,0,0,0-86.42,0,273.5,273.5,0,0,0-83.09,27.06,279.69,279.69,0,0,0-89.11,72.44,44.44,44.44,0,0,0-26.44,84.84v22.53H27.71A369.84,369.84,0,0,1,136.56,136.56Zm35.3,201.93a17,17,0,1,1,17-17A17,17,0,0,1,171.86,338.49Zm17,193.2a17,17,0,1,1-17-17A17,17,0,0,1,188.87,531.69Zm18.34-237.11a251.91,251.91,0,0,1,79-63.7,246,246,0,0,1,72.74-24,44.65,44.65,0,0,0,27.4,25.23l.33,154.19H185.58V363.75a44.4,44.4,0,0,0,21.63-69.17ZM185.58,413.72H386.76l0,21.32A97.86,97.86,0,0,0,303.89,518H268.52A97.84,97.84,0,0,0,185.58,435Zm198-223.92a17,17,0,1,1,17,17A17,17,0,0,1,383.54,189.8ZM441,206.86a246,246,0,0,1,72.74,24,251.91,251.91,0,0,1,79,63.7,44.4,44.4,0,0,0,21.63,69.17v22.53H414.14L413.81,232A44.62,44.62,0,0,0,441,206.86ZM614.42,413.72V435A97.84,97.84,0,0,0,531.48,518H497.2a97.84,97.84,0,0,0-83-82.94l-.05-21.31Zm13.72,101a17,17,0,1,1-17,17A17,17,0,0,1,628.14,514.68Zm0-176.19a17,17,0,1,1,17-17A17,17,0,0,1,628.14,338.49ZM27.71,413.72H158.15V435A97.84,97.84,0,0,0,75.21,518H46.42A372.29,372.29,0,0,1,27.71,413.72ZM663.44,663.44a373,373,0,0,1-606.65-118h44.89V531.69a70.3,70.3,0,0,1,56.47-68.83v26.56a44.45,44.45,0,1,0,27.43,0V462.86A70.29,70.29,0,0,1,242,531.69V545.4h88.33V531.69a70.18,70.18,0,1,1,140.36,0V545.4H558V531.69a70.29,70.29,0,0,1,56.46-68.83v26.56a44.45,44.45,0,1,0,27.43,0V462.86a70.3,70.3,0,0,1,56.47,68.83V545.4h44.89A372,372,0,0,1,663.44,663.44ZM753.58,518H724.79A97.84,97.84,0,0,0,641.85,435V413.72H772.29A372.29,372.29,0,0,1,753.58,518Z"/>
            </svg>
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
          <Box component="main" sx={{ flexGrow: 1, height: '100%', p: 3, width: { xs: 'calc(100vw - 57px)', sm: '100%' } }}>
            <Outlet />
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  )
}

export default Layout
