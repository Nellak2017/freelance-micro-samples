import { theme as MUIDarkTheme, lightTheme as MUILightTheme } from '@/UI/styles/MUITheme'
import { useMemo, useEffect } from 'react'
import { useLocalStorage } from '../shared/useLocalStorage'

export const useApp = () => {
    const { value, setValue } = useLocalStorage('themeMode', typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const MUITheme = useMemo(() => value === 'dark' ? MUIDarkTheme : MUILightTheme, [value])
    useEffect(() => {
        if (typeof window === 'undefined') return
        const media = window.matchMedia('(prefers-color-scheme: dark)')
        const handler = e => setValue(e.matches ? 'dark' : 'light')
        media.addEventListener('change', handler)
        return () => { media.removeEventListener('change', handler) }
    }, [setValue])
    return { MUITheme }
}