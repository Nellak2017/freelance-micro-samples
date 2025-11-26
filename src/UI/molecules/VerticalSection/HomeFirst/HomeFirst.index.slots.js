import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
import Rating from '@mui/material/Rating'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
import { HomeFirstCard, FlexColCenter, FlexRow } from './HomeFirst.helper.slots'
import { HomeFirstBottomCards } from './HomeFirst.cards.slots'

export const HomeFirstTop = ({ state: {
    header = 'The Future of Manufacturing with Latest Technology',
    subHeader = "Expert tech to elevate your manufacturing. Let's take your business further.",
    primaryButtonLabel = 'Get Started',
    secondaryButtonLabel = 'Try Demo',
} = {}
}) => (
    <Box id='home-first-top' component='header' display='flex' flexDirection='column' gap={GAP} maxWidth={MAX_CONTENT_WIDTH * .60}>
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
export const HomeFirstBottom = ({ state: { ratingValue = 5.0, ratingLabel = 'from 80+ reviews', cards = HomeFirstBottomCards } = {} }) => (
    <FlexColCenter id='home-first-bottom' component='section' gap={GAP}>
        <FlexRow justifyContent='center'><Rating name='read-only' value={ratingValue} readOnly /><Typography component='legend'>{String(ratingValue.toFixed(1))}</Typography></FlexRow>
        <Typography>{ratingLabel}</Typography>
        <FlexRow width='100%' alignItems='flex-end'>{cards?.map(({ key, height, Component, sx }) => <HomeFirstCard key={key} state={{ height }} sx={sx}>{<Component />}</HomeFirstCard>)}</FlexRow>
    </FlexColCenter>
)