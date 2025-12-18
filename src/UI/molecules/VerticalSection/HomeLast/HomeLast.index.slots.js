import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { PageContainer } from '../../PageContainer/PageContainer'
import { HOME_LAST_DATA } from '@/Core/components/VerticalSection/HomeLast.constant'
const { header, description, buttonLabel, buttonHref } = HOME_LAST_DATA
export const DefaultChildrenHomeLast = () => (
    <PageContainer>
        <Box display='flex' flexDirection='column' alignItems='center' py={3} width='100%'>
            <Box display='flex' flexDirection='column' alignItems='center' width='50%' gap={3} >
                <Typography variant='h2' fontWeight='bold' textAlign='center' color='primary.contrastText'>{header}</Typography>
                <Typography variant='h3' component='p' width='70%' textAlign='center' color='primary.contrastText'>{description}</Typography>
                <Button variant='secondary' title='Work With Us' href={buttonHref}>{buttonLabel}</Button>
            </Box>
        </Box>
    </PageContainer>
)