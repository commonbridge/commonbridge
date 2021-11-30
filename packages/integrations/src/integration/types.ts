/**
 * Integration type.
 *
 * @public
 */
export type CommonBridgeIntegration = {
  getId(): string
  getDetails(): IntegrationDetails
}

/**
 * Integration basic details.
 *
 * @public
 */
export interface IntegrationDetails {
  id: string
  name: string
  description: string
  url?: string
  apiDocsUrl?: string
}

/**
 * Integration descriptor type.
 *
 * @public
 */
export interface IntegrationConfig extends IntegrationDetails {
  client: any
}
