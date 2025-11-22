import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const AvatarWrapper = styled(Box, { shouldForwardProp: prop => prop !== 'size' })(({ theme, size }) => ({
    width: size, height: size, borderRadius: '50%', position: 'relative', overflow: 'hidden', display: 'inline-block', border: '1px solid transparent',
    '&:hover': { border: `1px solid ${theme.palette.primary.main}`, },
}))