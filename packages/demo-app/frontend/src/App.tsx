import { createApp, getPublishedIntegrations } from '@commonbridge/app'
import { integrations } from './components/integrations'

function App() {
  getPublishedIntegrations()

  return createApp({
    routes: [],
    integrations: integrations(),
    plugins: [],
  })
}

export default App
