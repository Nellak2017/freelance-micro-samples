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
import { SITE_TITLE, DEFAULT_NAV_LINKS, DEFAULT_NAV_BUTTON_DATA } from '@/Core/components/Nav/Nav.constants'
import { CustomDarkModeSwitch } from '@/UI/atoms/CustomDarkModeSwitch/CustomDarkModeSwitch'

const CustomLink = ({ title = '', href = '/', children, ...rest }) => (<Box title={title} sx={theme => ({ listStyleType: 'none', boxShadow: 'none', borderBottom: '1px solid transparent', '&:hover': { borderBottom: `1px solid ${theme.palette.primary.main}` } })} {...rest} ><Link href={href}>{children}</Link></Box>)
export const LeftSlot = ({ state: { title = SITE_TITLE } = {} }) => (<Box display='flex' alignItems='center' gap={3}><Logo /><Typography aria-label='Logo Title'>{title}</Typography></Box>)
export const MiddleSlot = ({ state : { links = DEFAULT_NAV_LINKS } = {} } ) => {
    const isMedium = useMediaQuery(theme => theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))
    const [isOpen, setIsOpen] = useState(false)
    return isSmall
        ? (
            <>
                <IconButton title='Open navigation menu' onClick={() => setIsOpen(true)} aria-expanded={isOpen} aria-controls='main-menu' aria-label='Open navigation menu'><MenuIcon /></IconButton>
                <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
                    <List sx={{ px: 3, py: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {links?.map(({ key, title, label }) => (<CustomLink title={title} key={key} component='li'>{label}</CustomLink>))}
                    </List>
                </Drawer>
            </>
        )
        : (
            <Box component='ul' display='flex' alignItems='center' gap={isMedium ? 2 : 4} aria-label='Main Navigation Links'>
                {links?.map(({ key, title, label }) => (<CustomLink title={title} key={key} component='li' aria-label={`Link to ${label}`}>{label}</CustomLink>))}
            </Box>
        )
}
export const RightSlot = ({ state: { buttonData = DEFAULT_NAV_BUTTON_DATA } = {}}) => (
    <Box display='flex' alignItems='center' gap={3}>
        <CustomDarkModeSwitch />
        {buttonData?.map(({ title, label, href }, index) => (
            <Button key={`Home-Nav-${label}-Button`} title={title} href={href} variant={['contained', 'secondary']?.[index % 2]}>{label}</Button>
        ))}
    </Box>
)