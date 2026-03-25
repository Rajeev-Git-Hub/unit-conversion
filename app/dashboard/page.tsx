"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Converter = { id: number; name: string; data: any }

export default function DashboardPage() {
  const [user, setUser] = useState<{ id: number; name?: string; email?: string } | null>(null)
  const [converters, setConverters] = useState<Converter[]>([])
  const [name, setName] = useState('')
  const [data, setData] = useState('{}')
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function load() {
      setLoading(true)
      const me = await (await fetch('/api/auth/me')).json()
      if (!me?.user) {
        router.push('/login')
        return
      }
      setUser(me.user)

      const res = await (await fetch('/api/converters')).json()
      setConverters(res.converters || [])
      setLoading(false)
    }
    load()
  }, [router])

  async function addConverter(e: React.FormEvent) {
    e.preventDefault()
    try {
      const parsed = JSON.parse(data)
      const res = await fetch('/api/converters', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, data: parsed }) })
      const j = await res.json()
      if (res.ok) {
        setConverters((c) => [j.saved, ...c])
        setName('')
        setData('{}')
      }
    } catch (err) {
      alert('Invalid JSON for data field')
    }
  }

  async function remove(id: number) {
    const res = await fetch('/api/converters', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) })
    if (res.ok) setConverters((c) => c.filter((x) => x.id !== id))
  }

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Welcome{user?.name ? `, ${user.name}` : ''}</h1>
        <div>
          <button className="text-sm px-3 py-1 border rounded" onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="mt-6 max-w-2xl">
        <form onSubmit={addConverter} className="space-y-3 bg-white p-4 rounded shadow">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input className="w-full border rounded p-2" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium">Data (JSON)</label>
            <textarea className="w-full border rounded p-2" rows={4} value={data} onChange={(e) => setData(e.target.value)} />
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>

        <div className="mt-6 space-y-4">
          {converters.map((c) => (
            <div key={c.id} className="p-3 bg-white rounded shadow flex justify-between items-start">
              <div>
                <div className="font-semibold">{c.name}</div>
                <pre className="text-xs mt-2 max-h-40 overflow-auto">{JSON.stringify(c.data, null, 2)}</pre>
              </div>
              <div>
                <button className="text-red-600" onClick={() => remove(c.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
