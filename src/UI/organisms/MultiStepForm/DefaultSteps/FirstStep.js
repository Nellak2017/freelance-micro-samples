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
    const { register, errors } = useMultiStep()
    return (
        <>
            <Grid container spacing={2}>{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, { register, errors }) : child)}</Grid>
            <Box display='flex' justifyContent='flex-end' width='100%'><Button title={'Next'} mt={3} ml={1} onClick={handleNext}>Next</Button></Box>
        </>
    )
}
const FirstStepGridInput = ({ children, ...rest }) => (<Grid size={{ xs: 12, sm: 6 }}><FormInputTextField {...rest}>{children}</FormInputTextField></Grid>)
const FirstNameInput = React.memo(({ register, errors }) => (<FirstStepGridInput state={FIRST_NAME_DATA} services={{ register }} errors={errors} />))
const LastNameInput = React.memo(({ register, errors }) => (<FirstStepGridInput state={LAST_NAME_DATA} services={{ register }} errors={errors} />))
const EmailInput = React.memo(({ register, errors }) => (<FirstStepGridInput state={EMAIL_DATA} services={{ register }} errors={errors} />))
const GenderInput = React.memo(({ register, errors }) => ( // TODO: fix the bug where the gender resets when moving forms
    <FirstStepGridInput state={GENDER_DATA} services={{ register }} errors={errors} select defaultValue='Male'>
        <MenuItem value='Male' sx={{ boxShadow: 'none' }}>Male</MenuItem>
        <MenuItem value='Female' sx={{ boxShadow: 'none' }}>Female</MenuItem>
    </FirstStepGridInput>
))
export const FirstStep = ({ handleNext, ...rest }) => (
    <GeneralMultiStepAuthForm {...rest}>
        <FirstStepForm handleNext={handleNext}>
            <FirstNameInput /><LastNameInput />
            <EmailInput /><GenderInput />
        </FirstStepForm>
    </GeneralMultiStepAuthForm>
)