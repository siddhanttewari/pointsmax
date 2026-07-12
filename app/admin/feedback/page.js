'use client'

import { useState } from 'react'

export default function FeedbackDashboard() {
  const [password, setPassword] = useState('')
  const [rows, setRows] = useState(null)
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)
  const [authed, setAuthed] = useState(false)
  const [filter, setFilter] = useState('all')

  const signIn = async () => {
    setLoading(true); setErr(null)
    try {
      const res = await fetch('/api/admin/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (!res.ok) { setErr(data.error || 'Sign-in failed'); setLoading(false); return }
      setRows(data.rows || [])
      setAuthed(true)
    } catch (e) {
      setErr('Network error. Try again.')
    }
    setLoading(false)
  }

  // ── Password gate ──
  if (!authed) return (
    <Shell>
      <div className="text-center py-16">
        <div className="text-3xl mb-3">🔒</div>
        <h2 className="text-[18px] font-bold mb-2" style={{ color: 'var(--text)' }}>Admin sign-in required</h2>
        <p className="text-[13px] mb-5" style={{ color: 'var(--text-m)' }}>This dashboard is private.</p>
        <div className="max-w-xs mx-auto">
          <input
            type="password" value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && signIn()}
            placeholder="Enter admin password"
            className="w-full px-4 py-2.5 rounded-xl text-[14px] outline-none mb-3 text-center"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
          />
          <button onClick={signIn} disabled={loading}
            className="w-full px-5 py-2.5 rounded-xl text-[13px] font-semibold disabled:opacity-40"
            style={{ background: 'var(--dark)', color: '#FAF8F5' }}>
            {loading ? 'Checking…' : 'View feedback'}
          </button>
          {err && <p className="text-[12px] mt-3" style={{ color: 'var(--red)' }}>{err}</p>}
        </div>
      </div>
    </Shell>
  )

  // ── Aggregations ──
  const total = rows.length
  const ups = rows.filter(r => r.rating === 'up').length
  const downs = rows.filter(r => r.rating === 'down').length
  const helpfulPct = total ? Math.round(ups / total * 100) : 0

  const recRows = rows.filter(r => r.recommend)
  const recYes = recRows.filter(r => r.recommend === 'yes').length
  const recMaybe = recRows.filter(r => r.recommend === 'maybe').length
  const recNo = recRows.filter(r => r.recommend === 'no').length
  const nps = recRows.length ? Math.round((recYes - recNo) / recRows.length * 100) : null

  const withComments = rows.filter(r => r.comment && r.comment.trim())

  const byPage = {}
  for (const r of rows) {
    const k = r.page_slug || 'unknown'
    if (!byPage[k]) byPage[k] = { slug: k, title: r.page_title || k, up: 0, down: 0, yes: 0, maybe: 0, no: 0, total: 0 }
    byPage[k].total++
    if (r.rating === 'up') byPage[k].up++
    if (r.rating === 'down') byPage[k].down++
    if (r.recommend === 'yes') byPage[k].yes++
    if (r.recommend === 'maybe') byPage[k].maybe++
    if (r.recommend === 'no') byPage[k].no++
  }
  const pages = Object.values(byPage).sort((a, b) => b.total - a.total)

  const filtered = filter === 'all' ? rows
    : filter === 'comments' ? withComments
    : rows.filter(r => r.rating === filter)

  const fmtDate = (d) => new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <Shell>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '26px', color: 'var(--text)' }}>Feedback Dashboard</h1>
          <p className="text-[13px] mt-1" style={{ color: 'var(--text-m)' }}>{total} responses</p>
        </div>
        <button onClick={() => { setAuthed(false); setRows(null); setPassword('') }} className="text-[12px]" style={{ color: 'var(--text-m)' }}>Lock</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <Metric label="Total responses" value={total} />
        <Metric label="Found helpful" value={helpfulPct + '%'} sub={`${ups} up · ${downs} down`} color="var(--green)" />
        <Metric label="Would recommend" value={recRows.length ? Math.round(recYes / recRows.length * 100) + '%' : '—'} sub={`${recRows.length} answered`} color="#2563eb" />
        <Metric label="Recommend score" value={nps === null ? '—' : (nps > 0 ? '+' : '') + nps} sub="%yes − %no" color={nps >= 0 ? 'var(--green)' : 'var(--red)'} />
      </div>

      {recRows.length > 0 && (
        <div className="mb-8 p-4 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <p className="text-[13px] font-semibold mb-3" style={{ color: 'var(--text)' }}>Would you recommend PointsMax to a friend?</p>
          <div className="flex h-8 rounded-lg overflow-hidden mb-2" style={{ border: '1px solid var(--border)' }}>
            {recYes > 0 && <div style={{ width: `${recYes/recRows.length*100}%`, background: 'var(--green)' }} className="flex items-center justify-center text-[11px] font-bold text-white">{recYes}</div>}
            {recMaybe > 0 && <div style={{ width: `${recMaybe/recRows.length*100}%`, background: '#B8953E' }} className="flex items-center justify-center text-[11px] font-bold text-white">{recMaybe}</div>}
            {recNo > 0 && <div style={{ width: `${recNo/recRows.length*100}%`, background: 'var(--red)' }} className="flex items-center justify-center text-[11px] font-bold text-white">{recNo}</div>}
          </div>
          <div className="flex gap-4 text-[11px]" style={{ color: 'var(--text-m)' }}>
            <span>🙌 Definitely: {recYes}</span>
            <span>🤷 Maybe: {recMaybe}</span>
            <span>👎 Not really: {recNo}</span>
          </div>
        </div>
      )}

      <h2 className="text-[15px] font-bold mb-3" style={{ color: 'var(--text)' }}>By article</h2>
      <div className="overflow-x-auto -mx-1 px-1 mb-8">
        <table className="w-full text-[12px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
          <thead><tr>
            <th className="text-left py-2.5 px-2 font-semibold" style={{ color: 'var(--text-s)', borderBottom: '1px solid var(--border)' }}>Article</th>
            <th className="text-center py-2.5 px-2 font-semibold" style={{ color: 'var(--green)', borderBottom: '1px solid var(--border)' }}>Helpful</th>
            <th className="text-center py-2.5 px-2 font-semibold" style={{ color: '#2563eb', borderBottom: '1px solid var(--border)' }}>Recommend</th>
            <th className="text-center py-2.5 px-2 font-semibold" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>n</th>
          </tr></thead>
          <tbody>
            {pages.map((p, i) => {
              const hp = (p.up + p.down) ? Math.round(p.up / (p.up + p.down) * 100) : null
              const rc = (p.yes + p.maybe + p.no)
              const rp = rc ? Math.round(p.yes / rc * 100) : null
              return (
                <tr key={i}>
                  <td className="py-2.5 px-2" style={{ color: 'var(--text)', borderBottom: '1px solid var(--border)' }}>
                    <span className="line-clamp-1">{p.title}</span>
                  </td>
                  <td className="py-2.5 px-2 text-center font-mono" style={{ color: hp === null ? 'var(--text-m)' : hp >= 70 ? 'var(--green)' : hp >= 40 ? 'var(--gold)' : 'var(--red)', borderBottom: '1px solid var(--border)' }}>{hp === null ? '—' : hp + '%'}</td>
                  <td className="py-2.5 px-2 text-center font-mono" style={{ color: rp === null ? 'var(--text-m)' : '#2563eb', borderBottom: '1px solid var(--border)' }}>{rp === null ? '—' : rp + '%'}</td>
                  <td className="py-2.5 px-2 text-center font-mono" style={{ color: 'var(--text-m)', borderBottom: '1px solid var(--border)' }}>{p.total}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[15px] font-bold" style={{ color: 'var(--text)' }}>Responses</h2>
        <div className="flex gap-1.5">
          {[['all','All'],['up','👍'],['down','👎'],['comments','With comments']].map(([k,l]) => (
            <button key={k} onClick={() => setFilter(k)} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
              style={{ background: filter === k ? 'var(--dark)' : 'var(--bg-s)', color: filter === k ? '#FAF8F5' : 'var(--text-s)', border: '1px solid var(--border)' }}>{l}</button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        {filtered.slice(0, 300).map((r, i) => (
          <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[13px]">{r.rating === 'up' ? '👍' : r.rating === 'down' ? '👎' : '·'}</span>
              {r.recommend && <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ background: r.recommend==='yes'?'#EDF5F0':r.recommend==='no'?'#FDF1EF':'var(--bg-s)', color: r.recommend==='yes'?'var(--green)':r.recommend==='no'?'var(--red)':'var(--text-m)' }}>{r.recommend==='yes'?'would recommend':r.recommend==='no'?'would not':'maybe'}</span>}
              <span className="text-[11px]" style={{ color: 'var(--text-m)' }}>{r.page_title || r.page_slug}</span>
              <span className="text-[11px] ml-auto" style={{ color: 'var(--text-m)' }}>{fmtDate(r.created_at)}</span>
            </div>
            {r.comment && <p className="text-[13px] mt-1" style={{ color: 'var(--text-s)' }}>“{r.comment}”</p>}
          </div>
        ))}
        {filtered.length === 0 && <p className="text-[13px] py-6 text-center" style={{ color: 'var(--text-m)' }}>No responses in this filter yet.</p>}
      </div>
    </Shell>
  )
}

function Metric({ label, value, sub, color }) {
  return (
    <div className="p-4 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
      <p className="text-[11px] uppercase tracking-wide font-semibold mb-1" style={{ color: 'var(--text-m)' }}>{label}</p>
      <p className="text-[24px] font-bold font-mono" style={{ color: color || 'var(--text)' }}>{value}</p>
      {sub && <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-m)' }}>{sub}</p>}
    </div>
  )
}

function Shell({ children }) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="max-w-3xl mx-auto px-5 py-10">
        <a href="/" className="text-[12px]" style={{ color: 'var(--text-m)' }}>← PointsMax</a>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  )
}
