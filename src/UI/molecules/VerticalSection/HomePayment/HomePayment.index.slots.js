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


// TODO: Extract data to constants file
// TODO: Responsive, Aria, Semantic, ..etc
const starterFeatures = [
    'Production up to 10,000 units per month',
    '24/7 technical support',
    'Access the production dashboard',
    'Initial setup guide'
]
const enterpriseFeatures = [
    'Unlimited production units',
    'Dedicated account manager',
    'Taiored manufacturing solutions',
    'Predictive production optimization'
]
const TopData = { header: 'Tailored Plans for Your Manufacturing Scale', subHeader: 'Flexible pricing for any business size.' }
const BottomData = [
    {
        key: 'Starter plan',
        planType: 'Starter',
        planDescription: 'This package offers the basic features you need to get started.',
        pricePerMonth: 39,
        featureList: starterFeatures,
    },
    {
        key: 'Enterprise plan',
        planType: 'Enterprise',
        planDescription: 'This package offers full access to all premium features.',
        pricePerMonth: 99,
        featureList: enterpriseFeatures,
    },
    {
        key: 'Professional plan',
        planType: 'Professional',
        planDescription: 'Designed for greater flexibility, this solution offers advanced tools for custome tailoring to your needs.',
    },
]
const PricingCard = ({ state: { planType, planDescription, pricePerMonth, featureList } = {}, ...rest }) => (
    <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='space-between' textAlign='start' width='100%' gap={3} p={3} borderRadius={2} sx={theme => ({ backgroundColor: theme.palette.background.paper })} {...rest}>
        <Typography fontWeight='bold' textAlign='start' sx={theme => ({ fontSize: { xs: theme.typography.h4.fontSize, md: theme.typography.h3.fontSize }, })}>{planType}</Typography>
        <Typography width='100%' height='100%' textAlign='start' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, })}>{planDescription}</Typography>

        <Box display='flex' alignItems='center' gap={1}>
            <Typography fontWeight='bold' textAlign='start' sx={theme => ({ fontSize: { xs: theme.typography.h3.fontSize, md: theme.typography.h2.fontSize }, })}>{`$${pricePerMonth}`}</Typography>
            <Typography textAlign='start' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, })}>/ month</Typography>
        </Box>

        <Tooltip title={`Get Started with ${planType}`}><Button variant='outlined' sx={{ width: '100%' }}>Get Started</Button></Tooltip>

        <Divider aria-hidden sx={{ width: '100%' }}>Features</Divider>

        <List dense>
            {featureList?.map(content => (
                <ListItem key={content} sx={{ boxShadow: 'none' }}>
                    <ListItemIcon><MdOutlineCheckCircle size={ICON_SIZE} /></ListItemIcon>
                    <ListItemText primary={content} />
                </ListItem>
            ))}
        </List>
    </Box>
)
const LastPricingCard = ({ state: { planType, planDescription } = {}, sx, ...rest }) => (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' textAlign='start' width='100%' gap={3} p={3} borderRadius={2} sx={theme => ({ backgroundColor: theme.palette.background.paper, ...sx })} {...rest}>
        <Typography fontWeight='bold' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.h4.fontSize, md: theme.typography.h3.fontSize }, })}>{planType}</Typography>
        <Typography width='50%' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, })}>{planDescription}</Typography>
        <Tooltip title={`Get Started with ${planType}`}><Button variant='outlined'>Get Started</Button></Tooltip>
    </Box>
)
const Top = ({ state: { header, subHeader } = TopData }) => (
    <Box display='flex' flexDirection='column' alignItems='center' width='50%' gap={3} >
        <Typography width='100%' variant='h2' fontWeight='bold' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.h3.fontSize, md: theme.typography.h2.fontSize }, })}>{header}</Typography>
        <Typography width='70%' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, })}>{subHeader}</Typography>
    </Box>
)
const Bottom = ({ state = BottomData }) => (
    <Box
        display='grid'
        width='70%'
        gap={3}
        gridTemplateColumns='repeat(2, 1fr)'
        gridTemplateRows='auto auto'
    >
        {state?.map((cardState, index) => (
            index < state.length - 1
                ? <PricingCard key={cardState?.key} state={cardState} />
                : <LastPricingCard key={cardState?.key} state={cardState} sx={{ gridColumn: '1 / span 2' }} />
        ))}
    </Box>
)

export const DefaultChildrenHomePayment = (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' maxWidth={MAX_CONTENT_WIDTH} width='100%' py={6} gap={3}>
        <Top />
        <Bottom />
    </Box>
)