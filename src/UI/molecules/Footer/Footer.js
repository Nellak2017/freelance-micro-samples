import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import { LeftSlot } from '../Nav/Nav.slots'
const Column = ({ state: { title = 'Company', links = [{ label: 'About us' }, { label: 'Customers' }, { label: 'Newsroom' }, { label: 'Events' }] } = {} }) => (
    <Box height='100%' display='flex' flexDirection='column' gap={2}>
        <Typography component='h3' variant='h3'>{title}</Typography>
        <Box display='flex' flexDirection='column' gap={2}>
            {links?.map(({ href, label }) => (<NextLink key={label} href={href ?? '/'}>{label}</NextLink>))}
        </Box>
    </Box>
)
const DefaultChildren = (
    <Box display='flex' flexDirection='column' px={6} sx={theme => ({ backgroundColor: theme.palette.background.paperBackground })}>
        <Box display='flex' alignItems='center' justifyContent='space-between' height='200px' pt={4}>
            <Box width='20%' height='100%'>
                <LeftSlot />
                <Typography variant='body2'>
                    Our solutions make production faster and cheaper. Contact us for more information.
                </Typography>
            </Box>
            <Column />
            <Column state={{ title: 'Industries', links: [{ label: 'Precision Metaforming' }, { label: 'Industrial Manufacturing' }, { label: 'High Tech & Electronics' }, { label: 'Aerospace' },] }} />
            <Column state={{ title: 'Products', links: [{ label: 'Manufacturing Execution System' }, { label: 'Enterprise Resource Planning' }, { label: 'Quality Management System' }, { label: 'Supply Chain Planning' },] }} />
            <Column state={{ title: 'Get in Touch', links: [{ label: 'example@example.com' }] }} />
        </Box>
        <Divider />
        <Box>
            C 2025 Prodmast. All rights reserved
        </Box>
    </Box>
)
export const Footer = ({ children = DefaultChildren, ...rest }) => (
    <Box width='100%' {...rest}>{children}</Box>
)