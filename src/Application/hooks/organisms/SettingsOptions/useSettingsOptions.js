import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { itemToIndex } from '@/Core/components/SettingsOptions/SettingsOptions.domain'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'
import { useAuth } from '@/Application/hooks/shared/useAuth'
import { useSnackbar } from '@/Application/hooks/shared/useSnackbar'
export const useSettingsOptions = () => {
    const router = useRouter() // NOTE: Needed for page transition in Infra
    const [selected] = useQueryParam('section', null) // NOTE: Needed on the client so the correct page will display in settings
    const index = useMemo(() => itemToIndex(selected), [selected]) // NOTE: Needed on the client so the correct page will display in settings
    const { setAuth } = useAuth() // NOTE: Mainly for UX not strictly needed, the page eventually updates properly
    const { state: snackbarState, services: { showSuccess, showError, closeSnackbar } } = useSnackbar() // NOTE: Mainly for UX not strictly needed, offers feedback
    return { state: { index, snackbarState}, services: { router, showError, showSuccess, setAuth, closeSnackbar },}
}