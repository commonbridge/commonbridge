import { createApp } from '@commonbridge/app'
import { integrations } from './integrations'

function App() {
  return createApp({
    integrations: integrations(),
  })
}

export default App
