import { useState, useEffect, useCallback } from 'react'

export const useLocalStorage = (key, fallback) => {
    const read = () => {
        if (typeof window === 'undefined') return fallback
        return window.localStorage.getItem(key) !== null ? window.localStorage.getItem(key) : fallback
    }
    const [value, setValue] = useState(read)
    const updateValue = useCallback(val => { if (typeof window !== 'undefined') window.localStorage.setItem(key, val); setValue(val) },[key])
    useEffect(() => { // Listens for local storage changes from outside this tab
        if (typeof window === 'undefined') return
        const onStorage = () => setValue(read())
        window.addEventListener('storage', onStorage)
        return () => window.removeEventListener('storage', onStorage)
    }, [key])
    return { value, setValue: updateValue }
}