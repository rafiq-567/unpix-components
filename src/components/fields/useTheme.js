import { useState, useEffect } from 'react';

/**
 * useTheme
 * - Reads the current theme from <html data-theme="...">
 * - Persists user preference to localStorage
 * - Falls back to system preference on first visit
 *
 * Usage:
 *   const { theme, toggleTheme, isDark } = useTheme();
 */
export function useTheme() {
  const getInitialTheme = () => {
    const stored = localStorage.getItem('uxpin-theme');
    if (stored === 'dark' || stored === 'light') return stored;
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('uxpin-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
  };
}