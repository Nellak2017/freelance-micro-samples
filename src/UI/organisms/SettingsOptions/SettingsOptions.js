import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import { itemToIndex } from '@/Core/components/SettingsOptions/SettingsOptions.domain'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'
import { useAuth } from '@/Application/hooks/shared/useAuth'
import { useSnackbar } from '@/Application/hooks/shared/useSnackbar'
import { CaroselView } from '@/UI/molecules/CaroselView/CaroselView'
import { AppSnackbar } from '@/UI/atoms/AppSnackBar/AppSnackBar'
import { SettingsAccountDetailsSlot, SettingsPasswordSlot, SettingsManageSlot } from './SettingsOptions.slots'
export const SettingsOptions = ({ email }) => {
    const router = useRouter()
    const { setAuth } = useAuth()
    const [selected] = useQueryParam('section', null)
    const index = useMemo(() => itemToIndex(selected), [selected])
    const { state: snackbarState, services: { showSuccess, showError, closeSnackbar } } = useSnackbar()
    return (
        <>
            <CaroselView index={index}>
                <SettingsAccountDetailsSlot state={{ email }} />
                <SettingsPasswordSlot state={{ email }} services={{ showError, showSuccess }} />
                <SettingsManageSlot state={{ email }} services={{ showError, router, setAuth }} />
            </CaroselView>
            <AppSnackbar state={snackbarState} services={{ onClose: closeSnackbar }} />
        </>
    )
}