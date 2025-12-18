import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TopData, BottomData } from '@/Core/components/VerticalSection/HomePayment.constants'
import { LastPricingCard, PricingCard } from './HomePayment.helper.slots'
import { PageContainer } from '../../PageContainer/PageContainer'

const Top = ({ state: { header, subHeader } = TopData }) => (
    <Box component='header' aria-labelledby='pricing-header' display='flex' flexDirection='column' alignItems='center' width='50%' gap={3} >
        <Typography id='pricing-header' width='100%' variant='h2' fontWeight='bold' textAlign='center' sx={{ scrollMarginTop: '130px' }}>{header}</Typography>
        <Typography width='70%' variant='body1' component='p' textAlign='center'>{subHeader}</Typography>
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
export const DefaultChildrenHomePayment = () => (
    <PageContainer>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%' py={6} gap={3}>
            <Top /><Bottom />
        </Box>
    </PageContainer>
)