import { useState, useMemo } from 'react'
import { shlokas, CHAPTER_NAMES, CHAPTER_VERSE_COUNTS, groupByChapter, getTodaysShloka } from '../data/shlokas'

export default function ShlokaTab() {
  const [selectedChapter, setSelectedChapter] = useState<string>('today')
  const [selectedVerse, setSelectedVerse] = useState<number>(1)
  const [showSanskrit, setShowSanskrit] = useState(false)

  const shlokasByChapter = useMemo(() => groupByChapter(shlokas), [])
  const todaysShloka = useMemo(() => getTodaysShloka(shlokas), [])

  // Look up shloka by chapter + verse number
  const currentShloka = useMemo(() => {
    if (selectedChapter === 'today') return todaysShloka
    const chapNum = Number(selectedChapter)
    const found = (shlokasByChapter[chapNum] || []).find(
      (s) => Number(s.verse) === selectedVerse
    )
    return found || null
  }, [selectedChapter, selectedVerse, shlokasByChapter, todaysShloka])

  const isToday = selectedChapter === 'today'
  const chapNum = Number(selectedChapter)
  const totalVersesInChapter = isToday ? 0 : (CHAPTER_VERSE_COUNTS[chapNum] || 0)

  // Set of verse numbers that have full content
  const availableVerses = useMemo(() => {
    if (isToday) return new Set<number>()
    return new Set((shlokasByChapter[chapNum] || []).map((s) => Number(s.verse)))
  }, [selectedChapter, shlokasByChapter, chapNum, isToday])

  const displayShloka = isToday ? todaysShloka : currentShloka

  return (
    <div className="tab-content">
      {/* Controls */}
      <div className="controls-row">
        <div className="select-group">
          <label className="select-label">ಅಧ್ಯಾಯ ಆಯ್ಕೆ</label>
          <select
            className="select-input"
            value={selectedChapter}
            onChange={(e) => {
              setSelectedChapter(e.target.value)
              setSelectedVerse(1)
            }}
          >
            <option value="today">ಇಂದಿನ ಶ್ಲೋಕ (Today)</option>
            {Array.from({ length: 18 }, (_, i) => i + 1).map((ch) => (
              <option key={ch} value={String(ch)}>
                ಅಧ್ಯಾಯ {ch} — {CHAPTER_NAMES[ch]} ({CHAPTER_VERSE_COUNTS[ch]} ಶ್ಲೋಕಗಳು)
              </option>
            ))}
          </select>
        </div>

        <div className="select-group">
          <label className="select-label">
            ಶ್ಲೋಕ ಆಯ್ಕೆ
            {!isToday && (
              <span style={{ marginLeft: 6, fontWeight: 400, color: '#9C8E7A' }}>
                ({availableVerses.size}/{totalVersesInChapter} ಲಭ್ಯ)
              </span>
            )}
          </label>
          <select
            className="select-input"
            value={selectedVerse}
            disabled={isToday}
            onChange={(e) => setSelectedVerse(Number(e.target.value))}
          >
            {isToday ? (
              <option value={0}>ಇಂದಿನ ಶ್ಲೋಕ</option>
            ) : (
              Array.from({ length: totalVersesInChapter }, (_, i) => i + 1).map((v) => (
                <option key={v} value={v}>
                  ಶ್ಲೋಕ {v}{availableVerses.has(v) ? ' ✓' : ''}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      {/* Today badge */}
      {isToday && (
        <div className="callout callout-info">
          ಇಂದು — ಅಧ್ಯಾಯ {todaysShloka.chapter}, ಶ್ಲೋಕ {todaysShloka.verse} · ಪ್ರತಿ ದಿನ ಹೊಸ ಶ್ಲೋಕ ತೋರಿಸುತ್ತದೆ
        </div>
      )}

      {/* Shloka Card — full content */}
      {displayShloka ? (
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
            <div className="section">
              <span className="section-label">ಕನ್ನಡ ಶ್ಲೋಕ</span>
              <div className="shloka-text">{displayShloka.kannada}</div>
            </div>

            <button
              className="sanskrit-toggle"
              onClick={() => setShowSanskrit(!showSanskrit)}
            >
              {showSanskrit ? '▲' : '▼'} Sanskrit (Transliteration)
            </button>
            {showSanskrit && (
              <div className="sanskrit-text">{displayShloka.sanskrit}</div>
            )}

            <div className="divider" />

            <div className="section">
              <span className="section-label">ಅರ್ಥ</span>
              <p className="meaning-text">{displayShloka.meaning}</p>
            </div>

            <div className="divider" />

            <div className="section">
              <span className="section-label">ಜೀವನದಲ್ಲಿ ಉಪಯೋಗ</span>
              <p className="application-text">{displayShloka.application}</p>
            </div>
          </div>
        </div>
      ) : (
        /* Placeholder card for verses not yet translated */
        <div className="card shloka-card">
          <div className="card-header">
            <div>
              <span className="card-title">
                ಅಧ್ಯಾಯ {chapNum} · ಶ್ಲೋಕ {selectedVerse}
              </span>
              <span className="card-subtitle">{CHAPTER_NAMES[chapNum]}</span>
            </div>
            <span className="keyword-badge" style={{ background: '#F5F3EE', color: '#9C8E7A', borderColor: '#E8E2D8' }}>
              ಶೀಘ್ರದಲ್ಲಿ
            </span>
          </div>
          <div className="card-body">
            <div className="callout callout-info" style={{ margin: 0 }}>
              ಈ ಶ್ಲೋಕದ ಕನ್ನಡ ಅರ್ಥ ಮತ್ತು ವಿವರಣೆ ಶೀಘ್ರದಲ್ಲಿ ಸೇರಿಸಲಾಗುವುದು.
              ಈ ಮೊದಲು ✓ ಗುರುತಿರುವ ಶ್ಲೋಕಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ.
            </div>
            <div className="divider" />
            <p className="meaning-text" style={{ color: '#9C8E7A', fontStyle: 'italic' }}>
              ಒಟ್ಟು {availableVerses.size} ಶ್ಲೋಕಗಳ ಸಂಪೂರ್ಣ ಅರ್ಥ ಲಭ್ಯ ·
              {' '}{totalVersesInChapter - availableVerses.size} ಶ್ಲೋಕಗಳು ಬರುತ್ತಿವೆ
            </p>
          </div>
        </div>
      )}

      {/* Chapter grid */}
      <div className="chapter-section">
        <h3 className="section-heading">೧೮ ಅಧ್ಯಾಯಗಳು</h3>
        <div className="chapter-grid">
          {Array.from({ length: 18 }, (_, i) => i + 1).map((ch) => (
            <button
              key={ch}
              className={`chapter-btn ${selectedChapter === String(ch) ? 'active' : ''}`}
              onClick={() => {
                setSelectedChapter(String(ch))
                setSelectedVerse(1)
              }}
            >
              <span className="chapter-num">{ch}</span>
              <span className="chapter-name">{CHAPTER_NAMES[ch]}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
