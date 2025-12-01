import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import MenuIcon from '@mui/icons-material/Menu'
import { Logo } from '@/UI/atoms/AvatarLink/AvatarLink.slots'
import Link from 'next/link'

const CustomLink = ({ title = '', href = '/', children, ...rest }) => (<Box title={title} sx={theme => ({ listStyleType: 'none', boxShadow: 'none', borderBottom: '1px solid transparent', '&:hover': { borderBottom: `1px solid ${theme.palette.primary.main}` } })} {...rest} ><Link href={href}>{children}</Link></Box>)
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
                <IconButton title='Open navigation menu' onClick={() => setIsOpen(true)} aria-expanded={isOpen} aria-controls='main-menu' aria-label='Open navigation menu'><MenuIcon /></IconButton>
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
export const RightSlot = ({ state: { title = 'Sign up', label = 'Sign up' } = {} }) => (<Box display='flex' alignItems='center' gap={3}><Button title={title}>{label}</Button></Box>)