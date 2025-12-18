import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'
export const DummyPage = ({ state: { header, subHeader } }) => {
    const [value, _] = useQueryParam('email', '')
    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100vh' gap={3}>
            <Typography variant='h1' textAlign='center'>{value ? header : 'Oh no..'}</Typography>
            <Typography component='pre' variant='h2' width='80%' textAlign='center'>{value ? subHeader : `You did not use the auth form to get here. \nTry siging in or siging up.`}</Typography>
            {value && value !== 'undefined' && <Box display='flex' alignItems='center' gap={3}>
                <Typography component='p' variant='h3' fontWeight='bold'>Email: </Typography>
                <Typography component='p' variant='h3'>{value}</Typography>
            </Box>}
            <Button href='/'>Go Home</Button>
        </Box>
    )
}