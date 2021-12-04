import {
  AuthenticationDetails,
  AuthenticationTypes,
  OAuthAuthentication,
  OAuthAuthenticationConfig,
} from './types'

/**
 * @internal
 */
export class OAuthAuthenticationImpl implements OAuthAuthentication {
  config: OAuthAuthenticationConfig
  type: AuthenticationTypes

  constructor({
    config,
    type = 'oauth'
  }: {
    config: OAuthAuthenticationConfig,
    type?: AuthenticationTypes
  }) {
    this.config = config
    this.type = type
  }

  getId(): string {
    return this.config.id
  }

  getDetails(): AuthenticationDetails {
    return {
      id: this.config.id,
      type: this.type,
      name: this.config.name,
      description: this.config.description,
      logo: this.config.logo,
      url: this.config.url,
      docsUrl: this.config.docsUrl,
    }
  }

  getOAuthUrls() {
    return {
      authorizeUrl: this.config.authorizeUrl,
      tokenUrl: this.config.tokenUrl
    }
  }
}

/**
 * Creates Common Bridge API Integration from config.
 *
 * @param config - Integration configuration.
 * @public
 */
export function createOAuthAuthentication(config: OAuthAuthenticationConfig): OAuthAuthentication {
  return new OAuthAuthenticationImpl({ config })
}
