import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Home, Integrations, Plugins } from './routes'

interface AppRoute {
  path: string
  element: React.ReactElement
}

interface CreateApp {
  routes?: AppRoute[]
  integrations?: any[]
  plugins?: any[]
}

/**
 * Creates Common Bridge App from config.
 *
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
  const defaultRoutes = [
    '/',
    'integrations',
    'plugins',
  ]

  if (routes && routes.length > 0) {
    for (var i = routes.length - 1; i >= 0; i--) {
      const matches = defaultRoutes.filter(route => route === routes[i].path)

      if (matches.length > 0) routes.splice(i, 1)
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {integrations && integrations.length > 0 && (
          <Route path="/integrations" element={<Integrations integrations={integrations} />} />
        )}
        {plugins && plugins.length > 0 && (
          <Route path="/plugins" element={<Plugins plugins={plugins} />} />
        )}
        {routes && routes.length > 0 && routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
