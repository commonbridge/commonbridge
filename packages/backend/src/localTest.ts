import { createIntegration as githubIntegration } from '@commonbridge/integration-github'
import { createIntegration as shopifyIntegration } from '@commonbridge/integration-shopify'
import { createIntegration as stripeIntegration } from '@commonbridge/integration-stripe'
import { createBackend } from './createBackend'

const { app } = createBackend({
  auths: [
    { id: 'github', clientId: process.env.GITHUB_CLIENT_ID, clientSecret: process.env.GITHUB_CLIENT_SECRET },
  ],
  integrations: [
    githubIntegration(),
    shopifyIntegration(),
    stripeIntegration(),
  ]
})

app.get('/api/check', (_req, res) => {
  res.status(200).json({
    data: 'got it'
  })
})
