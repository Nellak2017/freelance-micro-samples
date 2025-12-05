import { useForm, FormProvider } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { FirstStep } from './DefaultSteps/FirstStep'
import { SecondStep } from './DefaultSteps/SecondStep'
import { CaroselView } from '@/UI/molecules/CaroselView/CaroselView'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'
import { Confirm } from './DefaultSteps/Confirm'

export const StepForm = ({ serverStep }) => {
    const [activeStep, updateStep] = useQueryParam('form-step', serverStep)
    const methods = useForm({ defaultValues: { firstName: '', lastName: '', email: '', gender: 'Male', city: '', dob: '', phoneNumber: '' } , shouldUnregister: false,})
    const nextStep = () => updateStep(Number(activeStep) + 1)
    const prevStep = () => updateStep(Number(activeStep) - 1)
    const handleFormSubmit = ({ ...data }) => { console.log({ ...data }) }
    return (
        <FormProvider {...methods}>
            <Box component='form' display='flex' justifyContent='center' alignItems='center' flexDirection='column' gap={3} width='100%'
                onSubmit={methods.handleSubmit((data => handleFormSubmit({ ...data })))} method='POST' id={'multi-step-auth-form'}
                aria-labelledby='multi-step-auth-form-title'
            >
                <CaroselView index={activeStep}>
                    <FirstStep handleNext={nextStep} />
                    <SecondStep handleNext={nextStep} handleBack={prevStep} />
                    <Confirm>
                        <Box display='flex' justifyContent='flex-end' mt={3} gap={3}>
                            <Button onClick={prevStep}>Back</Button><Button variant='contained' color='success' type='submit'>Confirm and Continue</Button>
                        </Box>
                    </Confirm>
                </CaroselView>
            </Box>
        </FormProvider>
    )
}