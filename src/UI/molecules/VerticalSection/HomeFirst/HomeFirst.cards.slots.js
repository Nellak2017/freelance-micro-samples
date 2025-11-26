import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { SiSpeedtest } from 'react-icons/si'
import { ICON_SIZE } from '@/Core/shared/global.constants'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
import { FlexColCenter, FlexRow } from './HomeFirst.helper.slots'
import stockBuildingOne from '../../../../../public/stockBuildingOne.jpg'

const darkContrastTextSX = theme => ({ color: theme.palette.primary.contrastText })
const HomeFirstBottomFirstCard = () => (<Image src={stockBuildingOne} alt='Stock image' aria-hidden fill priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' style={{ objectFit: 'cover' }} />)
const HomeFirstBottomSecondCard = () => (
    <FlexColCenter>
        <Typography component='p' variant='h2' aria-label='Over 100 clients' sx={darkContrastTextSX}>100+</Typography>
        <Typography component='p' variant='h4' width='50%' textAlign='center' sx={darkContrastTextSX}>Our esteemed clients and partners</Typography>
    </FlexColCenter>
)
const HomeFirstBottomThirdCard = () => (
    <FlexColCenter alignItems='center'>
        <FlexRow gap={2}><Typography textAlign='center'>Total Projects</Typography><FlexRow gap={2}><SiSpeedtest aria-hidden focusable='false' /><Typography textAlign='center'>8%</Typography></FlexRow></FlexRow>
        <Typography component='p' variant='h2'>1951+</Typography>
        <FlexRow gap={2}><Typography textAlign='center'>Increase of </Typography><Typography textAlign='center' sx={theme => ({ color: theme.palette.success.main })}>126</Typography><Typography>this month </Typography></FlexRow>
    </FlexColCenter>
)
const HomeFirstBottomFourthCard = () => (
    <FlexColCenter>
        <Typography component='p' variant='h2' sx={darkContrastTextSX}>6+</Typography>
        <Typography component='p' variant='h4' width='50%' textAlign='center' sx={darkContrastTextSX}>Years of dedicated service.</Typography>
    </FlexColCenter>
)
const HomeFirstBottomFifthCard = () => (
    <FlexColCenter gap={GAP} sx={{ 'path': darkContrastTextSX }}>
        <SiSpeedtest size={ICON_SIZE} aria-hidden focusable='false' />
        <Typography component='p' variant='h3' textAlign='center' sx={darkContrastTextSX}>Achieve Optimal Efficiency and Boost Productivity</Typography>
    </FlexColCenter>
)
export const HomeFirstBottomCards = [
    { key: 'HomeFirstBottomFirstCard', Component: HomeFirstBottomFirstCard, sx: { aspectRatio: { xs: '2/3', sm: '1/1', md: '6/10' } }, },
    { key: 'HomeFirstBottomSecondCard', Component: HomeFirstBottomSecondCard, sx: theme => ({ aspectRatio: { xs: '2/3', sm: '1/1', md: '8/10' }, backgroundColor: theme.palette.primary.main, }), },
    { key: 'HomeFirstBottomThirdCard', Component: HomeFirstBottomThirdCard, sx: theme => ({ aspectRatio: { xs: '2/3', sm: '1/1', md: '1/1' }, backgroundColor: theme.palette.background.paper }) },
    { key: 'HomeFirstBottomFourthCard', Component: HomeFirstBottomFourthCard, sx: theme => ({ aspectRatio: { xs: '2/3', sm: '1/1', md: '8/10' }, backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, }) },
    { key: 'HomeFirstBottomFifthCard', Component: HomeFirstBottomFifthCard, sx: theme => ({ aspectRatio: { xs: '2/3', sm: '1/1', md: '6/10' }, backgroundColor: theme.palette.primary.light, }), },
]