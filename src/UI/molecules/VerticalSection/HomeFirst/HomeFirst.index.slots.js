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
        <Typography component='h1' fontWeight='normal' textAlign='center' mx={GAP} sx={theme => ({ fontSize: { xs: theme.typography.h3.fontSize, sm: theme.typography.h2.fontSize, md: theme.typography.h1.fontSize }})}>{header}</Typography>
        <Typography component='h2' fontWeight='normal' textAlign='center' mx={GAP} sx={theme => ({ fontSize: { xs: theme.typography.h5.fontSize, sm: theme.typography.h4.fontSize, md: theme.typography.h3.fontSize }})}>{subHeader}</Typography>
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
        <FlexRow width={{ xs: '80%', sm: '50%', md: '100%' }} alignItems='flex-end' flexDirection={{ xs: 'column', md: 'row' }}>{cards?.map(({ key, Component, sx }) => <HomeFirstCard key={key} sx={sx}>{<Component />}</HomeFirstCard>)}</FlexRow>
    </FlexColCenter>
)