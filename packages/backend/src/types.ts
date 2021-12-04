import { CommonBridgeIntegration } from '@commonbridge/integrations'
import { AuthInformation } from '@commonbridge/auth'

export type CreateBackend = {
  port?: number
  auths: AuthInformation[]
  integrations?: CommonBridgeIntegration[]
  plugins?: any[]
}

export type CreateRoutes = {
  integrations?: CommonBridgeIntegration[]
  plugins?: any[]
}

export type AddIntegrations = CommonBridgeIntegration[]

export type AddIntegration = CommonBridgeIntegration
