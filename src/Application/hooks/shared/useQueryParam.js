import { useCallback, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export const useQueryParam = (key, defaultValue = '') => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [value, setValue] = useState((searchParams.get(key) ?? defaultValue))
    useEffect(() => {
        const next = searchParams.get(key) ?? defaultValue
        if (next !== value) setValue(next)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams, key]) // sync local state when URL changes
    const updateValue = useCallback(next => {
        setValue(next)
        const params = new URLSearchParams(searchParams.toString())
        if (next) params.set(key, next)
        else params.delete(key)
        router.replace(`?${params.toString()}`)
    }, [router, searchParams, key]) // update URL when value changes
    return [value, updateValue]
}