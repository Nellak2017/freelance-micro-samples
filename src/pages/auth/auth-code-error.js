import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
const AuthCodeError = () => (
  <Box id='root' display='flex' flexDirection='column' alignItems='center' minHeight='100vh' justifyContent='flex-start' p={6} gap={3} >
    <Typography variant='h1'>Authentication Error</Typography>
    <Typography variant='h3' component='p'>There was a problem verifying your email or reset link. Please try again.</Typography>
    <Button href='/sign-in' title='Go to sign-in'>Back to Sign In</Button>
  </Box>
)
export default AuthCodeError