import { CommonBridgeIntegration } from '@commonbridge/integrations'

export interface RoutePath {
  path: string
}

export interface RouteDetails extends RoutePath {
  element: React.ReactElement
}

export interface RouteLink extends RoutePath {
  name: string
  icon: React.ReactElement
}

export interface AppRoute extends RouteDetails, RouteLink {}

export type CreateApp = {
  routes?: AppRoute[]
  integrations?: CommonBridgeIntegration[]
  plugins?: any[]
}
