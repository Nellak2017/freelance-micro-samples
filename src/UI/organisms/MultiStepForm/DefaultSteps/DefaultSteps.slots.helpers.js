import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Step from '@mui/material/Step'
import Typography from '@mui/material/Typography'
import { MAX_WIDTH } from '@/Core/components/AuthForm/AuthForm.constants'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'
import { MultiStepContext } from '@/Application/hooks/organisms/MultiStepForm/useMultiStepForm'

// TODO: set with defaults from an extracted Constants file
// TODO: Extract the Box to a shared styled component, it is shared with form itself above
export const FormPreamble = ({ state: { header = 'test header', subHeader = 'test subheader', labels = ['first', 'second', 'third'], } = {}, activeStep = 0 }) => (<>
    <Box component='header' my={5} id='multi-step-auth-form-title'><Typography variant='h4' align='center'>{header}</Typography><Typography variant='subtitle2' align='center' sx={{ mt: 2 }}>{subHeader}</Typography></Box>
    <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>{labels.map(label => (<Step key={label}><StepLabel>{label}</StepLabel></Step>))}</Stepper>
</>)
export const GeneralMultiStepAuthForm = ({ state: { preambleState, activeStep = 0 } = {}, children, ...rest }) => {
    const { register, formState: { errors } } = useFormContext() // NOTE: this will not work independently, you should make a new component for the independent version where it has the form in here and not out there
    const [step, updateStep] = useQueryParam('form-step', '0') // NOTE: using step for activeStep in the preamble leads to a slight lag, so we pass it down instead
    const value = useMemo(() => ({ step: Number(step), updateStep, register, errors }), [step, updateStep, register, errors])
    return (
        <MultiStepContext.Provider value={value}>
            <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' rowGap={3} width='100%' maxWidth={MAX_WIDTH} {...rest}>
                <FormPreamble state={preambleState} activeStep={Number(activeStep)} />
                {children}
            </Box>
        </MultiStepContext.Provider>
    )
}
