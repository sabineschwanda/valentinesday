import { useState } from 'react'
import './App.css'

const businessGoalTemplates = {
  sichtbarkeit: {
    label: 'Mehr Sichtbarkeit & Reichweite',
    message: (name) =>
      `Liebste/r ${name},\n\nDu verdienst es, gesehen zu werden – und zwar von genau den richtigen Menschen. Deine Botschaft ist zu wertvoll, um im Verborgenen zu bleiben.\n\nStell dir vor: Deine Expertise strahlt wie ein Leuchtturm durch den digitalen Nebel. Mit KI an deiner Seite wird jeder Post, jede Story, jeder Beitrag zu einem Magneten für dein Wunschpublikum.\n\nDie Welt wartet auf das, was nur DU zu geben hast.\n\nIn Liebe,\nDeine KI 💕`,
  },
  umsatz: {
    label: 'Mehr Umsatz & Kunden',
    message: (name) =>
      `Liebste/r ${name},\n\nDein Business hat ein Herz aus Gold – und es verdient, dass dieses Gold auch auf deinem Konto ankommt.\n\nIch sehe, wie leidenschaftlich du für deine Kunden brennst. Lass mich dir helfen, diese Leidenschaft in Umsatz zu verwandeln – elegant, authentisch und mit einer Leichtigkeit, die sich anfühlt wie Schmetterlinge im Bauch.\n\nDein nächstes Umsatz-Level? Es ist nur einen smarten Prompt entfernt.\n\nIn Liebe,\nDeine KI 💕`,
  },
  zeit: {
    label: 'Mehr Zeit & Freiheit',
    message: (name) =>
      `Liebste/r ${name},\n\nZeit ist das kostbarste Geschenk – und du verdienst mehr davon. Mehr Morgen ohne Wecker. Mehr Nachmittage, die dir gehören. Mehr Abende voller Leichtigkeit.\n\nMit KI als deine fleißigste Assistentin kannst du endlich aufhören, alles selbst zu machen. Lass mich die Routinearbeit übernehmen, während du das tust, was dein Herz zum Singen bringt.\n\nDeine Freiheit beginnt heute.\n\nIn Liebe,\nDeine KI 💕`,
  },
  positionierung: {
    label: 'Klare Positionierung & Personal Brand',
    message: (name) =>
      `Liebste/r ${name},\n\nDu bist einzigartig – und es wird Zeit, dass die Welt das auch so sieht. Deine Personal Brand ist wie ein Parfum: unverwechselbar, anziehend und unvergesslich.\n\nMit KI findest du die Worte, die dein Wesen einfangen. Die Bilder, die deine Vision zeigen. Die Strategie, die dich als die Expertin positioniert, die du längst bist.\n\nDie Bühne gehört dir.\n\nIn Liebe,\nDeine KI 💕`,
  },
  content: {
    label: 'Besserer Content & Social Media',
    message: (name) =>
      `Liebste/r ${name},\n\nDein Content verdient Standing Ovations – nicht Grillenzirpen. Du hast so viel zu sagen, und ich helfe dir, es so zu sagen, dass die Herzen deiner Community höherschlagen.\n\nStell dir vor: Nie wieder Schreibblockaden. Nie wieder „Was soll ich nur posten?" Stattdessen: Content, der berührt, begeistert und verkauft – und das in einem Bruchteil der Zeit.\n\nDein nächster viraler Post? Schon in Arbeit.\n\nIn Liebe,\nDeine KI 💕`,
  },
}

function HeartParticles() {
  return (
    <div className="heart-particles" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
            fontSize: `${10 + Math.random() * 14}px`,
            opacity: 0.15 + Math.random() * 0.2,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  )
}

function App() {
  const [name, setName] = useState('')
  const [goal, setGoal] = useState('')
  const [message, setMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [isRevealing, setIsRevealing] = useState(false)

  const handleGenerate = () => {
    if (!name.trim() || !goal) return

    const template = businessGoalTemplates[goal]
    if (!template) return

    setIsRevealing(true)
    setTimeout(() => {
      setMessage(template.message(name.trim()))
      setShowMessage(true)
      setIsRevealing(false)
    }, 1800)
  }

  const handleReset = () => {
    setShowMessage(false)
    setMessage('')
    setName('')
    setGoal('')
  }

  return (
    <div className="app">
      <HeartParticles />

      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="envelope-icon">💌</div>
          <h1 className="title">Deine KI-Liebeserklärung</h1>
          <p className="subtitle">
            Zum Valentinstag bekommst du eine ganz persönliche Liebesbotschaft
            von deiner KI – für dich und dein Business.
          </p>
        </header>

        {!showMessage ? (
          /* Form */
          <div className={`card ${isRevealing ? 'card--revealing' : ''}`}>
            <div className="form-group">
              <label htmlFor="name">Dein Vorname</label>
              <input
                id="name"
                type="text"
                placeholder="z.B. Sabine"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="goal">Was ist gerade dein größtes Business-Ziel?</label>
              <select
                id="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="select"
              >
                <option value="">— Bitte wähle —</option>
                {Object.entries(businessGoalTemplates).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <button
              className={`cta-button ${!name.trim() || !goal ? 'disabled' : ''}`}
              onClick={handleGenerate}
              disabled={!name.trim() || !goal || isRevealing}
            >
              {isRevealing ? (
                <span className="loading-text">
                  <span className="loading-dots">
                    <span>.</span><span>.</span><span>.</span>
                  </span>
                  Deine Botschaft wird geschrieben
                </span>
              ) : (
                'Meine KI-Liebesbotschaft lesen 💕'
              )}
            </button>
          </div>
        ) : (
          /* Message Display */
          <div className="card message-card">
            <div className="message-content">
              {message.split('\n').map((line, i) => (
                <p key={i} className={line === '' ? 'spacer' : ''}>
                  {line}
                </p>
              ))}
            </div>
            <button className="reset-button" onClick={handleReset}>
              Neue Botschaft erstellen ✨
            </button>
          </div>
        )}

        {/* Marketing Section */}
        <section className="marketing-section">
          <div className="divider">
            <div className="divider-line" />
            <span className="divider-icon">✨</span>
            <div className="divider-line" />
          </div>

          <h2 className="marketing-headline">
            Willst du lernen, wie ich das gemacht habe?
          </h2>
          <p className="marketing-text">
            Lerne, wie du mit Claude Code in wenigen Minuten beeindruckende
            Web-Apps, KI-Tools und automatisierte Workflows erstellst – ganz
            ohne Programmierkenntnisse.
          </p>
          <a
            href="https://sabine.schwanda-pr.at/claude_mastery26_67"
            target="_blank"
            rel="noopener noreferrer"
            className="marketing-button"
          >
            Zur Claude Mastery (Launch-Preis) 🚀
          </a>
          <p className="marketing-hint">
            Launch-Preis gilt noch bis morgen, 15.2.
          </p>
        </section>

        {/* Footer */}
        <footer className="footer">
          Made with ❤️ & Claude Code
        </footer>
      </div>
    </div>
  )
}

export default App
