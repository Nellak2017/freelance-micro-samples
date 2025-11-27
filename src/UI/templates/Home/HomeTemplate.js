import Box from '@mui/material/Box'
import { Nav } from '@/UI/molecules/Nav/Nav'
import { VerticalSection } from '@/UI/molecules/VerticalSection/VerticalSection'
import { Footer } from '@/UI/molecules/Footer/Footer'
export const HomeTemplate = () => (
    <Box id='root' display='flex' flexDirection='column' alignItems='center' minHeight='100vh' justifyContent='space-between' gap={3}>
        <Nav sx={theme => ({ backgroundColor: theme.palette.background.default })} />
        <Box id='main-content' component='main' display='flex' flexDirection='column' alignItems='center' width='100%' gap={3}>
            <VerticalSection aria-label='First Home Section' />
        </Box>
        <Footer />
    </Box>
)