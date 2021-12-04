/**
 * Available authentication types.
 *
 * @public
 */
 export type AuthenticationTypes = 'oauth'

/**
 * Shared type for all authentications.
 *
 * @public
 */
export interface SharedAuthentication {
  getId(): string
  getDetails(): AuthenticationDetails
}

export interface OAuthDetails {
  authorizeUrl: string
  tokenUrl: string
  verifyUrl: string
}

/**
 * OAuth authentication type.
 *
 * @public
 */
export interface OAuthAuthentication extends SharedAuthentication {
  getOAuthUrls(): OAuthDetails
}

/**
 * Any authentication type.
 *
 * @public
 */
export type CommonBridgeAuthentication = OAuthAuthentication

/**
 * Authentication base details.
 *
 * @public
 */
export interface AuthenticationBaseDetails {
  id: string
  name: string
  description: string
  logo?: string
  url?: string
  docsUrl?: string
}

/**
 * Authentication details with type.
 *
 * @public
 */
export interface AuthenticationDetails extends AuthenticationBaseDetails {
  type: AuthenticationTypes
}

/**
 * OAuth authentication descriptor type.
 *
 * @public
 */
export interface OAuthAuthenticationConfig extends OAuthDetails, AuthenticationBaseDetails {}

export type AuthenticationProviders = 'github'

export type AuthInformation = {
  id: AuthenticationProviders
  clientId?: string
  clientSecret?: string
}
