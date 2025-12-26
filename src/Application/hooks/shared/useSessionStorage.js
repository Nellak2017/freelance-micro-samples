import { useState, useEffect, useCallback } from 'react'

export const useSessionStorage = (key, fallback) => {
    const read = useCallback(() => {
        if (typeof window === 'undefined') return fallback
        const raw = window.sessionStorage.getItem(key)
        if (raw === null) return fallback
        try { return JSON.parse(raw) } catch (e) { console.warn(`Invalid sessionStorage for key "${key}", resetting to fallback.`); return fallback }
    }, [fallback, key])
    const [value, setValue] = useState(read)
    const updateValue = useCallback(value => {
        if (typeof window !== 'undefined') {
            window.sessionStorage.setItem(key, JSON.stringify(value))
            window.dispatchEvent(new CustomEvent('sessionStorage-update', { detail: { key, value } }))
        }
        setValue(value)
    }, [key])
    useEffect(() => { // Listens for session storage changes from outside this tab
        if (typeof window === 'undefined') return
        const onStorage = () => setValue(read())
        const onSameTab = e => { if (e.detail.key === key) { setValue(e.detail.value) } }
        window.addEventListener('storage', onStorage)
        window.addEventListener('sessionStorage-update', onSameTab)
        return () => {
            window.removeEventListener('storage', onStorage)
            window.removeEventListener('sessionStorage-update', onSameTab)
        }
    }, [key, read])
    return { value, setValue: updateValue }
}