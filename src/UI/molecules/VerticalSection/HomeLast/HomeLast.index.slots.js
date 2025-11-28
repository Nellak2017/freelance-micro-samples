import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
import Tooltip from '@mui/material/Tooltip'
// TODO: Consider extracting hard coded data to constants file instead
export const DefaultChildrenHomeLast = (
    <Box display='flex' flexDirection='column' alignItems='center' py={3} maxWidth={MAX_CONTENT_WIDTH} width='100%'>
        <Box display='flex' flexDirection='column' alignItems='center' width='50%' gap={3} >
            <Typography variant='h2' fontWeight='bold' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.h3.fontSize, md: theme.typography.h2.fontSize }, color: theme.palette.primary.contrastText })}>
                From Idea to Production in Days
            </Typography>
            <Typography width='70%' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, color: theme.palette.primary.contrastText })}>
                Accelerate your production with our technology. Reduce downtime and optimize costs. Get a special offer now!
            </Typography>
            <Tooltip title='Work With Us'><Button variant='secondary'>Work With Us</Button></Tooltip>
        </Box>
    </Box>
)