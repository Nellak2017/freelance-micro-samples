import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
import { TopData, BottomData } from '@/Core/components/VerticalSection/HomePayment.constants'
import { LastPricingCard, PricingCard} from './HomePayment.helper.slots'

const Top = ({ state: { header, subHeader } = TopData }) => (
    <Box component='header' aria-labelledby='pricing-header' display='flex' flexDirection='column' alignItems='center' width='50%' gap={3} >
        <Typography id='pricing-header' width='100%' variant='h2' fontWeight='bold' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.h3.fontSize, md: theme.typography.h2.fontSize }, scrollMarginTop: '130px'})}>{header}</Typography>
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
        <Top /><Bottom />
    </Box>
)