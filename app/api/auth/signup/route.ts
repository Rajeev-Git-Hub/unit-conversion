import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ error: 'Sign up is currently disabled' }, { status: 503 })
}

