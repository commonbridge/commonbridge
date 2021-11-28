import {
  CommonBridgePlugin,
  PluginConfig
} from './types'

/**
 * @internal
 */
export class PluginImpl implements CommonBridgePlugin {
  constructor(private readonly config: PluginConfig) {}

  getId(): string {
    return this.config.id
  }
}


/**
 * Creates Common Bridge Plugin from config.
 *
 * @param config - Plugin configuration.
 * @public
 */
export function createPlugin(config: PluginConfig): CommonBridgePlugin {
  return new PluginImpl(config)
}
