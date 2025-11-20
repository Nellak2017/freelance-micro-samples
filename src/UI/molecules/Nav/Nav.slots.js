import { Box, Typography, Tooltip, Button } from '@mui/material'
import { Logo } from '@/UI/atoms/AvatarLink/AvatarLink.slots'
import Link from 'next/link'

const CustomLink = ({ title = '', href = '/', children, ...rest }) => (<Box sx={theme => ({ borderBottom: '1px solid transparent', '&:hover': { borderBottom: `1px solid ${theme.palette.primary.main}` } })}><Tooltip title={title} {...rest}><Link href={href}>{children}</Link></Tooltip></Box>)
export const LeftSlot = ({ state: { title = 'Prodmast' } = {} }) => (
    <Box display='flex' alignItems='center' gap={3}><Logo /><Typography>{title}</Typography></Box>
)
export const MiddleSlot = ({ state = { links: [{ key: 'Home', title: 'Home', label: 'Home' }, { key: 'About', title: 'About', label: 'About' }, { key: 'Services', title: 'Services', label: 'Services' }, { key: 'Contact', title: 'Contact', label: 'Contact' }] } } = {}) => (
    <Box display='flex' alignItems='center' gap={4}>
        {state?.links?.map(({ key, title, label }) => (<CustomLink title={title} key={key}>{label}</CustomLink>))}
    </Box>
)
export const RightSlot = () => (
    <Box display='flex' alignItems='center' gap={3}>
        <Button sx={{ borderRadius: '32px' }}>Sign up</Button>
    </Box>
)
// TODO: Get rid of magic numbers for borderRadius, ...