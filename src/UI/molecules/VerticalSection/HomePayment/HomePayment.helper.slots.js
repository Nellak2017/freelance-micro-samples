import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { MdOutlineCheckCircle } from 'react-icons/md'
import { ICON_SIZE } from '@/Core/shared/global.constants'

export const PricingCard = ({ state: { planType, planDescription, featureList, buttonText, buttonHref } = {}, ...rest }) => (
    <Box component='article' aria-labelledby={`${planType}-title`} display='flex' flexDirection='column' gap={3} p={3} borderRadius={2} sx={theme => ({ backgroundColor: theme.palette.background.paper })} {...rest}>
        <Box display='flex' flexDirection='column' gap={3} minHeight='170px' sx={{ alignItems: { xs: 'center', sm: 'flex-start' } }}>
            <Typography id={`${planType}-title`} variant='h3' fontWeight='bold' sx={{ textAlign: { xs: 'center', sm: 'start' } }}>{planType}</Typography>
            <Typography width='100%' height='100%' variant='body1' component='p' sx={{ textAlign: { xs: 'center', sm: 'start' } }}>{planDescription}</Typography>
            <Button href={buttonHref} variant='outlined' fullWidth title={`Get Started with ${planType}`} aria-label={`Get Started with ${planType} plan`}>{buttonText}</Button>
        </Box>
        <Divider aria-hidden sx={{ width: '100%' }}>Features</Divider>
        <List dense aria-label={`${planType} features`} sx={{ height: '50%' }}>
            {featureList?.map(content => (
                <ListItem key={content} sx={{ boxShadow: 'none', px: '0px' }}>
                    <ListItemIcon><MdOutlineCheckCircle size={ICON_SIZE} aria-hidden /></ListItemIcon>
                    <ListItemText primary={content} />
                </ListItem>
            ))}
        </List>
    </Box>
)
export const LastPricingCard = ({ state: { planType, planDescription, buttonText, buttonHref } = {}, sx, ...rest }) => (
    <Box component='article' aria-labelledby={`${planType}-title`} display='flex' flexDirection='column' alignItems='center' justifyContent='center' textAlign='start' width='100%' gap={3} p={3} borderRadius={2} sx={theme => ({ backgroundColor: theme.palette.background.paper, ...sx })} {...rest}>
        <Typography id={`${planType}-title`} variant='h3' fontWeight='bold' textAlign='center'>{planType}</Typography>
        <Typography width='50%' textAlign='center' variant='body1' component='p'>{planDescription}</Typography>
        <Button href={buttonHref} variant='outlined' title={`Get Started with ${planType}`} aria-label={`Get Started with ${planType} plan`}>{buttonText}</Button>
    </Box>
)