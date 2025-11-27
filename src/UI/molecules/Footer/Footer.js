import Box from '@mui/material/Box'
import { DefaultChildren } from './Footer.slots'
export const Footer = ({ children = DefaultChildren, ...rest }) => (<Box component='footer' width='100%' {...rest}>{children}</Box>)