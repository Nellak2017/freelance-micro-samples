import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { SiSpeedtest } from 'react-icons/si'
import { ICON_SIZE } from '@/Core/shared/global.constants'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'

const HomeFirstBottomSecondCard = () => (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%' px={GAP}>
        <Typography component='h3' variant='h2'>100+</Typography>
        <Typography variant='h4' width='50%' textAlign='center'>Our esteemed clients and partners</Typography>
    </Box>
)
const HomeFirstBottomThirdCard = () => (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start' width='100%' px={GAP}>
        <Box display='flex' alignItems='center' gap={GAP}><Typography>Total Projects</Typography><Box display='flex' alignItems='center' gap={2}><SiSpeedtest /><Typography>8%</Typography></Box></Box>
        <Typography variant='h2'>1951+</Typography>
        <Box display='flex' alignItems='center' gap={2}><Typography>Increase of </Typography><Typography sx={theme => ({ color: theme.palette.success.main })}>126</Typography><Typography>this month </Typography></Box>
    </Box>
)
const HomeFirstBottomFourthCard = () => (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%' px={GAP}>
        <Typography component='h3' variant='h2'>6+</Typography>
        <Typography variant='h4' width='50%' textAlign='center'>Years of dedicated service.</Typography>
    </Box>
)
const HomeFirstBottomFifthCard = () => (
    <Box display='flex' flexDirection='column' mx={GAP} my={6} gap={GAP}>
        <Box sx={theme => ({ 'path': { color: theme.palette.primary.contrastText, } })}><SiSpeedtest size={ICON_SIZE} /></Box>
        <Typography variant='h3' sx={theme => ({ color: theme.palette.primary.contrastText, })}>Achieve Optimal Efficiency and Boost Productivity</Typography>
    </Box>
)
export const HomeFirstBottomCards = [
    { key: 'HomeFirstBottomFirstCard', height: '400px', component: <Image src='/stockBuildingOne.jpg' alt='Stock image' fill /> },
    { key: 'HomeFirstBottomSecondCard', height: '300px', component: <HomeFirstBottomSecondCard />, sx: theme => ({ backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText, }), },
    { key: 'HomeFirstBottomThirdCard', height: '200px', component: <HomeFirstBottomThirdCard />, sx: theme => ({ backgroundColor: theme.palette.background.paper }) },
    { key: 'HomeFirstBottomFourthCard', height: '300px', component: <HomeFirstBottomFourthCard />, sx: theme => ({ backgroundColor: theme.palette.secondary.main, color: theme.palette.secondary.contrastText, }) },
    { key: 'HomeFirstBottomFifthCard', height: '400px', component: <HomeFirstBottomFifthCard />, sx: theme => ({ backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText, alignItems: 'flex-end' }), },
]