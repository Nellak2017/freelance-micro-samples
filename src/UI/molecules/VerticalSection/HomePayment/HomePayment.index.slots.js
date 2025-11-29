import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { MdOutlineCheckCircle } from 'react-icons/md'
import { ICON_SIZE, MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
import { TopData, BottomData } from '@/Core/components/VerticalSection/HomePayment.constants'

// TODO: tech debt / style
// NOTE: fixed height in Pricing Card due to annoying height inconsistencies
const PricingCard = ({ state: { planType, planDescription, pricePerMonth, featureList } = {}, ...rest }) => (
    <Box component='article' aria-labelledby={`${planType}-title`} display='flex' flexDirection='column' alignItems='flex-start' justifyContent='space-between' textAlign='start' width='100%' height='100%' gap={3} p={3} borderRadius={2} sx={theme => ({ backgroundColor: theme.palette.background.paper })} {...rest}>

        <Box
            display='flex' flexDirection='column' justifyContent='space-between' gap={3}
            width='100%' minHeight='230px' height='230px'
            sx={{ alignItems: { xs: 'center', sm: 'flex-start' } }}
        >
            <Typography id={`${planType}-title`} component='h3' fontWeight='bold' sx={theme => ({ fontSize: { xs: theme.typography.h4.fontSize, md: theme.typography.h3.fontSize }, textAlign: { xs: 'center', sm: 'start'} })}>{planType}</Typography>
            <Typography width='100%' height='100%' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, textAlign: { xs: 'center', sm: 'start'} })}>{planDescription}</Typography>

            <Box display='flex' alignItems='center' gap={1}>
                <Typography fontWeight='bold' textAlign='start' sx={theme => ({ fontSize: { xs: theme.typography.h3.fontSize, md: theme.typography.h2.fontSize }, })}>{`$${pricePerMonth}`}</Typography>
                <Typography textAlign='start' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, })}>/ month</Typography>
            </Box>

            <Tooltip title={`Get Started with ${planType}`}><Button variant='outlined' fullWidth aria-label={`Get Started with ${planType} plan`}>Get Started</Button></Tooltip>
        </Box>

        <Divider aria-hidden sx={{ width: '100%' }}>Features</Divider>

        <List dense aria-label={`${planType} features`} sx={{ height: '50%', width: '100%' }}>
            {featureList?.map(content => (
                <ListItem key={content} sx={{ boxShadow: 'none' }}>
                    <ListItemIcon><MdOutlineCheckCircle size={ICON_SIZE} aria-hidden /></ListItemIcon>
                    <ListItemText primary={content} />
                </ListItem>
            ))}
        </List>
    </Box>

)
const LastPricingCard = ({ state: { planType, planDescription } = {}, sx, ...rest }) => (
    <Box component='article' aria-labelledby={`${planType}-title`} display='flex' flexDirection='column' alignItems='center' justifyContent='center' textAlign='start' width='100%' gap={3} p={3} borderRadius={2} sx={theme => ({ backgroundColor: theme.palette.background.paper, ...sx })} {...rest}>
        <Typography id={`${planType}-title`} component='h3' fontWeight='bold' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.h4.fontSize, md: theme.typography.h3.fontSize }, })}>{planType}</Typography>
        <Typography width='50%' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, })}>{planDescription}</Typography>
        <Tooltip title={`Get Started with ${planType}`}><Button variant='outlined' aria-label={`Get Started with ${planType} plan`}>Get Started</Button></Tooltip>
    </Box>
)
const Top = ({ state: { header, subHeader } = TopData }) => (
    <Box component='header' aria-labelledby='pricing-header' display='flex' flexDirection='column' alignItems='center' width='50%' gap={3} >
        <Typography id='pricing-header' width='100%' variant='h2' fontWeight='bold' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.h3.fontSize, md: theme.typography.h2.fontSize }, })}>{header}</Typography>
        <Typography width='70%' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, })}>{subHeader}</Typography>
    </Box>
)
const Bottom = ({ state = BottomData }) => (
    <Box role='group' aria-label='Pricing plans' display='grid' width='70%' height='100%' gap={3} gridTemplateColumns={{ xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' }} gridAutoRows='auto auto'>
        {state?.map((cardState, index) => (
            index < state.length - 1
                ? <PricingCard key={cardState?.key} state={cardState} />
                : <LastPricingCard key={cardState?.key} state={cardState} sx={{ gridColumn: { xs: '1', sm: '1 / span 2' } }} />
        ))}
    </Box>
)

export const DefaultChildrenHomePayment = (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' maxWidth={MAX_CONTENT_WIDTH} width='100%' py={6} gap={3}>
        <Top />
        <Bottom />
    </Box>
)