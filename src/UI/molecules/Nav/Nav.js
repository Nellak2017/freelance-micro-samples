import Box from '@mui/material/Box'
import { LeftSlot, MiddleSlot, RightSlot } from './Nav.slots'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'

export const StandardContainer = ({ children, ...props }) => (<Box display='flex' maxWidth={MAX_CONTENT_WIDTH} width='100%' alignItems='center' justifyContent='space-between' gap={3} {...props}>{children}</Box>)
export const CenterContainer = ({ children, ...props }) => (<Box display='flex' alignItems='center' justifyContent={{ xs: 'flex-start', md: 'center' }} width={{ xs: 'fit-content', md: '100%' }} {...props}>{children}</Box>)
const DefaultChildren = <>
    <StandardContainer px={3} py={3} flexDirection={{ xs: 'column', md: 'row' }}>
        <StandardContainer gap={6} justifyContent={{ xs: 'center', md: 'flex-start' }}><LeftSlot /><CenterContainer><MiddleSlot /></CenterContainer></StandardContainer>
        <RightSlot />
    </StandardContainer>
</>
export const Nav = ({ children = DefaultChildren, sx }) => (<Box component='nav' aria-label='Main navigation' display='flex' justifyContent='center' width='100%' position='sticky' top={0} zIndex={1000} boxShadow={1} sx={theme => ({ backgroundColor: theme.palette.background.default, ...sx })}>{children}</Box>)