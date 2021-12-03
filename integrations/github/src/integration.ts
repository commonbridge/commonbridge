import { createApiIntegration, ApiIntegration } from '@commonbridge/integrations'
import Octokit from 'octokit'

// const logo = require('./assets/logo.svg') as string

export const createIntegration = (): ApiIntegration => {
  return createApiIntegration({
    id: 'github',
    client: Octokit,
    name: 'GitHub',
    description: 'Internet hosting for software development and version control using Git.',
    // logo,
    url: 'https://github.com/',
    getOptions: [],
    putOptions: [],
  })
}
