import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../shared/useAuth'
import { useSnackbar } from '../../shared/useSnackbar'
export const useAuthForm = initialFormState => {
    const router = useRouter() // NOTE: Needed for page transition in Infra
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: initialFormState }) // NOTE: Needed for form state in Infra
    const { setAuth } = useAuth() // NOTE: Mainly for UX not strictly needed, the page eventually updates properly
    const { state: snackbarState, services: { showSuccess, showError, closeSnackbar } } = useSnackbar() // NOTE: Mainly for UX not strictly needed, offers feedback
    return { state: { errors, snackbarState, }, services: { router, showSuccess, showError, closeSnackbar, register, handleSubmit, reset, setAuth }, }
}