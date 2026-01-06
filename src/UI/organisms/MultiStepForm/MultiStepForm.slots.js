import { FormProvider } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useStepForm } from '@/Application/hooks/organisms/MultiStepForm/useStepForm'
import { CaroselView } from '@/UI/molecules/CaroselView/CaroselView'
import { AppSnackbar } from '@/UI/atoms/AppSnackBar/AppSnackBar'
import { FirstStep } from './DefaultSteps/FirstStep'
import { SecondStep } from './DefaultSteps/SecondStep'
import { Confirm } from './DefaultSteps/Confirm'
import { Success } from './DefaultSteps/Success'
import { StepFormButtonGroup } from './Helpers/MultiStepForm.helpers'

export const StepForm = ({ serverStep }) => {
    const { state: { snackbarState, methods } = {}, services: { closeSnackbar, prevStep, nextStep, handleFormSubmit, } = {} } = useStepForm?.(serverStep) || {}
    return (
        <FormProvider {...methods}>
            <Box component='form' display='flex' justifyContent='center' alignItems='center' flexDirection='column' gap={3} width='100%'
                onSubmit={methods.handleSubmit((data => handleFormSubmit({ ...data })))} method='POST' id={'multi-step-auth-form'}
                aria-labelledby='multi-step-auth-form-title'
            >
                <CaroselView index={activeStep}>
                    <FirstStep handleNext={nextStep} />
                    <SecondStep handleNext={nextStep} handleBack={prevStep} />
                    <Confirm><StepFormButtonGroup><Button onClick={prevStep}>Back</Button><Button color='success' type='submit'>Confirm and Continue</Button></StepFormButtonGroup></Confirm>
                    <Box><Success /><StepFormButtonGroup><Button onClick={prevStep}>Back To Form</Button></StepFormButtonGroup></Box>
                </CaroselView>
                <AppSnackbar state={snackbarState} services={{ onClose: closeSnackbar }} />
            </Box>
        </FormProvider>
    )
}