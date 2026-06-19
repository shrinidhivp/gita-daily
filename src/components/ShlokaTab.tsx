import { useState, useMemo } from 'react'
import { shlokas, CHAPTER_NAMES, CHAPTER_VERSE_COUNTS, groupByChapter, getTodaysShloka } from '../data/shlokas'

// ── helpers ────────────────────────────────────────────────────────────────

/** Split application text on · — ; into individual sentences */
function splitApplication(text: string): string[] {
  return text
    .split(/[·—;]/)
    .map(s => s.trim())
    .filter(Boolean)
}

/** Generate life-domain cards from keyword + meaning + application */
function buildLifeCards(keyword: string, meaning: string, application: string) {
  const parts = splitApplication(application)

  return [
    {
      icon: '🌅',
      domain: 'ಬೆಳಿಗ್ಗೆ ಧ್ಯಾನ',
      color: '#D97706',
      bg: '#FFFBEB',
      border: '#FCD34D',
      text: parts[0] || application,
      action: `"${keyword}" ಎಂಬ ಪದ ಮನಸ್ಸಿನಲ್ಲಿ ಇಟ್ಟು ೫ ನಿಮಿಷ ಮೌನ ಧ್ಯಾನ ಮಾಡಿ.`,
    },
    {
      icon: '💼',
      domain: 'ಕೆಲಸದಲ್ಲಿ',
      color: '#1D4ED8',
      bg: '#EFF6FF',
      border: '#93C5FD',
      text: parts[1] || `${meaning.split('.')[0]}. ಇದನ್ನು ಕೆಲಸದ ಸಂದರ್ಭದಲ್ಲಿ ಅನ್ವಯಿಸಿ.`,
      action: `ಇಂದು ಕೆಲಸದಲ್ಲಿ ಫಲದ ನಿರೀಕ್ಷೆ ಇಲ್ಲದೆ ಒಂದು ಕೆಲಸ ಮಾಡಿ.`,
    },
    {
      icon: '👨‍👩‍👧',
      domain: 'ಮನೆ ಮತ್ತು ಸಂಬಂಧ',
      color: '#15803D',
      bg: '#F0FDF4',
      border: '#86EFAC',
      text: `"${keyword}" ಎಂಬ ಭಾವ ಕುಟುಂಬದ ಜೊತೆ ಹೇಗೆ ಇರಬಹುದು ಎಂದು ಯೋಚಿಸಿ.`,
      action: parts[2] || `ಇಂದು ಒಬ್ಬ ಕುಟುಂಬದ ಸದಸ್ಯನ/ಳ ಮಾತು ತಾಳ್ಮೆಯಿಂದ ಕೇಳಿ.`,
    },
    {
      icon: '🙏',
      domain: 'ಆಧ್ಯಾತ್ಮ ಸಾಧನೆ',
      color: '#7C3AED',
      bg: '#F5F3FF',
      border: '#C4B5FD',
      text: `ಈ ಶ್ಲೋಕದ ಸಾರ — "${keyword}" — ನಿಮ್ಮ ಆಧ್ಯಾತ್ಮ ಪಯಣದ ಒಂದು ಮೈಲಿಗಲ್ಲು.`,
      action: `ಇಂದು ಮಲಗುವ ಮೊದಲು ಈ ಶ್ಲೋಕ ಒಂದು ಸಲ ಮನಸ್ಸಿನಲ್ಲಿ ನೆನೆಯಿರಿ.`,
    },
  ]
}

// ── component ──────────────────────────────────────────────────────────────

export default function ShlokaTab() {
  const [selectedChapter, setSelectedChapter] = useState<string>('today')
  const [selectedVerse, setSelectedVerse]     = useState<number>(1)
  const [showSanskrit, setShowSanskrit]       = useState(false)

  const shlokasByChapter = useMemo(() => groupByChapter(shlokas), [])
  const todaysShloka     = useMemo(() => getTodaysShloka(shlokas), [])

  const currentShloka = useMemo(() => {
    if (selectedChapter === 'today') return todaysShloka
    const chapNum = Number(selectedChapter)
    return (shlokasByChapter[chapNum] || []).find(s => Number(s.verse) === selectedVerse) || null
  }, [selectedChapter, selectedVerse, shlokasByChapter, todaysShloka])

  const isToday    = selectedChapter === 'today'
  const chapNum    = Number(selectedChapter)
  const totalVerse = isToday ? 0 : (CHAPTER_VERSE_COUNTS[chapNum] || 0)

  const availableVerses = useMemo(() => {
    if (isToday) return new Set<number>()
    return new Set((shlokasByChapter[chapNum] || []).map(s => Number(s.verse)))
  }, [selectedChapter, shlokasByChapter, chapNum, isToday])

  const displayShloka = isToday ? todaysShloka : currentShloka

  const lifeCards = useMemo(() => {
    if (!displayShloka) return []
    return buildLifeCards(displayShloka.keyword, displayShloka.meaning, displayShloka.application)
  }, [displayShloka])

  return (
    <div className="tab-content">

      {/* ── Dropdowns ──────────────────────────────── */}
      <div className="controls-row">
        <div className="select-group">
          <label className="select-label">ಅಧ್ಯಾಯ ಆಯ್ಕೆ</label>
          <select
            className="select-input"
            value={selectedChapter}
            onChange={e => { setSelectedChapter(e.target.value); setSelectedVerse(1) }}
          >
            <option value="today">ಇಂದಿನ ಶ್ಲೋಕ (Today)</option>
            {Array.from({ length: 18 }, (_, i) => i + 1).map(ch => (
              <option key={ch} value={String(ch)}>
                ಅಧ್ಯಾಯ {ch} — {CHAPTER_NAMES[ch]} ({CHAPTER_VERSE_COUNTS[ch]})
              </option>
            ))}
          </select>
        </div>

        <div className="select-group">
          <label className="select-label">
            ಶ್ಲೋಕ ಆಯ್ಕೆ
            {!isToday && (
              <span style={{ marginLeft: 6, fontWeight: 400, color: '#9C8C7A' }}>
                ({availableVerses.size}/{totalVerse} ✓)
              </span>
            )}
          </label>
          <select
            className="select-input"
            value={selectedVerse}
            disabled={isToday}
            onChange={e => setSelectedVerse(Number(e.target.value))}
          >
            {isToday ? (
              <option value={0}>ಇಂದಿನ ಶ್ಲೋಕ</option>
            ) : (
              Array.from({ length: totalVerse }, (_, i) => i + 1).map(v => (
                <option key={v} value={v}>
                  ಶ್ಲೋಕ {v}{availableVerses.has(v) ? ' ✓' : ''}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      {/* ── Today banner ───────────────────────────── */}
      {isToday && (
        <div className="callout callout-info">
          📅 ಇಂದು — ಅಧ್ಯಾಯ {todaysShloka.chapter}, ಶ್ಲೋಕ {todaysShloka.verse} · ಪ್ರತಿ ದಿನ ಹೊಸ ಶ್ಲೋಕ ತೋರಿಸುತ್ತದೆ
        </div>
      )}

      {/* ── Shloka card ────────────────────────────── */}
      {displayShloka ? (
        <>
          <div className="card shloka-card">
            <div className="card-header">
              <div>
                <span className="card-title">
                  ಅಧ್ಯಾಯ {displayShloka.chapter} · ಶ್ಲೋಕ {displayShloka.verse}
                </span>
                <span className="card-subtitle">{CHAPTER_NAMES[displayShloka.chapter]}</span>
              </div>
              <span className="keyword-badge">{displayShloka.keyword}</span>
            </div>

            <div className="card-body">
              {/* Kannada shloka */}
              <div className="section">
                <span className="section-label">ಕನ್ನಡ ಶ್ಲೋಕ</span>
                <div className="shloka-text">{displayShloka.kannada}</div>
              </div>

              {/* Sanskrit toggle */}
              <button className="sanskrit-toggle" onClick={() => setShowSanskrit(v => !v)}>
                {showSanskrit ? '▲' : '▼'} Sanskrit (Transliteration)
              </button>
              {showSanskrit && (
                <div className="sanskrit-text">{displayShloka.sanskrit}</div>
              )}

              <div className="divider" />

              {/* Meaning */}
              <div className="section">
                <span className="section-label">ಅರ್ಥ</span>
                <p className="meaning-text">{displayShloka.meaning}</p>
              </div>
            </div>
          </div>

          {/* ── Use in Life ─── detailed section ──── */}
          <div className="life-section">
            <div className="life-section-header">
              <span className="life-section-icon">🌿</span>
              <div>
                <h3 className="life-section-title">ಜೀವನದಲ್ಲಿ ಉಪಯೋಗ</h3>
                <p className="life-section-sub">ಈ ಶ್ಲೋಕ ಇಂದು ನಿಮ್ಮ ಜೀವನದ ಪ್ರತಿ ಭಾಗದಲ್ಲಿ ಹೇಗೆ ಅನ್ವಯಿಸಬಹುದು</p>
              </div>
              <span className="life-keyword-pill">{displayShloka.keyword}</span>
            </div>

            <div className="life-cards-grid">
              {lifeCards.map(card => (
                <div
                  key={card.domain}
                  className="life-card"
                  style={{
                    background: card.bg,
                    borderColor: card.border,
                  }}
                >
                  <div className="life-card-domain-row">
                    <span className="life-card-icon">{card.icon}</span>
                    <span className="life-card-domain" style={{ color: card.color }}>
                      {card.domain}
                    </span>
                  </div>
                  <p className="life-card-text">{card.text}</p>
                  <div className="life-card-action" style={{ borderColor: card.border }}>
                    <span className="life-card-action-label" style={{ color: card.color }}>
                      ✦ ಇಂದಿನ ಅಭ್ಯಾಸ
                    </span>
                    <p className="life-card-action-text">{card.action}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reflection prompt */}
            <div className="life-reflection">
              <span className="life-reflection-icon">💭</span>
              <div>
                <p className="life-reflection-q">ಇಂದಿನ ಪ್ರಶ್ನೆ</p>
                <p className="life-reflection-text">
                  "{displayShloka.keyword}" ಎಂಬ ಈ ತತ್ತ್ವ ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಇಂದು ಎಲ್ಲಿ ಅಗತ್ಯ ಎನಿಸುತ್ತದೆ?
                  ಒಂದು ನಿಮಿಷ ಯೋಚಿಸಿ, ಮನಸ್ಸಿಗೆ ಬರುವ ಮೊದಲ ಉತ್ತರ ನಿಮ್ಮ ದಾರಿ.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Placeholder for untranslated verses */
        <div className="card shloka-card">
          <div className="card-header">
            <div>
              <span className="card-title">ಅಧ್ಯಾಯ {chapNum} · ಶ್ಲೋಕ {selectedVerse}</span>
              <span className="card-subtitle">{CHAPTER_NAMES[chapNum]}</span>
            </div>
            <span className="keyword-badge" style={{ background: '#F5F3EE', color: '#9C8E7A', borderColor: '#E8E2D8' }}>
              ಶೀಘ್ರದಲ್ಲಿ
            </span>
          </div>
          <div className="card-body">
            <div className="callout callout-info">
              ಈ ಶ್ಲೋಕದ ಕನ್ನಡ ಅರ್ಥ ಶೀಘ್ರದಲ್ಲಿ ಸೇರಿಸಲಾಗುವುದು. ✓ ಗುರುತಿರುವ ಶ್ಲೋಕಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.
            </div>
            <p className="meaning-text" style={{ color: '#9C8E7A', fontStyle: 'italic' }}>
              {availableVerses.size} ಶ್ಲೋಕಗಳ ಸಂಪೂರ್ಣ ಅರ್ಥ ಲಭ್ಯ · {totalVerse - availableVerses.size} ಶ್ಲೋಕಗಳು ಬರುತ್ತಿವೆ
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
