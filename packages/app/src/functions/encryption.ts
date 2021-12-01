import CryptoJS from 'crypto-js'

const keySize = 256;
const iterations = 100;

/**
 * Encrypts a string with a password.
 * @param msg - The string to be encrypted.
 * @param pass - The password to encrypt the string with.
 * @public
 */
export function encrypt(msg: string, pass: string): string {
  const salt = CryptoJS.lib.WordArray.random(128 / 8)
  const key = CryptoJS.PBKDF2(pass, salt, {
    keySize: keySize / 32,
    iterations: iterations
  })
  const iv = CryptoJS.lib.WordArray.random(128 / 8)
  const encrypted = CryptoJS.AES.encrypt(msg, key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    
  })

  return salt.toString() + iv.toString() + encrypted.toString()
}

/**
 * Decrypts a string with a password.
 * @param msg - The string that was encrypted.
 * @param pass - The password that was used to encrypt the string.
 * @public
 */
export function decrypt(msg: string, pass: string): string {
  const salt = CryptoJS.enc.Hex.parse(msg.substr(0, 32))
  const iv = CryptoJS.enc.Hex.parse(msg.substr(32, 32))
  const encrypted = msg.substring(64)

  const key = CryptoJS.PBKDF2(pass, salt, {
    keySize: keySize / 32,
    iterations: iterations
  })

  const decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    
  })

  return decrypted.toString(CryptoJS.enc.Utf8)
}
