import Box from '@mui/material/Box'
import { Nav } from '@/UI/molecules/Nav/Nav'
import { VerticalSection } from '@/UI/molecules/VerticalSection/VerticalSection'
import { Footer } from '@/UI/molecules/Footer/Footer'
import { DefaultChildrenHomeLast } from '@/UI/molecules/VerticalSection/HomeLast/HomeLast.index.slots'
import { DefaultChildrenHomeSecond } from '@/UI/molecules/VerticalSection/HomeSecond/HomeSecond.index.slots'
import { DefaultChildrenHomePayment } from '@/UI/molecules/VerticalSection/HomePayment/HomePayment.index.slots'
export const HomeTemplate = () => (
    <Box id='root' display='flex' flexDirection='column' alignItems='center' minHeight='100vh' justifyContent='space-between'>
        <Nav />
        <Box id='main-content' component='main' display='flex' flexDirection='column' alignItems='center' width='100%'>
            <VerticalSection aria-label='First Home Section' />
            <VerticalSection aria-label='Second Home Section' sx={theme => ({ backgroundColor: theme.palette.primary.main })}>
                <DefaultChildrenHomeSecond />
            </VerticalSection>
            <VerticalSection aria-label='Payment Tier Home Section'>
                <DefaultChildrenHomePayment />
            </VerticalSection>
            <VerticalSection aria-label='Last Home Section' sx={theme => ({ backgroundColor: theme.palette.primary.main })}>
                <DefaultChildrenHomeLast />
            </VerticalSection>
        </Box>
        <Footer />
    </Box>
)