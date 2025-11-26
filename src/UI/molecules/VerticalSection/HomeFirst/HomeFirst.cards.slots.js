import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { SiSpeedtest } from 'react-icons/si'
import { ICON_SIZE } from '@/Core/shared/global.constants'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
import { FlexColCenter, FlexRow } from './HomeFirst.helper.slots'

const HomeFirstBottomFirstCard = () => (<Image src='/stockBuildingOne.jpg' alt='Stock image' fill />)
const HomeFirstBottomSecondCard = () => (
    <FlexColCenter>
        <Typography component='h3' variant='h2'>100+</Typography>
        <Typography variant='h4' width='50%' textAlign='center'>Our esteemed clients and partners</Typography>
    </FlexColCenter>
)
const HomeFirstBottomThirdCard = () => (
    <FlexColCenter alignItems='center'>
        <FlexRow gap={2}><Typography textAlign='center'>Total Projects</Typography><FlexRow gap={2}><SiSpeedtest /><Typography textAlign='center'>8%</Typography></FlexRow></FlexRow>
        <Typography variant='h2'>1951+</Typography>
        <FlexRow gap={2}><Typography textAlign='center'>Increase of </Typography><Typography textAlign='center' sx={theme => ({ color: theme.palette.success.main })}>126</Typography><Typography>this month </Typography></FlexRow>
    </FlexColCenter>
)
const HomeFirstBottomFourthCard = () => (
    <FlexColCenter>
        <Typography component='h3' variant='h2'>6+</Typography>
        <Typography variant='h4' width='50%' textAlign='center'>Years of dedicated service.</Typography>
    </FlexColCenter>
)
const HomeFirstBottomFifthCard = () => (
    <FlexColCenter gap={GAP} sx={theme => ({ 'path, h3': { color: theme.palette.primary.contrastText } })}>
        <SiSpeedtest size={ICON_SIZE} />
        <Typography variant='h3' textAlign='center'>Achieve Optimal Efficiency and Boost Productivity</Typography>
    </FlexColCenter>
)
export const HomeFirstBottomCards = [
    { key: 'HomeFirstBottomFirstCard', Component: HomeFirstBottomFirstCard, sx: { aspectRatio: { xs: '2/3', sm: '1/1', md: '6/10' } }, },
    { key: 'HomeFirstBottomSecondCard', Component: HomeFirstBottomSecondCard, sx: theme => ({ aspectRatio: { xs: '2/3', sm: '1/1', md: '8/10' }, backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, }), },
    { key: 'HomeFirstBottomThirdCard', Component: HomeFirstBottomThirdCard, sx: theme => ({ aspectRatio:{ xs: '2/3', sm: '1/1', md: '1/1' }, backgroundColor: theme.palette.background.paper }) },
    { key: 'HomeFirstBottomFourthCard', Component: HomeFirstBottomFourthCard, sx: theme => ({ aspectRatio: { xs: '2/3', sm: '1/1', md: '8/10' }, backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, }) },
    { key: 'HomeFirstBottomFifthCard', Component: HomeFirstBottomFifthCard, sx: theme => ({ aspectRatio: { xs: '2/3', sm: '1/1', md: '6/10' }, backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText, }), },
]