import { Box } from '@mui/material'
export const HomeTemplate = () => (
    <Box id='root' display='flex' sx={{ minHeight: '100vh', height: '100%' }}>
        <Box id='main-content' component='main' display='flex' flexDirection='column' sx={{ width: '100%', height: '100vh', overflowY: 'auto', }}>
            Hello World
        </Box>
    </Box>
)