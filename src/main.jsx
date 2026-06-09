import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './theme.css'
import './index.css'
import App from './App.jsx'

/**
 * Root wrapper — reads the html[data-theme] attribute and syncs
 * it with MUI's ThemeProvider so MUI components (DataGrid,
 * DatePicker, etc.) also respond to dark mode.
 */
function Root() {
  const getTheme = () =>
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'

  // Initialize from localStorage / system preference (same logic as useTheme.js)
  const getInitialMode = () => {
    const stored = localStorage.getItem('uxpin-theme')
    if (stored === 'dark' || stored === 'light') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const [mode, setMode] = useState(getInitialMode)

  // Keep MUI in sync whenever the html attribute changes
  useEffect(() => {
    // Apply initial theme immediately (before ThemeToggle mounts)
    document.documentElement.setAttribute('data-theme', mode)

    const observer = new MutationObserver(() => {
      setMode(getTheme())
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  const muiTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'dark' && {
        background: {
          default: '#0f172a',
          paper:   '#1e293b',
        },
        primary: {
          main: '#60a5fa',
        },
      }),
    },
  })

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)