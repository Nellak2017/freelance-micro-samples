import { useState } from 'react'
import { Box, Typography, Tooltip, Button, useMediaQuery, IconButton, Drawer, List } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Logo } from '@/UI/atoms/AvatarLink/AvatarLink.slots'
import Link from 'next/link'

const CustomLink = ({ title = '', href = '/', children, ...rest }) => (<Box sx={theme => ({ listStyleType: 'none', boxShadow: 'none', borderBottom: '1px solid transparent', '&:hover': { borderBottom: `1px solid ${theme.palette.primary.main}` } })} {...rest} ><Tooltip title={title}><Link href={href}>{children}</Link></Tooltip></Box>)
export const LeftSlot = ({ state: { title = 'Prodmast' } = {} }) => (
    <Box display='flex' alignItems='center' gap={3}><Logo /><Typography aria-label='Logo Title'>{title}</Typography></Box>
)
export const MiddleSlot = ({ state = { links: [{ key: 'Home', title: 'Home', label: 'Home' }, { key: 'About', title: 'About', label: 'About' }, { key: 'Services', title: 'Services', label: 'Services' }, { key: 'Contact', title: 'Contact', label: 'Contact' }] } } = {}) => {
    const isMedium = useMediaQuery(theme => theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))
    const [isOpen, setIsOpen] = useState(false)
    return isSmall
        ? (
            <>
                <Tooltip title='Open navigation menu'><IconButton onClick={() => setIsOpen(true)} aria-expanded={isOpen} aria-controls='main-menu' aria-label='Open navigation menu'><MenuIcon /></IconButton></Tooltip>
                <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
                    <List sx={{ px: 3, py: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {state?.links?.map(({ key, title, label }) => (
                            <CustomLink title={title} key={key} component='li'>{label}</CustomLink>
                        ))}
                    </List>
                </Drawer>
            </>
        )
        : (
            <Box component='ul' display='flex' alignItems='center' gap={isMedium ? 2 : 4} aria-label='Main Navigation Links'>
                {state?.links?.map(({ key, title, label }) => (<CustomLink title={title} key={key} component='li' aria-label={`Link to ${label}`}>{label}</CustomLink>))}
            </Box>
        )
}
export const RightSlot = ({ state: { title = 'Sign up', label = 'Sign up' } = {} }) => (
    <Box display='flex' alignItems='center' gap={3}>
        <Tooltip title={title}><Button sx={{ paddingBlock: { xs: '12px', sm: '6px' } }}>{label}</Button></Tooltip>
    </Box>
)