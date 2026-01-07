import { useForm } from 'react-hook-form'
import { ALL_STEPS_FIELDS } from '@/Core/components/MultiStepForm/DefaultSteps/DefaultSteps.constants'
import { useSnackbar } from '@/Application/hooks/shared/useSnackbar'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'
import { handleSaveForm } from '@/Infra/workflows/MultiStepFormSubmission.handlers'

export const useStepForm = ({ serverStep, defaultValues }) => {
    const methods = useForm({ defaultValues, shouldUnregister: false, mode: 'onTouched' }) // NOTE: Needed for form state in Infra
    const [activeStep, updateStep] = useQueryParam('form-step', serverStep) // NOTE: Needed for form state in client, to display the right form page
    const { state: snackbarState, services: { closeSnackbar, showError, showSuccess } } = useSnackbar() // NOTE: Mainly for UX not strictly needed, offers feedback
    const prevStep = () => updateStep(Number(activeStep) - 1)
    const nextStep = async () => {
        const isValid = await methods.trigger(ALL_STEPS_FIELDS?.[Number(activeStep) % ALL_STEPS_FIELDS.length], { shouldFocus: true })
        if (isValid) { updateStep(Number(activeStep) + 1) }
    }
    const handleFormSubmit = async (form) => {
        const { error } = await handleSaveForm({ form })
        const processedError = error?.message.includes('Auth session missing') ? `${error?.message} \nYou must sign-in first.` : error
        if (error) { showError(processedError) } else { updateStep(Number(activeStep) + 1); showSuccess('Successfully Submitted the Form') }
    }
    return { state: { activeStep, snackbarState, methods, }, services: { closeSnackbar, prevStep, nextStep, handleFormSubmit, }, }
}