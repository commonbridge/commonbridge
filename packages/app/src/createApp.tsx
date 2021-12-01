import { createContext, useContext } from 'react'
import Router from './components/Router'
import {
  AppContextProps,
  CreateApp,
} from './types'

const AppContext = createContext<AppContextProps>({
  integrations: undefined,
  plugins: undefined,
})

/**
 * Creates Common Bridge App.
 * @param routes - Array of additional routes.
 * @param integrations - Array of integrations.
 * @param plugins - Array of plugins.
 * @public
 */
export const createApp = ({
  routes,
  integrations,
  plugins,
}: CreateApp): React.ReactElement => {
  return (
    <AppContext.Provider
      value={{
        integrations,
        plugins,
      }}
    >
      <Router routes={routes} />
    </AppContext.Provider>
  )
}

export const getIntegrations = () => {
  const { integrations } = useContext(AppContext)

  if (!integrations) return undefined

  return integrations
}

export const getIntegration = (id: string) => {
  const { integrations } = useContext(AppContext)

  if (!integrations) return undefined

  return integrations.find(integration => {
    const details = integration.getDetails()
    return details.id === id
  })
}

export const getPlugins = () => {
  const { plugins } = useContext(AppContext)

  if (!plugins) return undefined

  return plugins
}

export const getPlugin = (id: string) => {
  const { plugins } = useContext(AppContext)

  if (!plugins) return undefined

  return plugins.find(plugin => {
    const details = plugin.getDetails()
    return details.id === id
  })
}
