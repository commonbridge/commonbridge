import {
  CommonBridgeIntegration,
  IntegrationConfig,
  IntegrationDetails,
} from './types'

/**
 * @internal
 */
export class IntegrationImpl implements CommonBridgeIntegration {
  constructor(private readonly config: IntegrationConfig) {}

  getId(): string {
    return this.config.id
  }

  getDetails(): IntegrationDetails {
    return {
      id: this.config.id,
      name: this.config.name,
      description: this.config.description,
      url: this.config.url,
      apiDocsUrl: this.config.apiDocsUrl,
    }
  }

  client(): Function {
    return this.config.client
  }
}


/**
 * Creates Common Bridge Integration from config.
 *
 * @param config - Integration configuration.
 * @public
 */
export function createIntegration(config: IntegrationConfig): CommonBridgeIntegration {
  return new IntegrationImpl(config)
}
