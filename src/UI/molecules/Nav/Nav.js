import Box from '@mui/material/Box'
import { LeftSlot, MiddleSlot, RightSlot } from './Nav.slots'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'

const DefaultChildren = <><Box display='flex' maxWidth={MAX_CONTENT_WIDTH} width='100%' alignItems='center' justifyContent='space-between' px={3} py={3}><LeftSlot /><MiddleSlot /><RightSlot /></Box></>
export const Nav = ({ children = DefaultChildren, sx }) => (<Box component='nav' aria-label='Main navigation' display='flex' justifyContent='center' width='100%' position='sticky' top={0} zIndex={1000} sx={sx}>{children}</Box>)