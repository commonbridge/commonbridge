import { createApp } from '@commonbridge/app'
import { integrations } from './components/integrations'

function App() {
  return createApp({
    integrations: integrations(),
  })
}

export default App
