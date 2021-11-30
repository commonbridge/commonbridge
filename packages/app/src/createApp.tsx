import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Layout from './components/Layout'
import {
  Create,
  CreateSelected,
  Dashboard,
  Integration,
  Integrations,
  NotFound,
  Plugin,
  Plugins,
} from './routes'
import { RouteDetails, CreateApp } from './types'

/**
 * Creates Common Bridge App from config.
 * @param routes - Array of routes.
 * @param integrations - Array of integrations.
 * @param plugins - Array of plugins.
 * @public
 */
export const createApp = ({
  routes,
  integrations,
  plugins,
}: CreateApp): React.ReactElement => {
  const defaultRoutes: RouteDetails[] = [
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: 'integrations',
      element: <Integrations integrations={integrations} />,
    },
    {
      path: 'plugins',
      element: <Plugins plugins={plugins} />,
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

          {/* Integration Routes */}
          {integrations && integrations.length > 0 && integrations.map((integration, i) => {
            const details = integration.getDetails()
            return(
              <Route path={'integrations/' + details.id} element={<Integration integration={integration} />} key={i} />
            )
          })}

          {/* Plugin Routes */}
          {plugins && plugins.length > 0 && plugins.map((plugin, i) => (
            <Route path={'plugins/' + plugin.id} element={<Plugin plugin={plugin} />} key={i} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
