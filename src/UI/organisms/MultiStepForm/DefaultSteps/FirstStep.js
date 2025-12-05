import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { FormInputTextField } from '../../AuthForm/AuthForm.slots.helpers' // TODO: this needs to be moved to the general version not the specific one
import { GeneralMultiStepAuthForm } from './DefaultSteps.slots.helpers'
import { useMultiStep } from '@/Application/hooks/organisms/MultiStepForm/useMultiStepForm'
import { FIRST_NAME_DATA, LAST_NAME_DATA, EMAIL_DATA, GENDER_DATA } from '@/Core/components/MultiStepForm/DefaultSteps/DefaultSteps.constants'

// TODO: Make better rules and ensure the htmlFor, autoComplete, and others are right as well
const FirstStepForm = ({ handleNext, children }) => {
    const { register, errors, watch } = useMultiStep()
    return (
        <>
            <Grid container spacing={2}>{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, { register, errors, watch }) : child)}</Grid>
            <Box display='flex' justifyContent='flex-end' width='100%'><Button title={'Next'} mt={3} ml={1} onClick={handleNext}>Next</Button></Box>
        </>
    )
}
const FirstStepGridInput = React.memo(({ children, ...rest }) => (<Grid size={{ xs: 12, sm: 6 }}><FormInputTextField {...rest}>{children}</FormInputTextField></Grid>))
const FirstNameInput = ({ register, errors }) => (<FirstStepGridInput state={FIRST_NAME_DATA} services={{ register }} errors={errors} />)
const LastNameInput = ({ register, errors }) => (<FirstStepGridInput state={LAST_NAME_DATA} services={{ register }} errors={errors} />)
const EmailInput = ({ register, errors }) => (<FirstStepGridInput state={EMAIL_DATA} services={{ register }} errors={errors} />)
const GenderInput = ({ register, errors, watch }) => (
    <FirstStepGridInput state={GENDER_DATA} services={{ register }} errors={errors} value={watch('gender') || 'Male'} select>
        <MenuItem value='Male' sx={{ boxShadow: 'none' }}>Male</MenuItem>
        <MenuItem value='Female' sx={{ boxShadow: 'none' }}>Female</MenuItem>
    </FirstStepGridInput>
)
export const FirstStep = ({ handleNext, ...rest }) => (
    <GeneralMultiStepAuthForm {...rest}>
        <FirstStepForm handleNext={handleNext}>
            <FirstNameInput /><LastNameInput />
            <EmailInput /><GenderInput />
        </FirstStepForm>
    </GeneralMultiStepAuthForm>
)
export default FirstStep