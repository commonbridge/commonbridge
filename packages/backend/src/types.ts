import { CommonBridgeIntegration } from '@commonbridge/integrations'

export type CreateBackend = {
  port?: number
  integrations?: CommonBridgeIntegration[]
  plugins?: any[]
}

export type CreateRoutes = {
  integrations?: CommonBridgeIntegration[]
  plugins?: any[]
}

export type AddIntegrations = CommonBridgeIntegration[]

export type AddIntegration = CommonBridgeIntegration
