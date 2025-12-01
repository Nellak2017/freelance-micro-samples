import Box from '@mui/material/Box'
import Link from 'next/link'
import Image from 'next/image'
import { AvatarWrapper } from './AvatarLink.elements'

export const AvatarLink = ({ state: { src = '/stockSciFiFive.jpg', alt = 'Default Avatar', tooltip = 'Default Tooltip', to = '/', size = 40, preload = false } = {} }) => (
    <Box component={Link} href={to} title={tooltip} sx={{ display: 'inline-block', textDecoration: 'none', '&:hover': { boxShadow: 'none' } }}>
        <AvatarWrapper size={size}><Image src={src} alt={alt} preload={preload} fill style={{ objectFit: 'cover' }} sizes={`${size}px`} /></AvatarWrapper>
    </Box>
)