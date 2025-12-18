import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { SiSpeedtest } from 'react-icons/si'
import { ICON_SIZE } from '@/Core/shared/global.constants'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
import { FlexColCenter } from './HomeFirst.helper.slots'
import Link from 'next/link'
import { useThemeMode } from '@/Application/hooks/shared/useThemeMode'
import { HOME_FIRST_CARDS } from '@/Core/components/VerticalSection/HomeFirst.constants'
import { HomeFirstCard } from './HomeFirst.helper.slots'

const { FIRST_CARD, SECOND_CARD, THIRD_CARD, FOURTH_CARD, FIFTH_CARD } = HOME_FIRST_CARDS
const darkContrastTextSX = theme => ({ color: theme.palette.primary.contrastText })
const CommonCard = ({ state: { header, description }, sx }) => (
    <FlexColCenter>
        <Typography component='p' variant='h2' textAlign='center' aria-label={header} sx={sx}>{header}</Typography>
        <Typography component='p' variant='h4' width='80%' textAlign='center' sx={sx}>{description}</Typography>
    </FlexColCenter>
)
const HomeFirstBottomFirstCard = ({ state: { lightImage, darkImage } = FIRST_CARD }) => {
    const { mode } = useThemeMode()
    return ( // NOTE: Ignoring the next.js warning here since it is not possible to fix it. (installHook.js:1 Image with src "/_next/static/media/Form-Sample-Dark.db18b4f4.png" has "fill" and parent element with invalid "position". Provided "static" should be one of absolute,fixed,relative)
        <Link href='/form-sample' aria-label='Open contact form'>
            <Image src={mode === 'light' ? lightImage : darkImage} alt='Stock image' aria-hidden fill priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' style={{ objectFit: 'cover' }} />
        </Link>
    )
}
const HomeFirstBottomFifthCard = ({ state: { description } = FIFTH_CARD }) => (
    <FlexColCenter gap={GAP} sx={{ 'path': darkContrastTextSX }}>
        <SiSpeedtest size={ICON_SIZE} aria-hidden focusable='false' />
        <Typography component='p' variant='h3' textAlign='center' sx={darkContrastTextSX}>{description}</Typography>
    </FlexColCenter>
)
export const HomeFirstDefaultBottomCards = (
    <>
        <HomeFirstCard aspectRatio={{ xs: '1/1', md: '6/10' }}><HomeFirstBottomFirstCard /></HomeFirstCard>
        <HomeFirstCard aspectRatio={{ xs: '1/1', md: '8/10' }} backgroundColor='primary.main'><CommonCard state={SECOND_CARD} sx={darkContrastTextSX} /></HomeFirstCard>
        <HomeFirstCard aspectRatio={{ xs: '1/1' }} backgroundColor='background.paper'><CommonCard state={THIRD_CARD} /></HomeFirstCard>
        <HomeFirstCard aspectRatio={{ xs: '1/1', md: '8/10' }} backgroundColor='secondary.main' color='secondary.contrastText'><CommonCard state={FOURTH_CARD} sx={darkContrastTextSX} /></HomeFirstCard>
        <HomeFirstCard aspectRatio={{ xs: '1/1', md: '6/10' }} backgroundColor='primary.light'><HomeFirstBottomFifthCard /></HomeFirstCard>
    </>
)