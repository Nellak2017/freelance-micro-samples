import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { SiSpeedtest } from 'react-icons/si'
import { ICON_SIZE } from '@/Core/shared/global.constants'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
import { FlexColCenter, FlexRow } from './HomeFirst.helper.slots'
import DarkForm from '../../../../../public/Form-Sample-Dark.png'
import LightForm from '../../../../../public/Form-Sample-Light.png'
import Link from 'next/link'
import { useThemeMode } from '@/Application/hooks/shared/useThemeMode'

// TODO: Extract data of these to constants
// TODO: Make compositional api instead of the map based one below
const darkContrastTextSX = theme => ({ color: theme.palette.primary.contrastText })
const HomeFirstBottomFirstCard = () => {
    const { mode } = useThemeMode()
    return ( // TODO: Fix accidental complexity with Link here
        <Link href='/form-sample'>
            <Image src={mode === 'light' ? LightForm : DarkForm} alt='Stock image' aria-hidden fill priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' style={{ objectFit: 'cover' }} />
        </Link>
    )
}
const HomeFirstBottomSecondCard = () => (
    <FlexColCenter>
        <Typography component='p' variant='h2' textAlign='center' aria-label='Over 100 clients' sx={darkContrastTextSX}>Projects</Typography>
        <Typography component='p' variant='h4' width='80%' textAlign='center' sx={darkContrastTextSX}>Landing pages, forms, and UI components.</Typography>
    </FlexColCenter>
)
const HomeFirstBottomThirdCard = () => (
    <FlexColCenter alignItems='center'>
        <Typography component='p' variant='h2' textAlign='center' aria-label='Over 100 clients'>Tech used</Typography>
        <Typography component='p' variant='h4' width='80%' textAlign='center'>React, Next.js, Material UI, Redux</Typography>
    </FlexColCenter>
)
const HomeFirstBottomFourthCard = () => (
    <FlexColCenter>
        <Typography component='p' variant='h2' sx={darkContrastTextSX}>7+</Typography>
        <Typography component='p' variant='h4' width='80%' textAlign='center' sx={darkContrastTextSX}>Years of dedicated practice, but new to Freelancing.</Typography>
    </FlexColCenter>
)
const HomeFirstBottomFifthCard = () => (
    <FlexColCenter gap={GAP} sx={{ 'path': darkContrastTextSX }}>
        <SiSpeedtest size={ICON_SIZE} aria-hidden focusable='false' />
        <Typography component='p' variant='h3' textAlign='center' sx={darkContrastTextSX}>Check my Upwork portfolio and get in touch</Typography>
    </FlexColCenter>
)
export const HomeFirstBottomCards = [
    { key: 'HomeFirstBottomFirstCard', Component: HomeFirstBottomFirstCard, sx: { aspectRatio: { xs: '1/1', md: '6/10' } }, },
    { key: 'HomeFirstBottomSecondCard', Component: HomeFirstBottomSecondCard, sx: theme => ({ aspectRatio: { xs: '1/1', md: '8/10' }, backgroundColor: theme.palette.primary.main, }), },
    { key: 'HomeFirstBottomThirdCard', Component: HomeFirstBottomThirdCard, sx: theme => ({ aspectRatio: { xs: '1/1', md: '1/1' }, backgroundColor: theme.palette.background.paper }) },
    { key: 'HomeFirstBottomFourthCard', Component: HomeFirstBottomFourthCard, sx: theme => ({ aspectRatio: { xs: '1/1', md: '8/10' }, backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, }) },
    { key: 'HomeFirstBottomFifthCard', Component: HomeFirstBottomFifthCard, sx: theme => ({ aspectRatio: { xs: '1/1', md: '6/10' }, backgroundColor: theme.palette.primary.light, }), },
]