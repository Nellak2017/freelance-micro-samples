import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'
// TODO: use responsive header thing instead
export const DummyPage = ({ state: { header, subHeader } }) => {
    const [value, _] = useQueryParam('email', '')
    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='100vh' gap={3}>
            <Typography variant='h1' textAlign='center'>{value ? header : 'Oh no..'}</Typography>
            <Typography component='pre' variant='h2' width='80%' textAlign='center'>{value ? subHeader : `You did not use the auth form to get here. \nTry siging in or siging up.`}</Typography>
            {value && value !== 'undefined' && <Box display='flex' alignItems='center' gap={3}>
                <Typography sx={theme => ({ fontSize: theme.typography.h3.fontSize })} fontWeight='bold'>Email: </Typography>
                <Typography sx={theme => ({ fontSize: theme.typography.h3.fontSize })}>{value}</Typography>
            </Box>}
            <Button href='/'>Go Home</Button>
        </Box>
    )
}