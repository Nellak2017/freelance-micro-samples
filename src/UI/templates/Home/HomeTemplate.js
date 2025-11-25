import Box from '@mui/material/Box'
import { Nav } from '@/UI/molecules/Nav/Nav'
import { VerticalSection } from '@/UI/molecules/VerticalSection/VerticalSection'
export const HomeTemplate = () => (
    <Box id='root' display='flex' flexDirection='column' alignItems='center'>
        <Nav />
        <Box id='main-content' component='main' display='flex' flexDirection='column' alignItems='center' width='100%' sx={{ overflowY: 'auto', }}>
            <VerticalSection />
        </Box>
    </Box>
)