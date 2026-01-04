import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { handleSignOut } from '@/Infra/workflows/AuthForm.handlers'
import { useAuth } from '@/Application/hooks/shared/useAuth'
// NOTE: This is a hook for a default right slot, if you want to override it then make your own custom one
export const useRightSlot = ({ buttonData, makeButtonData }) => {
    const router = useRouter()
    const { user, setAuth } = useAuth()
    const usedButtonData = useMemo(() => user ? makeButtonData({ 'Log out': async () => { await handleSignOut({ router, setAuth }) } }) : buttonData, [user, makeButtonData, setAuth, router, buttonData])
    const usedColor = useMemo(() => user ? 'error' : 'primary', [user])
    return { state: { usedButtonData, usedColor, user } }
}