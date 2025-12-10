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

// NOTE: There is a slight code smell due to repetition of so many props, however, it is not paramount to fix it
// NOTE: fixed height in Pricing Card due to annoying height inconsistencies
// TODO: Remove pricePerMonth stuff since we don't need it anymore
export const PricingCard = ({ state: { planType, planDescription, pricePerMonth, featureList, buttonText = 'Start a Demo Project', buttonHref = '/form-sample' } = {}, ...rest }) => (
    <Box component='article' aria-labelledby={`${planType}-title`} display='flex' flexDirection='column' gap={3} p={3} borderRadius={2} sx={theme => ({ backgroundColor: theme.palette.background.paper })} {...rest}>
        <Box display='flex' flexDirection='column' gap={3} /*minHeight='230px'*/ sx={{ alignItems: { xs: 'center', sm: 'flex-start' } }}>
            <Typography id={`${planType}-title`} component='h3' fontWeight='bold' sx={theme => ({ fontSize: { xs: theme.typography.h4.fontSize, md: theme.typography.h3.fontSize }, textAlign: { xs: 'center', sm: 'start' } })}>{planType}</Typography>
            <Typography width='100%' height='100%' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, textAlign: { xs: 'center', sm: 'start' } })}>{planDescription}</Typography>
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
export const LastPricingCard = ({ state: { planType, planDescription, buttonText = 'Request Demo Project', buttonHref = '/form-sample' } = {}, sx, ...rest }) => (
    <Box component='article' aria-labelledby={`${planType}-title`} display='flex' flexDirection='column' alignItems='center' justifyContent='center' textAlign='start' width='100%' gap={3} p={3} borderRadius={2} sx={theme => ({ backgroundColor: theme.palette.background.paper, ...sx })} {...rest}>
        <Typography id={`${planType}-title`} component='h3' fontWeight='bold' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.h4.fontSize, md: theme.typography.h3.fontSize }, })}>{planType}</Typography>
        <Typography width='50%' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, })}>{planDescription}</Typography>
        <Button href={buttonHref} variant='outlined' title={`Get Started with ${planType}`} aria-label={`Get Started with ${planType} plan`}>{buttonText}</Button>
    </Box>
)