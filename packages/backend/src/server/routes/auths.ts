import express from 'express'
import fetch from 'node-fetch'
import { encrypt, decrypt } from '@commonbridge/app'
import { authProviders } from '@commonbridge/auth'
import { db } from '../db'
import { replaceVariable } from '../utils/replaceVariable'
import { BadRequestError } from '../utils/error'

const router = express.Router()

// Get auth code from provider
router.get('/:provider/authorize', async (req, res) => {
  if (!process.env.SALT_KEY) throw new BadRequestError('No salt key provided')

  const provider = req.params.provider

  // Get auth client variables
  const authData = await db.authProvider.findUnique({
    where: {
      id: provider.toLocaleLowerCase()
    }
  })

  if (!authData) throw new BadRequestError('No auth provider found with that ID')

  // Get auth class
  const auth = authProviders.find(element => element.id === provider)?.auth

  if (!auth) throw new BadRequestError('No provider found with that ID')

  // Get auth URLs from class
  const details = auth.getOAuthUrls()

  // Decrypt client ID
  const clientId = decrypt(authData.clientId, process.env.SALT_KEY)

  if (!clientId) throw new BadRequestError('Client ID could not be decrypted')

  // Replace client ID in authorize URL
  var url = replaceVariable(details.authorizeUrl, 'CLIENT_ID', clientId)

  url = replaceVariable(url, 'REDIRECT_URI', `http://localhost:3001/api/auth/${provider}/callback`)

  // Redirect to authorize URL
  res.redirect(url)
})

// Get access token from code
router.get('/:provider/callback', async (req, res) => {
  if (!process.env.SALT_KEY) throw new BadRequestError('No salt key provided')

  const provider = req.params.provider
  const code = req.query.code

  if (!code || typeof code !== 'string') throw new BadRequestError('Invalid code received')

  // Get auth class
  const auth = authProviders.find(element => element.id === provider)?.auth

  if (!auth) throw new BadRequestError('No provider found with that ID')

  // Get auth URLs from class
  const details = auth.getOAuthUrls()

  // Get auth client variables
  const authData = await db.authProvider.findUnique({
    where: {
      id: provider.toLocaleLowerCase()
    }
  })

  if (!authData) throw new BadRequestError('No auth provider found with that ID')

  const clientId = decrypt(authData.clientId, process.env.SALT_KEY)
  const clientSecret = decrypt(authData.clientSecret, process.env.SALT_KEY)

  if (!clientId || !clientSecret) throw new BadRequestError('Client ID or secret could not be decrypted')

  // Replace client ID in access token URL
  var url = replaceVariable(details.tokenUrl, 'CLIENT_ID', clientId)

  // Replace client secret in access token URL
  url = replaceVariable(url, 'CLIENT_SECRET', clientSecret)

  // Replace code in access token URL
  url = replaceVariable(url, 'CODE', code)

  const response = await fetch(url, {
    method: 'post',
    headers: { 'Accept': 'application/json' },
  })

  const data = await response.json()

  if (data?.error) throw new BadRequestError(`${data?.error}: ${data?.error_description}`)

  console.log(data)

  if (!data.access_token) throw new BadRequestError('Access token could not be retrieved')

  const accessToken = encrypt(data.access_token, process.env.SALT_KEY)

  res.redirect(`/api/auth/${provider}/verify?token=${accessToken}`)
})

// Verify access token
router.get('/:provider/verify', async (req, res) => {
  if (!process.env.SALT_KEY) throw new BadRequestError('No salt key provided')

  const provider = req.params.provider
  const token = req.query.token

  if (!token || typeof token !== 'string') throw new BadRequestError('Invalid token received')

  // Get auth client variables
  const authData = await db.authProvider.findUnique({
    where: {
      id: provider.toLocaleLowerCase()
    }
  })

  if (!authData) throw new BadRequestError('No auth provider found with that ID')

  // Get auth class
  const auth = authProviders.find(element => element.id === provider)?.auth

  if (!auth) throw new BadRequestError('No provider found with that ID')

  // Get auth URLs from class
  const details = auth.getOAuthUrls()

  // Decrypt client ID
  const clientId = decrypt(authData.clientId, process.env.SALT_KEY)

  if (!clientId) throw new BadRequestError('Client ID could not be decrypted')

  // Decrypt access token
  const decryptedToken = decrypt(token, process.env.SALT_KEY)

  if (!decryptedToken) throw new BadRequestError('Access token could not be decrypted')

  // Replace client ID in access token URL
  var url = replaceVariable(details.tokenUrl, 'CLIENT_ID', clientId)

  // Replace token in access token URL
  url = replaceVariable(url, 'TOKEN', token)

  const response = await fetch(url, {
    method: 'get',
    headers: { 'Accept': 'application/json' },
  })

  const data = await response.json()

  console.log(data)

  res.status(200).json(data)
})

export default router

