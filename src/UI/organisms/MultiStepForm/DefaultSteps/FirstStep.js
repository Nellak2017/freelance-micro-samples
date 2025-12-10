import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { FormInputTextField } from '../../AuthForm/AuthForm.slots.helpers' // TODO: this needs to be moved to the general version not the specific one
import { GeneralMultiStepAuthForm } from './DefaultSteps.slots.helpers'
import { useMultiStep } from '@/Application/hooks/organisms/MultiStepForm/useMultiStepForm'
import { FORM_DATA } from '@/Core/components/MultiStepForm/DefaultSteps/DefaultSteps.constants'

const FIRST_STEP_DATA = FORM_DATA?.[0]
const FirstStepForm = ({ handleNext, children }) => {
    const { register, errors, watch } = useMultiStep()
    return (
        <>
            <Grid container spacing={2}>{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, { register, errors, watch }) : child)}</Grid>
            <Box display='flex' justifyContent='flex-end' width='100%'><Button title={'Next'} mt={3} ml={1} onClick={handleNext}>Next</Button></Box>
        </>
    )
}
const FirstStepGridInput = React.memo(({ children, ...rest }) => (<Grid mb={3} size={{ xs: 12, sm: 6 }} role='none'><FormInputTextField {...rest}>{children}</FormInputTextField></Grid>))
const FullNameInput = ({ register, errors }) => (<FirstStepGridInput state={FIRST_STEP_DATA?.fullName} services={{ register }} errors={errors} />)
const EmailInput = ({ register, errors }) => (<FirstStepGridInput state={FIRST_STEP_DATA?.email} services={{ register }} errors={errors} />)
const CompanyNameInput = ({ register, errors }) => (<FirstStepGridInput state={FIRST_STEP_DATA?.companyName} services={{ register }} errors={errors} />)
const RoleInput = ({ register, errors, watch }) => (
    <FirstStepGridInput state={FIRST_STEP_DATA?.role} services={{ register }} errors={errors} value={watch(FIRST_STEP_DATA?.role?.fieldName) || FIRST_STEP_DATA?.role?.options?.[0]} select>
        {FIRST_STEP_DATA?.role?.options?.map(option => (<MenuItem key={option} value={option} sx={{ boxShadow: 'none' }}>{option}</MenuItem>))}
    </FirstStepGridInput>
)
export const FirstStep = ({ handleNext, ...rest }) => (
    <GeneralMultiStepAuthForm {...rest}>
        <FirstStepForm handleNext={handleNext}>
            <FullNameInput /><EmailInput />
            <CompanyNameInput /><RoleInput />
        </FirstStepForm>
    </GeneralMultiStepAuthForm>
)
export default FirstStep