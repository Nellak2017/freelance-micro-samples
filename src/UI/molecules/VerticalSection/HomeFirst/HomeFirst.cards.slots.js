import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { SiSpeedtest } from 'react-icons/si'
import { ICON_SIZE } from '@/Core/shared/global.constants'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
import { FlexColCenter, FlexRow } from './HomeFirst.helper.slots'

// TODO: Fix hard coded widths and flex heights using some mechanism
const HomeFirstBottomFirstCard = () => (<Image src='/stockBuildingOne.jpg' alt='Stock image' fill />)
const HomeFirstBottomSecondCard = () => (
    <FlexColCenter>
        <Typography component='h3' variant='h2'>100+</Typography>
        <Typography variant='h4' width='50%' textAlign='center'>Our esteemed clients and partners</Typography>
    </FlexColCenter>
)
const HomeFirstBottomThirdCard = () => (
    <FlexColCenter alignItems='flex-start'>
        <FlexRow><Typography>Total Projects</Typography><FlexRow gap={2}><SiSpeedtest /><Typography>8%</Typography></FlexRow></FlexRow>
        <Typography variant='h2'>1951+</Typography>
        <FlexRow gap={2}><Typography>Increase of </Typography><Typography sx={theme => ({ color: theme.palette.success.main })}>126</Typography><Typography>this month </Typography></FlexRow>
    </FlexColCenter>
)
const HomeFirstBottomFourthCard = () => (
    <FlexColCenter>
        <Typography component='h3' variant='h2'>6+</Typography>
        <Typography variant='h4' width='50%' textAlign='center'>Years of dedicated service.</Typography>
    </FlexColCenter>
)
const HomeFirstBottomFifthCard = () => (
    <FlexColCenter alignItems='flex-start' gap={GAP} mx={GAP} my={6} sx={theme => ({ 'path, h3': { color: theme.palette.primary.contrastText } })}>
        <SiSpeedtest size={ICON_SIZE} />
        <Typography variant='h3'>Achieve Optimal Efficiency and Boost Productivity</Typography>
    </FlexColCenter>
)
export const HomeFirstBottomCards = [
    { key: 'HomeFirstBottomFirstCard', height: '400px', Component: HomeFirstBottomFirstCard },
    { key: 'HomeFirstBottomSecondCard', height: '300px', Component: HomeFirstBottomSecondCard, sx: theme => ({ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, }), },
    { key: 'HomeFirstBottomThirdCard', height: '200px', Component: HomeFirstBottomThirdCard, sx: theme => ({ backgroundColor: theme.palette.background.paper }) },
    { key: 'HomeFirstBottomFourthCard', height: '300px', Component: HomeFirstBottomFourthCard, sx: theme => ({ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, }) },
    { key: 'HomeFirstBottomFifthCard', height: '400px', Component: HomeFirstBottomFifthCard, sx: theme => ({ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText, alignItems: 'flex-end' }), },
]