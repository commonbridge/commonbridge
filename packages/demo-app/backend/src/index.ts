import { createBackend } from '@commonbridge/backend'
import { integrations } from './components/integrations'

createBackend({
  port: 3002,
  integrations: integrations(),
})
