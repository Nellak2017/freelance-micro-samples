import { useState, useEffect, useCallback } from 'react'

export const useLocalStorage = (key, fallback) => {
    const read = useCallback(() => {
        if (typeof window === 'undefined') return fallback
        return window.localStorage.getItem(key) !== null ? window.localStorage.getItem(key) : fallback
    }, [fallback, key])
    const [value, setValue] = useState(read)
    const updateValue = useCallback(value => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(key, value)
            window.dispatchEvent(new CustomEvent('localstorage-update', { detail: { key, value } }))
        }
        setValue(value)
    }, [key])
    useEffect(() => { // Listens for local storage changes from outside this tab
        if (typeof window === 'undefined') return
        const onStorage = () => setValue(read())
        const onSameTab = e => { if (e.detail.key === key) { setValue(e.detail.value) } }
        window.addEventListener('storage', onStorage)
        window.addEventListener('localstorage-update', onSameTab) 
        return () => {
            window.removeEventListener('storage', onStorage)
            window.removeEventListener('localstorage-update', onSameTab)
        }
    }, [key, read])
    return { value, setValue: updateValue }
}