import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
import Rating from '@mui/material/Rating'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
import { HomeFirstCard } from './VerticalSection.helper.slots'
import { HomeFirstBottomCards } from './VerticalSection.cards.slots'

// --- Main Slots
const HomeFirstTop = ({ state: {
    header = 'The Future of Manufacturing with Latest Technology',
    subHeader = "Expert tech to elevate your manufacturing. Let's take your business further.",
    primaryButtonLabel = 'Get Started',
    secondaryButtonLabel = 'Try Demo',
} = {}
}) => (
    <Box id='home-first-top' display='flex' flexDirection='column' gap={GAP} maxWidth={MAX_CONTENT_WIDTH * .60}>
        <Typography component='h1' variant='h1' fontWeight='normal'>{header}</Typography>
        <Typography component='h2' variant='h3' fontWeight='normal'>{subHeader}</Typography>
        <Box id='home-first-button-group' display='flex' justifyContent='center' gap={GAP}>
            <Button>{primaryButtonLabel}</Button>
            <Button sx={theme => ({ backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary, '&:hover': { backgroundColor: theme.palette.background.paperBackground, color: theme.palette.text.secondary, } })}>
                {secondaryButtonLabel}
            </Button>
        </Box>
    </Box>
)
const HomeFirstBottom = ({ state: { ratingValue = 5.0, ratingLabel = 'from 80+ reviews', cards = HomeFirstBottomCards } = {} }) => (
    <Box id='home-first-bottom' display='flex' flexDirection='column' alignItems='center' gap={GAP} width='100%'>
        <Box display='flex' alignItems='center' justifyContent='center' gap={GAP}><Rating name='read-only' value={ratingValue} readOnly /><Typography component='legend'>{String(ratingValue.toFixed(1))}</Typography></Box>
        <Typography>{ratingLabel}</Typography>
        <Box display='flex' width='100%' alignItems='flex-end' gap={GAP}>{cards?.map(({ key, height, component, sx }) => <HomeFirstCard key={key} state={{ height }} sx={sx}>{component}</HomeFirstCard>)}</Box>
    </Box>
)
// --- Default Children
export const DefaultChildren = <><HomeFirstTop /><HomeFirstBottom /></>