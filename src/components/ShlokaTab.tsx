import { useState, useMemo } from 'react'
import { shlokas, CHAPTER_NAMES, groupByChapter, getTodaysShloka } from '../data/shlokas'

export default function ShlokaTab() {
  const [selectedChapter, setSelectedChapter] = useState<string>('today')
  const [selectedVerseIdx, setSelectedVerseIdx] = useState<number>(0)
  const [showSanskrit, setShowSanskrit] = useState(false)

  const shlokasByChapter = useMemo(() => groupByChapter(shlokas), [])
  const todaysShloka = useMemo(() => getTodaysShloka(shlokas), [])

  const currentShloka = useMemo(() => {
    if (selectedChapter === 'today') return todaysShloka
    const chap = shlokasByChapter[Number(selectedChapter)] || []
    return chap[selectedVerseIdx] || todaysShloka
  }, [selectedChapter, selectedVerseIdx, shlokasByChapter, todaysShloka])

  const versesInChapter = useMemo(() => {
    if (selectedChapter === 'today') return []
    return shlokasByChapter[Number(selectedChapter)] || []
  }, [selectedChapter, shlokasByChapter])

  const isToday = selectedChapter === 'today'

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
              setSelectedVerseIdx(0)
            }}
          >
            <option value="today">ಇಂದಿನ ಶ್ಲೋಕ (Today)</option>
            {Array.from({ length: 18 }, (_, i) => i + 1).map((ch) =>
              shlokasByChapter[ch] ? (
                <option key={ch} value={String(ch)}>
                  ಅಧ್ಯಾಯ {ch} — {CHAPTER_NAMES[ch]}
                </option>
              ) : null
            )}
          </select>
        </div>

        <div className="select-group">
          <label className="select-label">ಶ್ಲೋಕ ಆಯ್ಕೆ</label>
          <select
            className="select-input"
            value={selectedVerseIdx}
            disabled={isToday}
            onChange={(e) => setSelectedVerseIdx(Number(e.target.value))}
          >
            {isToday ? (
              <option value={0}>ಇಂದಿನ ಶ್ಲೋಕ</option>
            ) : (
              versesInChapter.map((s, i) => (
                <option key={i} value={i}>
                  ಶ್ಲೋಕ {s.verse}
                </option>
              ))
            )}
          </select>
        </div>
      </div>

      {/* Today badge */}
      {isToday && (
        <div className="callout callout-info">
          ಇಂದು — ಅಧ್ಯಾಯ {currentShloka.chapter}, ಶ್ಲೋಕ {currentShloka.verse} · ಪ್ರತಿ ದಿನ ಹೊಸ ಶ್ಲೋಕ ತೋರಿಸುತ್ತದೆ
        </div>
      )}

      {/* Shloka Card */}
      <div className="card shloka-card">
        <div className="card-header">
          <div>
            <span className="card-title">
              ಅಧ್ಯಾಯ {currentShloka.chapter} · ಶ್ಲೋಕ {currentShloka.verse}
            </span>
            <span className="card-subtitle">{CHAPTER_NAMES[currentShloka.chapter]}</span>
          </div>
          <span className="keyword-badge">{currentShloka.keyword}</span>
        </div>

        <div className="card-body">
          {/* Kannada shloka */}
          <div className="section">
            <span className="section-label">ಕನ್ನಡ ಶ್ಲೋಕ</span>
            <div className="shloka-text">
              {currentShloka.kannada}
            </div>
          </div>

          {/* Sanskrit toggle */}
          <button
            className="sanskrit-toggle"
            onClick={() => setShowSanskrit(!showSanskrit)}
          >
            {showSanskrit ? '▲' : '▼'} Sanskrit (Transliteration)
          </button>
          {showSanskrit && (
            <div className="sanskrit-text">{currentShloka.sanskrit}</div>
          )}

          <div className="divider" />

          {/* Meaning */}
          <div className="section">
            <span className="section-label">ಅರ್ಥ</span>
            <p className="meaning-text">{currentShloka.meaning}</p>
          </div>

          <div className="divider" />

          {/* Application */}
          <div className="section">
            <span className="section-label">ಜೀವನದಲ್ಲಿ ಉಪಯೋಗ</span>
            <p className="application-text">{currentShloka.application}</p>
          </div>
        </div>
      </div>

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
                setSelectedVerseIdx(0)
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
