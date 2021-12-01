import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Layout from './Layout'
import {
  Create,
  CreateSelected,
  Dashboard,
  Integration,
  Integrations,
  NotFound,
  Plugin,
  Plugins,
} from '../routes'
import {
  AppRoute,
  RouteDetails,
} from '../types'

const CommonBridgeRouter = ({ routes }: { routes: AppRoute[] | undefined }) => {
  const defaultRoutes: RouteDetails[] = [
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: 'integrations',
      element: <Integrations />,
    },
    {
      path: 'integrations/:id',
      element: <Integration />,
    },
    {
      path: 'integrations/:id/:pageId',
      element: <Integration />,
    },
    {
      path: 'plugins',
      element: <Plugins />,
    },
    {
      path: 'plugins/:id',
      element: <Plugin />,
    },
    {
      path: 'plugins/:id/:pageId',
      element: <Plugin />,
    },
    {
      path: 'create',
      element: <Create />,
    },
    {
      path: 'create/:from~:to',
      element: <CreateSelected />,
    },
  ]

  // Remove duplicate routes
  if (routes && routes.length > 0) {
    for (var i = routes.length - 1; i >= 0; i--) {
      const defaultMatches = defaultRoutes.filter(defaultRoute => defaultRoute.path === routes[i].path)
      if (defaultMatches.length > 0) routes.splice(i, 1)
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout routes={routes} />}>
          {/* Default Routes */}
          {defaultRoutes && defaultRoutes.length > 0 && defaultRoutes.map((route, i) => route.path === '/' ? (
            <Route index element={route.element} key={i} />
          ):(
            <Route path={route.path} element={route.element} key={i} />
          ))}

          {/* Provided Routes */}
          {routes && routes.length > 0 && routes.map((route, i) => (
            <Route path={route.path} element={route.element} key={i} />
          ))}

          {/* Not found catch-all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default CommonBridgeRouter
