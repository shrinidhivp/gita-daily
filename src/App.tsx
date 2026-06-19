import { useState } from 'react'
import ShlokaTab from './components/ShlokaTab'
import StoryTab from './components/StoryTab'
import RunTab from './components/RunTab'
import './App.css'

type Tab = 'shloka' | 'story' | 'run'

const TABS: { id: Tab; icon: string; label: string }[] = [
  { id: 'shloka', icon: '📖', label: 'ಗೀತಾ ಶ್ಲೋಕ' },
  { id: 'story',  icon: '🪔', label: 'ಭಾಗವತ ಕಥೆ' },
  { id: 'run',    icon: '🏃', label: 'ಓಟ ನಕ್ಷೆ' },
]

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
            <div className="om-circle">
              <span className="om-text">ॐ</span>
            </div>
            <div>
              <h1 className="app-title">ಶ್ರೀ ಭಗವದ್ಗೀತಾ</h1>
              <p className="app-subtitle">ಪ್ರತಿ ದಿನ ಒಂದು ಶ್ಲೋಕ · ಕನ್ನಡ ಅರ್ಥ · ಜೀವನದಲ್ಲಿ ಉಪಯೋಗ</p>
            </div>
          </div>
          <div className="header-date-badge">
            <span className="date-icon">📅</span>
            <span>{formatDate(new Date())}</span>
          </div>
        </div>

        <nav className="tab-nav">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </nav>
      </header>

      <main className="app-main">
        <div className="tab-panel" style={{ display: activeTab === 'shloka' ? 'block' : 'none' }}>
          <ShlokaTab />
        </div>
        <div className="tab-panel" style={{ display: activeTab === 'story' ? 'block' : 'none' }}>
          <StoryTab />
        </div>
        <div className="tab-panel" style={{ display: activeTab === 'run' ? 'block' : 'none' }}>
          <RunTab />
        </div>
      </main>

      <footer className="app-footer">
        <div className="footer-left">
          <span className="footer-om">ॐ</span>
          <span>ಶ್ರೀಕೃಷ್ಣ ಅರ್ಪಣಮಸ್ತು</span>
        </div>
        <span className="footer-right">ಪ್ರತಿ ದಿನ ಒಂದು ಶ್ಲೋಕ, ಒಂದು ಜೀವನ ದರ್ಶನ</span>
      </footer>
    </div>
  )
}
