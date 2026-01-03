import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../shared/useAuth'
export const useAuthForm = (initialFormState) => {
    const router = useRouter()
    const { setAuth } = useAuth()
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: initialFormState })
    const [isSuccessOpen, setIsSuccessOpen] = useState(false)
    const [isErrorOpen, setIsErrorOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState('There was some unspecified error')
    const showSuccess = () => setIsSuccessOpen(true)
    const handleSuccessClose = (_, reason) => reason === 'clickaway' ? undefined : setIsSuccessOpen(false)
    const handleErrorClose = (_, reason) => reason === 'clickaway' ? undefined : setIsErrorOpen(false)
    const showError = error => { setIsErrorOpen(true); setErrorMessage(error?.message); console.error(error?.message) } // NOTE: success text is constant so it doesn't have a function that allows this. We either show it or not
    return {
        state: { router, errors, isSuccessOpen, isErrorOpen, errorMessage, },
        services: { showSuccess, showError, handleSuccessClose, handleErrorClose, register, handleSubmit, reset, setAuth },
    }
}