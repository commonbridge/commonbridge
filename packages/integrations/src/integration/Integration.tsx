import {
  ApiIntegration,
  ApiIntegrationConfig,
  BasicIntegration,
  BasicIntegrationConfig,
  IntegrationDetails,
} from './types'

/**
 * @internal
 */
export class BasicIntegrationImpl implements BasicIntegration {
  constructor(private readonly config: BasicIntegrationConfig) {}

  getId(): string {
    return this.config.id
  }

  getDetails(): IntegrationDetails {
    return {
      id: this.config.id,
      name: this.config.name,
      description: this.config.description,
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
  constructor(private readonly config: ApiIntegrationConfig) {}

  getId(): string {
    return this.config.id
  }

  getDetails(): IntegrationDetails {
    return {
      id: this.config.id,
      name: this.config.name,
      description: this.config.description,
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
  return new BasicIntegrationImpl(config)
}

/**
 * Creates Common Bridge API Integration from config.
 *
 * @param config - Integration configuration.
 * @public
 */
export function createApiIntegration(config: ApiIntegrationConfig): ApiIntegration {
  return new ApiIntegrationImpl(config)
}
