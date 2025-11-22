import Box from '@mui/material/Box'
import { LeftSlot, MiddleSlot, RightSlot } from './Nav.slots'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'

const DefaultChildren = <><LeftSlot /><MiddleSlot /><RightSlot /></>
export const Nav = ({ children = DefaultChildren, sx }) => (<Box component='nav' aria-label='Main navigation' display='flex' alignItems='center' justifyContent='space-between' px={3} py={3} maxWidth={MAX_CONTENT_WIDTH} width='100%' sx={sx}>{children}</Box>)