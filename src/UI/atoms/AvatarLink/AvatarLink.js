import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Link from 'next/link'
import Image from 'next/image'

export const AvatarLink = ({ state: { src = '/stockSciFiFive.jpg', alt = 'Default Avatar', tooltip = 'Default Tooltip', to = '/', size = 40, preload = false } = {} }) => (
    <Tooltip title={tooltip} arrow>
        <Box component={Link} href={to} sx={{ display: 'inline-block', textDecoration: 'none', '&:hover': { boxShadow: 'none' } }}>
            <Box sx={theme => ({ width: size, height: size, borderRadius: '50%', position: 'relative', overflow: 'hidden', display: 'inline-block', border: '1px solid transparent', '&:hover': { border: `1px solid ${theme.palette.primary.main}` } })}>
                <Image src={src} alt={alt} preload={preload} fill style={{ objectFit: 'cover' }} sizes={`${size}px`} />
            </Box>
        </Box>
    </Tooltip>)