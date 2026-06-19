import { useState, useEffect, useMemo } from 'react'

interface Run {
  id: string
  date: string        // YYYY-MM-DD
  distanceKm: number
  durationMin: number
  route: string
  notes: string
}

const STORAGE_KEY = 'gita-daily-runs'

function pad(n: number) { return String(n).padStart(2, '0') }

function formatPace(km: number, min: number): string {
  if (!km || !min) return '—'
  const secPerKm = (min * 60) / km
  const m = Math.floor(secPerKm / 60)
  const s = Math.round(secPerKm % 60)
  return `${m}:${pad(s)} min/km`
}

function formatDuration(min: number): string {
  if (!min) return '—'
  const h = Math.floor(min / 60)
  const m = min % 60
  return h > 0 ? `${h}h ${m}m` : `${m} ನಿಮಿಷ`
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('kn-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}

// Motivational tags based on distance
function getTag(km: number): { label: string; color: string } {
  if (km >= 21) return { label: 'ಅರ್ಧ ಮ್ಯಾರಥಾನ್ 🏆', color: '#7C3AED' }
  if (km >= 10) return { label: '10K ಹೀರೋ ⭐', color: '#D97706' }
  if (km >= 5)  return { label: '5K ವಾರಿಯರ್ 💪', color: '#059669' }
  if (km >= 3)  return { label: 'ಸ್ಥಿರ ಓಟ 🌿', color: '#0284C7' }
  return         { label: 'ಚಿಕ್ಕ ಶುರು 🏃', color: '#64748B' }
}

const ROUTE_PRESETS = [
  'ಮನೆ ಸುತ್ತ',
  'ಪಾರ್ಕ್',
  'ಟ್ರ್ಯಾಕ್',
  'ರಸ್ತೆ',
  'ಟ್ರೇಡ್‌ಮಿಲ್',
  'ಬೆಟ್ಟ',
]

const MOTIVATIONAL_QUOTES = [
  { quote: 'ಯೋಗಃ ಕರ್ಮಸು ಕೌಶಲಮ್', meaning: 'ಕರ್ಮದಲ್ಲಿ ನೈಪುಣ್ಯವೇ ಯೋಗ' },
  { quote: 'ಉತ್ಥಿಷ್ಠ ಭಾರತ', meaning: 'ಎದ್ದೇಳು, ಮುಂದೆ ಸಾಗು' },
  { quote: 'ಶ್ರೇಯಃ ಸ್ವಧರ್ಮೋ ವಿಗುಣಃ', meaning: 'ತನ್ನ ಧರ್ಮ ಕೊಂಚ ನ್ಯೂನವಾದರೂ ಶ್ರೇಯಸ್ಕರ' },
  { quote: 'ನಿತ್ಯಯುಕ್ತ ಉಪಾಸತೇ', meaning: 'ನಿತ್ಯ ಅಭ್ಯಾಸ ಮಾಡುವವನು ಶ್ರೇಷ್ಠ' },
]

export default function RunTab() {
  const [runs, setRuns] = useState<Run[]>([])
  const [showForm, setShowForm] = useState(false)
  const [view, setView] = useState<'log' | 'stats'>('log')

  // Form state
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [distanceKm, setDistanceKm] = useState('')
  const [durationMin, setDurationMin] = useState('')
  const [route, setRoute] = useState('')
  const [notes, setNotes] = useState('')
  const [formError, setFormError] = useState('')
  const [saved, setSaved] = useState(false)

  const todayQuote = useMemo(() => {
    const idx = new Date().getDate() % MOTIVATIONAL_QUOTES.length
    return MOTIVATIONAL_QUOTES[idx]
  }, [])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setRuns(JSON.parse(raw))
    } catch { /* ignore */ }
  }, [])

  function saveRuns(updated: Run[]) {
    setRuns(updated)
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)) } catch { /* ignore */ }
  }

  function handleAddRun(e: React.FormEvent) {
    e.preventDefault()
    const km = parseFloat(distanceKm)
    const min = parseInt(durationMin)
    if (!km || km <= 0) { setFormError('ದೂರ ಸರಿಯಾಗಿ ನಮೂದಿಸಿ'); return }
    if (!min || min <= 0) { setFormError('ಸಮಯ ಸರಿಯಾಗಿ ನಮೂದಿಸಿ'); return }

    const newRun: Run = {
      id: crypto.randomUUID(),
      date,
      distanceKm: km,
      durationMin: min,
      route: route || 'ಮನೆ ಸುತ್ತ',
      notes,
    }
    saveRuns([newRun, ...runs])
    setFormError('')
    setSaved(true)
    setTimeout(() => { setSaved(false); setShowForm(false) }, 1200)
    // Reset
    setDistanceKm(''); setDurationMin(''); setNotes(''); setRoute('')
    setDate(new Date().toISOString().slice(0, 10))
  }

  function deleteRun(id: string) {
    if (confirm('ಈ ಓಟ ಅಳಿಸಬೇಕೇ?')) saveRuns(runs.filter(r => r.id !== id))
  }

  // Stats
  const totalKm = useMemo(() => runs.reduce((s, r) => s + r.distanceKm, 0), [runs])
  const totalMin = useMemo(() => runs.reduce((s, r) => s + r.durationMin, 0), [runs])
  const avgKm = runs.length ? totalKm / runs.length : 0

  const last30 = useMemo(() => {
    const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - 30)
    return runs.filter(r => new Date(r.date) >= cutoff)
  }, [runs])
  const last30Km = last30.reduce((s, r) => s + r.distanceKm, 0)

  const best = useMemo(() => {
    if (!runs.length) return null
    return runs.reduce((b, r) => r.distanceKm > b.distanceKm ? r : b)
  }, [runs])

  const weekRuns = useMemo(() => {
    const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - 7)
    return runs.filter(r => new Date(r.date) >= cutoff)
  }, [runs])

  return (
    <div className="tab-content">

      {/* Motivational Quote */}
      <div className="run-quote-banner">
        <span className="run-quote-text">"{todayQuote.quote}"</span>
        <span className="run-quote-meaning">{todayQuote.meaning}</span>
      </div>

      {/* Quick Stats Strip */}
      <div className="run-stats-strip">
        <div className="stat-chip">
          <span className="stat-chip-value">{runs.length}</span>
          <span className="stat-chip-label">ಒಟ್ಟು ಓಟಗಳು</span>
        </div>
        <div className="stat-chip stat-chip--green">
          <span className="stat-chip-value">{totalKm.toFixed(1)}</span>
          <span className="stat-chip-label">ಒಟ್ಟು ಕಿ.ಮೀ</span>
        </div>
        <div className="stat-chip stat-chip--blue">
          <span className="stat-chip-value">{last30Km.toFixed(1)}</span>
          <span className="stat-chip-label">30 ದಿನ ಕಿ.ಮೀ</span>
        </div>
        <div className="stat-chip stat-chip--purple">
          <span className="stat-chip-value">{weekRuns.length}</span>
          <span className="stat-chip-label">ಈ ವಾರ</span>
        </div>
      </div>

      {/* View toggle + Add button */}
      <div className="run-toolbar">
        <div className="run-view-toggle">
          <button
            className={`view-toggle-btn ${view === 'log' ? 'active' : ''}`}
            onClick={() => setView('log')}
          >
            📋 ಓಟ ಲಾಗ್
          </button>
          <button
            className={`view-toggle-btn ${view === 'stats' ? 'active' : ''}`}
            onClick={() => setView('stats')}
          >
            📊 ಅಂಕಿ ಅಂಶ
          </button>
        </div>
        <button className="run-add-btn" onClick={() => setShowForm(v => !v)}>
          {showForm ? '✕ ಮುಚ್ಚು' : '+ ಓಟ ಸೇರಿಸು'}
        </button>
      </div>

      {/* Add Run Form */}
      {showForm && (
        <div className="run-form-card">
          <div className="run-form-header">
            <span>🏃 ಹೊಸ ಓಟ ನಮೂದಿಸಿ</span>
          </div>
          <form onSubmit={handleAddRun} className="run-form">
            <div className="run-form-grid">
              <div className="form-group">
                <label className="form-label">ದಿನಾಂಕ</label>
                <input
                  type="date"
                  className="form-input"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  max={new Date().toISOString().slice(0, 10)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">ದೂರ (ಕಿ.ಮೀ)</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="5.0"
                  min="0.1"
                  step="0.1"
                  value={distanceKm}
                  onChange={e => setDistanceKm(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">ಸಮಯ (ನಿಮಿಷ)</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="30"
                  min="1"
                  value={durationMin}
                  onChange={e => setDurationMin(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label className="form-label">ರೂಟ್</label>
                <select
                  className="form-input"
                  value={route}
                  onChange={e => setRoute(e.target.value)}
                >
                  <option value="">ಆರಿಸಿ...</option>
                  {ROUTE_PRESETS.map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">ಟಿಪ್ಪಣಿ (ಐಚ್ಛಿಕ)</label>
              <input
                type="text"
                className="form-input"
                placeholder="ಇಂದು ಓಟ ಹೇಗಿತ್ತು..."
                value={notes}
                onChange={e => setNotes(e.target.value)}
              />
            </div>
            {formError && <p className="form-error">{formError}</p>}
            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {saved ? '✓ ಉಳಿಸಲಾಯಿತು!' : 'ಉಳಿಸಿ'}
              </button>
              <button type="button" className="btn-ghost" onClick={() => setShowForm(false)}>
                ರದ್ದು
              </button>
            </div>
          </form>
        </div>
      )}

      {/* LOG VIEW */}
      {view === 'log' && (
        <div className="run-log">
          {runs.length === 0 ? (
            <div className="run-empty">
              <div className="run-empty-icon">🏃</div>
              <p className="run-empty-title">ಇನ್ನೂ ಓಟ ದಾಖಲಾಗಿಲ್ಲ</p>
              <p className="run-empty-sub">ಮೇಲಿನ "+ ಓಟ ಸೇರಿಸು" ಒತ್ತಿ ಮೊದಲ ಓಟ ಸೇರಿಸಿ</p>
            </div>
          ) : (
            runs.map(run => {
              const tag = getTag(run.distanceKm)
              return (
                <div key={run.id} className="run-card">
                  <div className="run-card-left">
                    <div className="run-distance">{run.distanceKm.toFixed(1)}<span>ಕಿ.ಮೀ</span></div>
                    <div className="run-route">{run.route || 'ರೂಟ್ ಇಲ್ಲ'}</div>
                    <span className="run-tag" style={{ background: tag.color + '20', color: tag.color, borderColor: tag.color + '60' }}>
                      {tag.label}
                    </span>
                  </div>
                  <div className="run-card-mid">
                    <div className="run-meta-item">
                      <span className="run-meta-icon">⏱</span>
                      <span>{formatDuration(run.durationMin)}</span>
                    </div>
                    <div className="run-meta-item">
                      <span className="run-meta-icon">⚡</span>
                      <span>{formatPace(run.distanceKm, run.durationMin)}</span>
                    </div>
                    <div className="run-meta-item">
                      <span className="run-meta-icon">📅</span>
                      <span>{formatDate(run.date)}</span>
                    </div>
                    {run.notes && (
                      <div className="run-notes">"{run.notes}"</div>
                    )}
                  </div>
                  <button
                    className="run-delete-btn"
                    onClick={() => deleteRun(run.id)}
                    title="ಅಳಿಸಿ"
                  >✕</button>
                </div>
              )
            })
          )}
        </div>
      )}

      {/* STATS VIEW */}
      {view === 'stats' && (
        <div className="run-stats-view">
          {runs.length === 0 ? (
            <div className="run-empty">
              <div className="run-empty-icon">📊</div>
              <p className="run-empty-title">ಅಂಕಿ ಅಂಶ ಇಲ್ಲ</p>
              <p className="run-empty-sub">ಕೆಲವು ಓಟ ದಾಖಲಿಸಿ</p>
            </div>
          ) : (
            <>
              <div className="stats-grid">
                <div className="stats-card stats-card--saffron">
                  <div className="stats-card-value">{totalKm.toFixed(1)}</div>
                  <div className="stats-card-label">ಒಟ್ಟು ಕಿ.ಮೀ</div>
                </div>
                <div className="stats-card stats-card--green">
                  <div className="stats-card-value">{runs.length}</div>
                  <div className="stats-card-label">ಒಟ್ಟು ಓಟಗಳು</div>
                </div>
                <div className="stats-card stats-card--blue">
                  <div className="stats-card-value">{avgKm.toFixed(1)}</div>
                  <div className="stats-card-label">ಸರಾಸರಿ ಕಿ.ಮೀ</div>
                </div>
                <div className="stats-card stats-card--purple">
                  <div className="stats-card-value">{formatPace(totalKm, totalMin)}</div>
                  <div className="stats-card-label">ಸರಾಸರಿ ವೇಗ</div>
                </div>
              </div>

              {best && (
                <div className="stats-best-card">
                  <div className="stats-best-label">🏆 ಅತ್ಯುತ್ತಮ ಓಟ</div>
                  <div className="stats-best-value">{best.distanceKm.toFixed(1)} ಕಿ.ಮೀ</div>
                  <div className="stats-best-meta">
                    {formatDate(best.date)} · {best.route} · {formatDuration(best.durationMin)}
                  </div>
                </div>
              )}

              {/* Progress bars by route */}
              <div className="stats-section">
                <div className="stats-section-title">ರೂಟ್ ಪ್ರಕಾರ ಓಟ</div>
                {ROUTE_PRESETS.map(r => {
                  const count = runs.filter(x => x.route === r).length
                  const km = runs.filter(x => x.route === r).reduce((s, x) => s + x.distanceKm, 0)
                  if (!count) return null
                  return (
                    <div key={r} className="route-stat-row">
                      <span className="route-stat-name">{r}</span>
                      <div className="route-stat-bar-wrap">
                        <div
                          className="route-stat-bar"
                          style={{ width: `${Math.min(100, (km / totalKm) * 100)}%` }}
                        />
                      </div>
                      <span className="route-stat-val">{km.toFixed(1)} ಕಿ.ಮೀ</span>
                    </div>
                  )
                })}
              </div>

              {/* Weekly summary */}
              <div className="stats-section">
                <div className="stats-section-title">📅 ಕಳೆದ 30 ದಿನ</div>
                <div className="stats-summary-row">
                  <span>ಒಟ್ಟು ಓಟಗಳು:</span>
                  <strong>{last30.length}</strong>
                </div>
                <div className="stats-summary-row">
                  <span>ಒಟ್ಟು ದೂರ:</span>
                  <strong>{last30Km.toFixed(1)} ಕಿ.ಮೀ</strong>
                </div>
                <div className="stats-summary-row">
                  <span>ಸರಾಸರಿ ದೂರ:</span>
                  <strong>{last30.length ? (last30Km / last30.length).toFixed(1) : 0} ಕಿ.ಮೀ</strong>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
