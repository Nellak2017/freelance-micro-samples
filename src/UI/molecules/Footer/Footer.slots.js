import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'
import { LeftSlot } from '../Nav/Nav.slots'
import { FOOTER_COLUMN_DATA, LOGO_DESCRIPTION, CLOSING_REMARKS } from '@/Core/components/Footer/Footer.constants'
import { PageContainer } from '../PageContainer/PageContainer'
// TODO: Fix the inconsistent gap between columns on < sm screens when it is in flex-direction: column
const { left, right } = CLOSING_REMARKS
const Column = ({ state }) => (
    <Box display='flex' flexDirection='column' gap={2} >
        <Typography component='h3' variant='h3'>{state?.title}</Typography>
        <Box display='flex' flexDirection='column' gap={2}>
            {state?.links?.map(({ href, label }) => (<NextLink key={label} href={href ?? '/'}>{label}</NextLink>))}
        </Box>
    </Box>
)
export const DefaultChildren = (
    <Box display='flex' flexDirection='column' px={3} alignItems='center' sx={theme => ({ backgroundColor: theme.palette.background.paperBackground })}>
        <PageContainer>
            <Box display='flex' justifyContent='space-between' alignItems={{ xs: 'center', sm: 'flex-start' }} flexDirection={{ xs: 'column', sm: 'row' }} gap={{ xs: 6, sm: 3 }} my={4} mx='0px' px={3} width='100%'>
                <Box display='flex' flexDirection='column' minWidth='20%' maxWidth={{ xs: '100%', sm: '200px' }} width={{ xs: '50%', sm: 'fit-content' }}>
                    <LeftSlot /><Typography variant='body2'>{LOGO_DESCRIPTION}</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between' alignItems='flex-start' flexDirection={{ xs: 'column', sm: 'row' }} width={{ xs: '50%', sm: '100%' }} flexWrap='wrap' gap={6}>
                    {FOOTER_COLUMN_DATA?.map(state => <Column key={state?.title} state={state} />)}
                </Box>
            </Box>
        </PageContainer>
        <PageContainer><Divider width='100%' /></PageContainer>
        <PageContainer>
            <Box minHeight='96px' display='flex' alignItems='center' justifyContent={{ xs: 'center', sm: 'space-between' }} flexDirection={{ xs: 'column', sm: 'row' }} width='100%' gap={3} p={3}>
                <Typography>{left}</Typography><Typography>{right}</Typography>
            </Box>
        </PageContainer>
    </Box>
)