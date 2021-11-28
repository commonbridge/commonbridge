import {
  CommonBridgeIntegration,
  IntegrationConfig
} from './types'

/**
 * @internal
 */
export class IntegrationImpl implements CommonBridgeIntegration {
  constructor(private readonly config: IntegrationConfig) {}

  getId(): string {
    return this.config.id
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
