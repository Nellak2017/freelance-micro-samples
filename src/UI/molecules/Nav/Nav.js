import { Box } from '@mui/material'
import { LeftSlot, MiddleSlot, RightSlot } from './Nav.slots'

const DefaultChildren = <><LeftSlot /><MiddleSlot /><RightSlot /></>
export const Nav = ({ children = DefaultChildren }) => (<Box component='nav' display='flex' alignItems='center' justifyContent='space-between' px={6} py={3}>{children}</Box>)