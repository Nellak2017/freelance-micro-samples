import { useForm, FormProvider } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { FirstStep } from './DefaultSteps/FirstStep'
import { SecondStep } from './DefaultSteps/SecondStep'
import { Confirm } from './DefaultSteps/Confirm'
import { Success } from './DefaultSteps/Success'
import { CaroselView } from '@/UI/molecules/CaroselView/CaroselView'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'
import { ALL_STEPS_FIELDS, DEFAULT_VALUES } from '@/Core/components/MultiStepForm/DefaultSteps/DefaultSteps.constants'
import { handleSaveForm } from '@/Infra/workflows/MultiStepForm.handlers'

import { useSnackbar } from '@/Application/hooks/shared/useSnackbar'
import { AppSnackbar } from '@/UI/atoms/AppSnackBar/AppSnackBar'

// TODO: Extract this and all like it to hooks in App layer
export const StepForm = ({ serverStep }) => {
    const { state: snackbarState, services: { closeSnackbar, showError, showSuccess } } = useSnackbar()
    const [activeStep, updateStep] = useQueryParam('form-step', serverStep)
    const methods = useForm({ defaultValues: DEFAULT_VALUES, shouldUnregister: false, mode: 'onTouched' })
    const nextStep = async () => {
        const isValid = await methods.trigger(ALL_STEPS_FIELDS?.[Number(activeStep) % ALL_STEPS_FIELDS.length], { shouldFocus: true })
        if (isValid) { updateStep(Number(activeStep) + 1) }
    }
    const prevStep = () => updateStep(Number(activeStep) - 1)
    const handleFormSubmit = async (form) => {
        const { error } = await handleSaveForm({ form })
        const processedError = error?.message.includes('Auth session missing') ? `${error?.message} \nYou must sign-in first.` : error
        if (error) { showError(processedError) } else { updateStep(Number(activeStep) + 1); showSuccess('Successfully Submitted the Form') }
    }
    return (
        <FormProvider {...methods}>
            <Box component='form' display='flex' justifyContent='center' alignItems='center' flexDirection='column' gap={3} width='100%'
                onSubmit={methods.handleSubmit((data => handleFormSubmit({ ...data })))} method='POST' id={'multi-step-auth-form'}
                aria-labelledby='multi-step-auth-form-title'
            >
                <CaroselView index={activeStep}>
                    <FirstStep handleNext={nextStep} />
                    <SecondStep handleNext={nextStep} handleBack={prevStep} />
                    <Confirm><Box display='flex' justifyContent='center' mt={3} gap={3}><Button onClick={prevStep}>Back</Button><Button color='success' type='submit'>Confirm and Continue</Button></Box></Confirm>
                    <Box><Success /><Box display='flex' justifyContent='center' mt={3} gap={3}><Button onClick={prevStep}>Back To Form</Button></Box></Box>
                </CaroselView>
                <AppSnackbar state={snackbarState} services={{ onClose: closeSnackbar }} />
            </Box>
        </FormProvider>
    )
}