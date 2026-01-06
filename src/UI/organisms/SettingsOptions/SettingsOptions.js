import { useSettingsOptions } from '@/Application/hooks/organisms/SettingsOptions/useSettingsOptions'
import { CaroselView } from '@/UI/molecules/CaroselView/CaroselView'
import { AppSnackbar } from '@/UI/atoms/AppSnackBar/AppSnackBar'
import { SettingsAccountDetailsSlot, SettingsPasswordSlot, SettingsManageSlot } from './SettingsOptions.slots'
export const SettingsOptions = ({ email }) => {
    const { state: { index, snackbarState } = {}, services: { router, showError, showSuccess, setAuth, closeSnackbar } = {} } = useSettingsOptions?.() || {}
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