import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Link from 'next/link'
import Image from 'next/image'
import { AvatarWrapper } from './AvatarLink.elements'

export const AvatarLink = ({ state: { src = '/stockSciFiFive.jpg', alt = 'Default Avatar', tooltip = 'Default Tooltip', to = '/', size = 40, preload = false } = {} }) => (
    <Tooltip title={tooltip} arrow>
        <Box component={Link} href={to} sx={{ display: 'inline-block', textDecoration: 'none', '&:hover': { boxShadow: 'none' } }}>
            <AvatarWrapper size={size}><Image src={src} alt={alt} preload={preload} fill style={{ objectFit: 'cover' }} sizes={`${size}px`} /></AvatarWrapper>
        </Box>
    </Tooltip>)