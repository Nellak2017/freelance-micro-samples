import { Box } from '@mui/material'
import { Nav } from '@/UI/molecules/Nav/Nav'
export const HomeTemplate = () => (
    <Box id='root' display='flex' flexDirection='column'>
        <Nav />
        <Box id='main-content' component='main' display='flex' flexDirection='column' sx={{ width: '100%', overflowY: 'auto', }}>
        </Box>
    </Box>
)