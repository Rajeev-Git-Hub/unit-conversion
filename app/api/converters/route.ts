import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ error: 'Converters API is currently disabled' }, { status: 503 })
}

export async function POST() {
  return NextResponse.json({ error: 'Converters API is currently disabled' }, { status: 503 })
}

export async function DELETE() {
  return NextResponse.json({ error: 'Converters API is currently disabled' }, { status: 503 })
}

