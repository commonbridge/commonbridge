import {
  CommonBridgeAuth,
  AuthConfig
} from './types'

/**
 * @internal
 */
export class AuthImpl implements CommonBridgeAuth {
  constructor(private readonly config: AuthConfig) {}

  getId(): string {
    return this.config.id
  }
}


/**
 * Creates Common Bridge Auth from config.
 *
 * @param config - Auth configuration.
 * @public
 */
export function createAuth(config: AuthConfig): CommonBridgeAuth {
  return new AuthImpl(config)
}
