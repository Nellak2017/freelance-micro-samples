import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import { LeftSlot } from '../Nav/Nav.slots'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
// TODO: Fix the inconsistent gap between columns on < sm screens when it is in flex-direction: column
const Column = ({ state: { title = 'Company', links = [{ label: 'About us' }, { label: 'Customers' }, { label: 'Newsroom' }, { label: 'Events' }] } = {} }) => (
    <Box height='100%' display='flex' flexDirection='column' gap={2} >
        <Typography component='h3' variant='h3'>{title}</Typography>
        <Box display='flex' flexDirection='column' gap={2}>
            {links?.map(({ href, label }) => (<NextLink key={label} href={href ?? '/'}>{label}</NextLink>))}
        </Box>
    </Box>
)
const DefaultChildren = (
    <Box display='flex' flexDirection='column' px={3} alignItems='center' sx={theme => ({ backgroundColor: theme.palette.background.paperBackground })}>
        <Box display='flex' justifyContent='space-between' alignItems={{ xs: 'center', sm: 'flex-start' }} flexDirection={{ xs: 'column', sm: 'row' }} gap={{ xs: 6, sm: 3 }} my={4} mx='0px' px={3} maxWidth={MAX_CONTENT_WIDTH} width='100%'>
            <Box display='flex' flexDirection='column' minWidth='20%' maxWidth={{ xs: '100%', sm: '200px' }} width={{ xs: '50%', sm: 'fit-content' }}>
                <LeftSlot />
                <Typography variant='body2'>
                    Our solutions make production faster and cheaper. Contact us for more information.
                </Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' alignItems='flex-start' flexDirection={{ xs: 'column', sm: 'row' }} width={{ xs: '50%', sm: '100%' }} flexWrap='wrap' gap={6}>
                <Column />
                <Column state={{ title: 'Industries', links: [{ label: 'Precision Metaforming' }, { label: 'Industrial Manufacturing' }, { label: 'High Tech & Electronics' }, { label: 'Aerospace' },] }} />
                <Column state={{ title: 'Products', links: [{ label: 'Manufacturing Execution System' }, { label: 'Enterprise Resource Planning' }, { label: 'Quality Management System' }, { label: 'Supply Chain Planning' },] }} />
                <Column state={{ title: 'Get in Touch', links: [{ label: 'example@example.com' }] }} />

            </Box>
        </Box>
        <Divider width='100%' sx={{ maxWidth: MAX_CONTENT_WIDTH }} />
        <Box minHeight='96px' display='flex' alignItems='center' justifyContent={{ xs: 'center', sm: 'space-between' }} flexDirection={{ xs: 'column', sm: 'row' }} maxWidth={MAX_CONTENT_WIDTH} width='100%' gap={3} p={3}>
            <Typography>&#169; 2025 Prodmast. All rights reserved</Typography>
            <Typography>Terms & Conditions</Typography>
        </Box>
    </Box>
)
export const Footer = ({ children = DefaultChildren, ...rest }) => (
    <Box component='footer' width='100%' {...rest}>{children}</Box>
)