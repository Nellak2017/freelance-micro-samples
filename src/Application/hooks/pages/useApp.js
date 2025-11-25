import { theme as MUIDarkTheme, lightTheme as MUILightTheme } from '@/UI/styles/MUITheme'
import { useMemo, useEffect, useState } from 'react'
import { useLocalStorage } from '../shared/useLocalStorage'

// TODO: Change to the Cookie version to solve the SSR flicker problem
export const useApp = () => {
    const { value, setValue } = useLocalStorage('themeMode', null)
    const [clientValue, setClientValue] = useState(null) // null = SSR, unknown
    const MUITheme = useMemo(() => clientValue === 'light' ? MUILightTheme : MUIDarkTheme, [clientValue])
    useEffect(() => { setClientValue(value) /* eslint-disable-line react-hooks/set-state-in-effect */ }, [value, setValue]) // Sync SSR -> client
    useEffect(() => { // Listens for when the OS theme changes
        if (!clientValue) return
        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const handler = e => setValue(e.matches ? 'dark' : 'light')
        media.addEventListener('change', handler)
        return () => { media.removeEventListener('change', handler) }
    }, [clientValue, setValue])
    return { MUITheme }
}