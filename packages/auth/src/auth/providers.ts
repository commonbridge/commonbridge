import { createOAuthAuthentication } from './Auth'

export const authProviders = [
  {
    id: 'github',
    auth: createOAuthAuthentication({
      id: 'github',
      name: 'GitHub',
      description: 'GitHub',
      authorizeUrl: 'https://github.com/login/oauth/authorize?client_id={{CLIENT_ID}}&redirect_uri={{REDIRECT_URI}}&scope=user:email',
      tokenUrl: 'https://github.com/login/oauth/access_token?client_id={{CLIENT_ID}}&client_secret={{CLIENT_SECRET}}&code={{CODE}}',
      verifyUrl: 'https://github.com/applications/{{CLIENT_ID}}/tokens/{{TOKEN}}',
    })
  }
]
