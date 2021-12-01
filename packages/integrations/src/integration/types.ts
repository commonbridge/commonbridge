/**
 * Available integrations types.
 *
 * @public
 */
export type IntegrationTypes =
 'api' | 'basic'

/**
 * Shared type for all integrations.
 *
 * @public
 */
export interface SharedIntegration {
  getId(): string
  getDetails(): IntegrationDetails
}

/**
 * Basic integration type.
 *
 * @public
 */
export interface BasicIntegration extends SharedIntegration {
  input(): any
  output(): any
}

/**
 * API integration type.
 *
 * @public
 */
export interface ApiIntegration extends SharedIntegration {
  getOptions(): object[]
  putOptions(): object[]
}

/**
 * Any integration type.
 *
 * @public
 */
export type CommonBridgeIntegration =
  ApiIntegration | BasicIntegration

/**
 * Integration base details.
 *
 * @public
 */
export interface IntegrationBaseDetails {
  id: string
  name: string
  description: string
  logo?: string
  url?: string
  docsUrl?: string
}

/**
 * Integration details with type.
 *
 * @public
 */
export interface IntegrationDetails extends IntegrationBaseDetails {
  type: IntegrationTypes
}

/**
 * Basic integration descriptor type.
 *
 * @public
 */
export interface BasicIntegrationConfig extends IntegrationBaseDetails {
  input: any
  output: any
}

/**
 * API integration descriptor type.
 *
 * @public
 */
export interface ApiIntegrationConfig extends IntegrationBaseDetails {
  client: any
  getOptions: object[]
  putOptions: object[]
}
