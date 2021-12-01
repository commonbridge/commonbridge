import {
  ApiIntegration,
  ApiIntegrationConfig,
  BasicIntegration,
  BasicIntegrationConfig,
  IntegrationDetails,
  IntegrationTypes,
} from './types'

/**
 * @internal
 */
export class BasicIntegrationImpl implements BasicIntegration {
  config: BasicIntegrationConfig
  type: IntegrationTypes

  constructor({
    config,
    type = 'basic'
  }: {
    config: BasicIntegrationConfig,
    type?: IntegrationTypes
  }) {
    this.config = config
    this.type = type
  }

  getId(): string {
    return this.config.id
  }

  getDetails(): IntegrationDetails {
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

  input(): any {
    return
  }

  output(): any {
    return
  }
}

/**
 * @internal
 */
export class ApiIntegrationImpl implements ApiIntegration {
  config: ApiIntegrationConfig
  type: IntegrationTypes

  constructor({
    config,
    type = 'api'
  }: {
    config: ApiIntegrationConfig,
    type?: IntegrationTypes
  }) {
    this.config = config
    this.type = type
  }

  getId(): string {
    return this.config.id
  }

  getDetails(): IntegrationDetails {
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

  client(): Function {
    return this.config.client
  }

  getOptions(): object[] {
    return []
  }

  putOptions(): object[] {
    return []
  }
}

/**
 * Creates Common Bridge API Integration from config.
 *
 * @param config - Integration configuration.
 * @public
 */
export function createBasicIntegration(config: BasicIntegrationConfig): BasicIntegration {
  return new BasicIntegrationImpl({ config })
}

/**
 * Creates Common Bridge API Integration from config.
 *
 * @param config - Integration configuration.
 * @public
 */
export function createApiIntegration(config: ApiIntegrationConfig): ApiIntegration {
  return new ApiIntegrationImpl({ config })
}
