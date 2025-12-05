import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { FormInputTextField } from '../../AuthForm/AuthForm.slots.helpers' // TODO: this needs to be moved to the general version not the specific one
import { GeneralMultiStepAuthForm } from './DefaultSteps.slots.helpers'
import { useMultiStep } from '@/Application/hooks/organisms/MultiStepForm/useMultiStepForm'
import { CITY_DATA, DATE_OF_BIRTH_DATA, PHONE_NUMBER_DATA } from '@/Core/components/MultiStepForm/DefaultSteps/DefaultSteps.constants'

// TODO: Make better rules and ensure the htmlFor, autoComplete, and others are right as well
const SecondStepForm = ({ handleNext, handleBack, children, }) => {
    const { register, errors } = useMultiStep()
    return (
        <>
            <Grid container spacing={2}>{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, { register, errors }) : child)}</Grid>
            <Box display='flex' justifyContent='flex-end' width='100%' gap={3}>
                <Button title={'Back'} mt={3} ml={1} onClick={handleBack}>Back</Button>
                <Button title={'Next'} mt={3} ml={1} onClick={handleNext}>Next</Button>
            </Box>
        </>
    )
}
const SecondStepGridInput = React.memo(({ children, ...rest }) => (<Grid size={{ xs: 12 }}><FormInputTextField {...rest}>{children}</FormInputTextField></Grid>))
const CityInput = ({ register, errors }) => (<SecondStepGridInput state={CITY_DATA} services={{ register }} errors={errors} />)
const DateOfBirthInput = ({ register, errors }) => (<SecondStepGridInput state={DATE_OF_BIRTH_DATA} services={{ register }} errors={errors} InputLabelProps={{ shrink: true }} />)
const PhoneNumberInput = ({ register, errors }) => (<SecondStepGridInput state={PHONE_NUMBER_DATA} services={{ register }} errors={errors} />)
export const SecondStep = ({ handleNext, handleBack, ...rest }) => (
    <GeneralMultiStepAuthForm state={{ activeStep: 1 }} {...rest}>
        <SecondStepForm handleNext={handleNext} handleBack={handleBack} >
            <CityInput />
            <DateOfBirthInput />
            <PhoneNumberInput />
        </SecondStepForm>
    </GeneralMultiStepAuthForm>
)
export default SecondStep