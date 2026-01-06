import Box from '@mui/material/Box'
import { FORM_SAMPLE_PAGE_NAV_LINKS } from '@/Core/templates/FormSampleTemplate.constants'
import { LeftSlot, MiddleSlot, RightSlot } from './Nav.slots'
import { PageContainer } from '../PageContainer/PageContainer'

// NOTE: PageContainer removes the extra constant but it increases html depth by 1
export const StandardContainer = ({ children, ...props }) => (<PageContainer><Box display='flex' width='100%' alignItems='center' justifyContent='space-between' gap={3} {...props}>{children}</Box></PageContainer>)
export const CenterContainer = ({ children, ...props }) => (<Box display='flex' alignItems='center' justifyContent={{ xs: 'flex-start', md: 'center' }} width={{ xs: 'fit-content', md: '100%' }} {...props}>{children}</Box>)
const DefaultChildren = <>
    <StandardContainer px={3} py={3} flexDirection={{ xs: 'column', md: 'row' }}>
        <StandardContainer gap={6} justifyContent={{ xs: 'center', md: 'flex-start' }}><LeftSlot /><CenterContainer><MiddleSlot /></CenterContainer></StandardContainer>
        <RightSlot />
    </StandardContainer>
</>
export const Nav = ({ children = DefaultChildren, sx }) => (<Box component='nav' aria-label='Main navigation' display='flex' justifyContent='center' width='100%' position='sticky' top={0} zIndex={1000} boxShadow={1} sx={theme => ({ backgroundColor: theme.palette.background.default, ...sx })}>{children}</Box>)
// --- Other Default variants
export const FormNav = () => (
    <Nav>
        <StandardContainer px={3} py={3} flexDirection={{ xs: 'column', md: 'row' }}>
            <StandardContainer gap={6} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                <LeftSlot /><CenterContainer><MiddleSlot state={{ links: FORM_SAMPLE_PAGE_NAV_LINKS }} /></CenterContainer>
            </StandardContainer>
            <RightSlot />
        </StandardContainer>
    </Nav>
)