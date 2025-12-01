import { theme as darkTheme, lightTheme } from '@/UI/styles/MUITheme'
import { useMemo, useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

// TODO: Change to the Cookie version to solve the SSR flicker problem
// NOTE: Setting defaultMode to anything not null makes isReady never valid
export const useThemeMode = (defaultMode = null) => {
    const { value: storedMode, setValue: setStoredMode } = useLocalStorage('themeMode', null)
    const [mode, setModeState] = useState(defaultMode) // null = SSR, unknown
    const theme = useMemo(() => mode === 'light' ? lightTheme : darkTheme, [mode])
    const setMode = next => { setStoredMode(next); setModeState(next)}
    useEffect(() => { setModeState(storedMode) /* eslint-disable-line react-hooks/set-state-in-effect */ }, [storedMode, setStoredMode]) // Sync SSR -> client
    useEffect(() => { // Listens for when the OS theme changes
        if (!mode) return
        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const handler = e => setMode(e.matches ? 'dark' : 'light') // not just setStoredMode
        media.addEventListener('change', handler)
        return () => { media.removeEventListener('change', handler) }
    }, [mode, setStoredMode])
    return { theme, mode, setMode, isReady: mode !== null }
}