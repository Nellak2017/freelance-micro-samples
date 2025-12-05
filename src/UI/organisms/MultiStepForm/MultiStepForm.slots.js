import { useForm, FormProvider } from 'react-hook-form'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { FirstStep } from './DefaultSteps/FirstStep'
import { SecondStep } from './DefaultSteps/SecondStep'
import { Confirm } from './DefaultSteps/Confirm'
import { Success } from './DefaultSteps/Success'
import { CaroselView } from '@/UI/molecules/CaroselView/CaroselView'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'
import { ALL_STEPS_FIELDS } from '@/Core/components/MultiStepForm/DefaultSteps/DefaultSteps.constants'

export const StepForm = ({ serverStep }) => {
    const [activeStep, updateStep] = useQueryParam('form-step', serverStep)
    const methods = useForm({ defaultValues: { firstName: '', lastName: '', email: '', gender: 'Male', city: '', dob: '', phoneNumber: '' }, shouldUnregister: false, mode: 'onTouched' })
    const nextStep = async () => {
        const isValid = await methods.trigger(ALL_STEPS_FIELDS?.[Number(activeStep) % ALL_STEPS_FIELDS.length], { shouldFocus: true })
        if (isValid) { updateStep(Number(activeStep) + 1) }
    }
    const prevStep = () => updateStep(Number(activeStep) - 1)
    const handleFormSubmit = ({ ...data }) => { updateStep(Number(activeStep) + 1); console.log({ ...data }) }
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
                        <Box display='flex' justifyContent='center' mt={3} gap={3}>
                            <Button onClick={prevStep}>Back</Button><Button color='success' type='submit'>Confirm and Continue</Button>
                        </Box>
                    </Confirm>
                    <Box>
                        <Success />
                        <Box display='flex' justifyContent='center' mt={3} gap={3}>
                            <Button onClick={prevStep}>Back</Button>
                        </Box>
                    </Box>
                </CaroselView>
            </Box>
        </FormProvider>
    )
}