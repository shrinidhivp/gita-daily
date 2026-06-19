import { useState, useMemo } from 'react'
import { stories } from '../data/stories'

function getTodaysStory() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000)
  return stories[dayOfYear % stories.length]
}

export default function StoryTab() {
  const [selectedId, setSelectedId] = useState<number | 'today'>('today')

  const todaysStory = useMemo(() => getTodaysStory(), [])

  const currentStory = useMemo(() => {
    if (selectedId === 'today') return todaysStory
    return stories.find((s) => s.id === selectedId) || todaysStory
  }, [selectedId, todaysStory])

  return (
    <div className="tab-content">
      {/* Controls */}
      <div className="controls-row single">
        <div className="select-group">
          <label className="select-label">ಕಥೆ ಆಯ್ಕೆ</label>
          <select
            className="select-input"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value === 'today' ? 'today' : Number(e.target.value))}
          >
            <option value="today">ಇಂದಿನ ಕಥೆ (Today)</option>
            {stories.map((s) => (
              <option key={s.id} value={s.id}>
                {s.id}. {s.titleKannada}
              </option>
            ))}
          </select>
        </div>
      </div>

      {selectedId === 'today' && (
        <div className="callout callout-saffron">
          ಇಂದಿನ ಕಥೆ — {currentStory.titleKannada} · ಪ್ರತಿ ದಿನ ಹೊಸ ಕಥೆ
        </div>
      )}

      {/* Story card */}
      <div className="card story-card">
        <div className="card-header">
          <div>
            <span className="card-title">{currentStory.titleKannada}</span>
            <span className="card-subtitle">{currentStory.source}</span>
          </div>
          <span className="keyword-badge keyword-badge--story">ಕಥೆ</span>
        </div>

        <div className="card-body">
          <div className="section">
            <span className="section-label">ಕಥೆ</span>
            <p className="story-text">{currentStory.content}</p>
          </div>

          <div className="divider" />

          <div className="section">
            <span className="section-label">ಜೀವನ ಪಾಠ</span>
            <p className="application-text">{currentStory.lesson}</p>
          </div>
        </div>
      </div>

      {/* Story list */}
      <div className="chapter-section">
        <h3 className="section-heading">ಎಲ್ಲ ಕಥೆಗಳು</h3>
        <div className="story-list">
          {stories.map((s) => (
            <button
              key={s.id}
              className={`story-list-item ${(selectedId === s.id || (selectedId === 'today' && todaysStory.id === s.id)) ? 'active' : ''}`}
              onClick={() => setSelectedId(s.id)}
            >
              <span className="story-list-num">{s.id}</span>
              <div className="story-list-info">
                <span className="story-list-title">{s.titleKannada}</span>
                <span className="story-list-source">{s.source}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
