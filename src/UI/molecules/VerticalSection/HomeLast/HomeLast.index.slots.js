import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
// TODO: Extract hard coded data to constants file instead
export const DefaultChildrenHomeLast = (
    <Box display='flex' flexDirection='column' alignItems='center' py={3} maxWidth={MAX_CONTENT_WIDTH} width='100%'>
        <Box display='flex' flexDirection='column' alignItems='center' width='50%' gap={3} >
            <Typography variant='h2' fontWeight='bold' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.h3.fontSize, md: theme.typography.h2.fontSize }, color: theme.palette.primary.contrastText })}>
                Have a Project in Mind?
            </Typography>
            <Typography width='70%' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.h4.fontSize, md: theme.typography.h3.fontSize }, color: theme.palette.primary.contrastText })}>
                Check my portfolio and get in touch for your frontend demo project.
            </Typography>
            <Button variant='secondary' title='Work With Us' href='/form-sample'>Work With Me</Button>
        </Box>
    </Box>
)