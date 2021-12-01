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
 * Integration basic details.
 *
 * @public
 */
export interface IntegrationDetails {
  id: string
  name: string
  description: string
  url?: string
  docsUrl?: string
}

/**
 * Basic integration descriptor type.
 *
 * @public
 */
export interface BasicIntegrationConfig extends IntegrationDetails {
  input: any
  output: any
}

/**
 * API integration descriptor type.
 *
 * @public
 */
export interface ApiIntegrationConfig extends IntegrationDetails {
  client: any
  getOptions: object[]
  putOptions: object[]
}
