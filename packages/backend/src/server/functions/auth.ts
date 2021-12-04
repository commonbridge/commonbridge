import { encrypt } from '@commonbridge/app'
import { AuthInformation } from '@commonbridge/auth'
import { db } from '../db'

export const createAuthDb = async (auths: AuthInformation[]) => {
  if (!auths || auths.length === 0) return

  console.log('Adding auth providers...')

  const data = []

  for (let i = 0; i < auths.length; i++) {
    const element = auths[i]

    if (
      element.clientId &&
      element.clientSecret &&
      process.env.SALT_KEY
    ) {
      data.push({
        id: element.id,
        clientId: encrypt(element.clientId, process.env.SALT_KEY),
        clientSecret: encrypt(element.clientSecret, process.env.SALT_KEY),
      })
    }
  }

  const addedAuths = await db.authProvider.createMany({
    data,
    skipDuplicates: true
  })

  console.log(`Added ${addedAuths.count} new auth(s)`)

  return
}
