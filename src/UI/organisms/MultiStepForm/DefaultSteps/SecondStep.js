import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { FormInputTextField } from '../../AuthForm/AuthForm.slots.helpers' // TODO: this needs to be moved to the general version not the specific one
import { GeneralMultiStepAuthForm } from './DefaultSteps.slots.helpers'
import { useMultiStep } from '@/Application/hooks/organisms/MultiStepForm/useMultiStepForm'
import { FORM_DATA } from '@/Core/components/MultiStepForm/DefaultSteps/DefaultSteps.constants'

const SECOND_STEP_DATA = FORM_DATA?.[1]
const SecondStepForm = ({ handleNext, handleBack, children, }) => {
    const { register, errors, watch } = useMultiStep()
    return (
        <>
            <Grid container spacing={2}>{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, { register, errors, watch }) : child)}</Grid>
            <Box display='flex' justifyContent='flex-end' width='100%' gap={3}>
                <Button title={'Back'} mt={3} ml={1} onClick={handleBack}>Back</Button>
                <Button title={'Next'} mt={3} ml={1} onClick={handleNext}>Next</Button>
            </Box>
        </>
    )
}
const SecondStepGridInput = React.memo(({ children, ...rest }) => (<Grid mb={3} size={{ xs: 12 }}><FormInputTextField {...rest}>{children}</FormInputTextField></Grid>))
const EstimatedTimelineInput = ({ register, errors, watch }) => (
    <SecondStepGridInput state={SECOND_STEP_DATA?.estimatedTimeline} services={{ register }} errors={errors} value={watch(SECOND_STEP_DATA?.estimatedTimeline?.fieldName) || SECOND_STEP_DATA?.estimatedTimeline?.options?.[0]} select>
        {SECOND_STEP_DATA?.estimatedTimeline?.options?.map(option => (<MenuItem key={option} value={option} sx={{ boxShadow: 'none' }}>{option}</MenuItem>))}
    </SecondStepGridInput>
)
const BudgetRangeInput = ({ register, errors, watch }) => (
    <SecondStepGridInput state={SECOND_STEP_DATA?.budgetRange} services={{ register }} errors={errors} value={watch(SECOND_STEP_DATA?.budgetRange?.fieldName) || SECOND_STEP_DATA?.budgetRange?.options?.[0]} select>
        {SECOND_STEP_DATA?.budgetRange?.options?.map(option => (<MenuItem key={option} value={option} sx={{ boxShadow: 'none' }}>{option}</MenuItem>))}
    </SecondStepGridInput>
)
const ProjectDescriptionInput = ({ register, errors }) => (<SecondStepGridInput state={SECOND_STEP_DATA?.projectDescription} services={{ register }} errors={errors} multiline/>)
export const SecondStep = ({ handleNext, handleBack, ...rest }) => (
    <GeneralMultiStepAuthForm state={{ activeStep: 1 }} {...rest}>
        <SecondStepForm handleNext={handleNext} handleBack={handleBack} >
            <EstimatedTimelineInput />
            <BudgetRangeInput />
            <ProjectDescriptionInput />
        </SecondStepForm>
    </GeneralMultiStepAuthForm>
)
export default SecondStep