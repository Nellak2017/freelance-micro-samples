import { useState, useEffect, useCallback, useMemo } from 'react'
import { supabase } from '@/Infra/Supabase/supabaseBrowserClient'
import { useSessionStorage } from './useSessionStorage'
// useAuth uses sessionStorage to cache the user auth data so that there is minimal client side flickering without resorting to some invasive SSR solution
// TODO: Consider using the cookie approach since Supabase natively does this already
export const useAuth = (defaultUserState = null) => {
    const { value: storedUser, setValue: setStoredUser } = useSessionStorage('sb-user', null)
    const [user, setUserState] = useState(defaultUserState)
    const loading = useMemo(() => !user, [user])
    const setAuth = useCallback(next => { setStoredUser(next); setUserState(next) }, [setStoredUser, setUserState])
    useEffect(() => { setUserState(storedUser) /* eslint-disable-line react-hooks/set-state-in-effect */ }, [storedUser, setStoredUser]) // Sync SSR -> client
    useEffect(() => {
        if (user) return // already have user from sessionStorage
        (async () => {
            const { data, error } = await supabase.auth.getUser()
            if (error && error?.name !== 'AuthSessionMissingError') console.warn('Unexpected error fetching user:', error?.message)
            if (error) { setAuth(null) } else { setAuth(data?.user ?? null) }
        })()
        const { data: listener } = supabase.auth.onAuthStateChange((_, session) => { setAuth(session?.user ?? null) })
        return () => listener.subscription.unsubscribe()
    }, [user, setAuth])
    return { user, loading, setAuth }
}