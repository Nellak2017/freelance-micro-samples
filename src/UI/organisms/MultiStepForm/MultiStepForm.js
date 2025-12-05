import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { StepForm } from './MultiStepForm.slots'
// TODO: Review the structure of how I do components and their slots and variations, it seems inconsistent or not optimized
export const MultiStepForm = ({ children = (<StepForm />) }) => (
    <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <Paper variant='outlined' sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            {children}
        </Paper>
    </Container>
)