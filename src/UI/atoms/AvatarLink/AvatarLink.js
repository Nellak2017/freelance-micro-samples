import { Box, Tooltip, Avatar, } from '@mui/material'
import Link from 'next/link'

export const AvatarLink = ({ state: { src = './stockSciFiFive.jpg', alt = 'Default Avatar', tooltip = 'Default Tooltip', to = '/', size = 40 } = {} }) => (
    <Tooltip title={tooltip} arrow>
        <Box component={Link} href={to} sx={{ display: 'inline-block', textDecoration: 'none' }}>
            <Avatar src={src} alt={alt} sx={{ width: size, height: size }} />
        </Box>
    </Tooltip>)