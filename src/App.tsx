import { useState } from 'react'
import ShlokaTab from './components/ShlokaTab'
import StoryTab from './components/StoryTab'
import './App.css'

type Tab = 'shloka' | 'story'

function formatDate(d: Date): string {
  return d.toLocaleDateString('kn-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('shloka')

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-top">
          <div className="header-title-group">
            <span className="om-symbol">OM</span>
            <div>
              <h1 className="app-title">ಶ್ರೀ ಭಗವದ್ಗೀತಾ</h1>
              <p className="app-subtitle">ಪ್ರತಿ ದಿನ ಒಂದು ಶ್ಲೋಕ · ಕನ್ನಡ ಅರ್ಥ · ಜೀವನದಲ್ಲಿ ಉಪಯೋಗ</p>
            </div>
          </div>
          <span className="today-date">{formatDate(new Date())}</span>
        </div>

        <nav className="tab-nav">
          <button
            className={`tab-btn ${activeTab === 'shloka' ? 'active' : ''}`}
            onClick={() => setActiveTab('shloka')}
          >
            ಗೀತಾ ಶ್ಲೋಕ
          </button>
          <button
            className={`tab-btn ${activeTab === 'story' ? 'active' : ''}`}
            onClick={() => setActiveTab('story')}
          >
            ಭಾಗವತ ಕಥೆ
          </button>
        </nav>
      </header>

      <main className="app-main">
        {activeTab === 'shloka' ? <ShlokaTab /> : <StoryTab />}
      </main>

      <footer className="app-footer">
        <span>ಶ್ರೀಕೃಷ್ಣ ಅರ್ಪಣಮಸ್ತು</span>
        <span>ಪ್ರತಿ ದಿನ ಒಂದು ಶ್ಲೋಕ, ಒಂದು ಜೀವನ ದರ್ಶನ</span>
      </footer>
    </div>
  )
}
