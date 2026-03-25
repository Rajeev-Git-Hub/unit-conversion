import jwt from 'jsonwebtoken'
import { serialize, parse } from 'cookie'

const JWT_SECRET = process.env.JWT_SECRET || 'change_this_dev_secret'
const TOKEN_NAME = 'token'

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (err) {
    return null
  }
}

export function makeTokenCookie(token: string) {
  return serialize(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
  })
}

export function parseTokenFromCookie(cookieHeader: string | null) {
  if (!cookieHeader) return null
  const parsed = parse(cookieHeader)
  return parsed[TOKEN_NAME] || null
}
