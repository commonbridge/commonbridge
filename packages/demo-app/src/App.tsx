import { createApp } from '@commonbridge/app'
import { integrations } from './components/integrations'

function App() {
  return createApp({
    routes: [],
    integrations: integrations(),
    plugins: [],
  })
}

export default App
