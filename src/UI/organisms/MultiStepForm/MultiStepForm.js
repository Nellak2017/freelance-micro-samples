import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { StepForm } from './MultiStepForm.slots'
export const MultiStepForm = ({ children = (<StepForm />) }) => (
    <Container component='main' maxWidth='sm'>
        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            {children}
        </Paper>
    </Container>
)