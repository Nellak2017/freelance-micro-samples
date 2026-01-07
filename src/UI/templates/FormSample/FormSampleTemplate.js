import Box from '@mui/material/Box'
import { MultiStepForm } from '@/UI/organisms/MultiStepForm/MultiStepForm'
import { StepForm } from '@/UI/organisms/MultiStepForm/MultiStepForm.slots'
import { FormNav } from '@/UI/molecules/Nav/Nav'
export const FormSampleTemplate = ({ serverStep, defaultValues }) => (
    <Box>
        <FormNav />
        <MultiStepForm><StepForm serverStep={serverStep} defaultValues={defaultValues} /></MultiStepForm>
    </Box>
)