import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Step from '@mui/material/Step'
import Typography from '@mui/material/Typography'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'
import { MultiStepContext } from '@/Application/hooks/organisms/MultiStepForm/useMultiStepForm'
import { PREAMBLE_DATA } from '@/Core/components/MultiStepForm/DefaultSteps/DefaultSteps.constants'

export const FormPreamble = ({ state: { header, subHeader, labels, } = PREAMBLE_DATA, activeStep = 0 }) => (<>
    <Box component='header' mt={5} mb={3} id='multi-step-auth-form-title'><Typography variant='h2' align='center'>{header}</Typography><Typography variant='subtitle1' align='center' mt={2}>{subHeader}</Typography></Box>
    <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>{labels.map(label => (<Step key={label}><StepLabel>{label}</StepLabel></Step>))}</Stepper>
</>)
export const GeneralMultiStepAuthForm = ({ state: { preambleState, activeStep = 0 } = {}, children, ...rest }) => {
    const { register, formState: { errors }, watch } = useFormContext() // NOTE: this will not work independently, you should make a new component for the independent version where it has the form in here and not out there
    const [step, updateStep] = useQueryParam('form-step', '0') // NOTE: using step for activeStep in the preamble leads to a slight lag, so we pass it down instead
    const value = useMemo(() => ({ step: Number(step), updateStep, register, errors, watch }), [step, updateStep, register, errors, watch])
    return (
        <MultiStepContext.Provider value={value}>
            <Box display='flex' flexDirection='column' gap={3} {...rest}>
                <FormPreamble state={preambleState} activeStep={Number(activeStep)} />
                {children}
            </Box>
        </MultiStepContext.Provider>
    )
}