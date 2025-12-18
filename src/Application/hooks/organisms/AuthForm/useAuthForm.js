import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
export const useAuthForm = (initialFormState) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialFormState })
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
    const handleOpen = () => setIsSnackbarOpen(true)
    const handleClose = (_, reason) => reason === 'clickaway' ? undefined : setIsSnackbarOpen(false)
    return { state: { router, isSnackbarOpen, errors }, services: { handleOpen, handleClose, handleSubmit, register }, }
}