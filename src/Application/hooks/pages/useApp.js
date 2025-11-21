import { theme as MUIDarkTheme, lightTheme as MUILightTheme } from '@/UI/styles/MUITheme'
import { useMemo, useEffect, useState } from 'react'
import { useLocalStorage } from '../shared/useLocalStorage'

export const useApp = () => {
    const { value, setValue } = useLocalStorage('themeMode', null)
    const [clientValue, setClientValue] = useState(null) // null = SSR, unknown
    useEffect(() => { // Sync SSR -> client
        if (value) { setClientValue(value) }
        else {
            const mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
            setClientValue(mode)
            setValue(mode)
        }
    }, [value, setValue])
    const MUITheme = useMemo(() => {
        if (!clientValue) return MUIDarkTheme // fallback for SSR
        return clientValue === 'dark' ? MUIDarkTheme : MUILightTheme
    }, [clientValue])
    useEffect(() => { // Listens for when the OS theme changes
        if (!clientValue) return
        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const handler = e => setValue(e.matches ? 'dark' : 'light')
        media.addEventListener('change', handler)
        return () => { media.removeEventListener('change', handler) }
    }, [clientValue, setValue])
    return { MUITheme }
}