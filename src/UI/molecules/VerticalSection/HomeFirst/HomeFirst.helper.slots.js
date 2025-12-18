import Box from '@mui/material/Box'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
export const HomeFirstCard = ({ aspectRatio, children, ...rest }) => (<Box component='article' display='flex' alignItems='center' justifyContent='center' width='100%' minWidth='130px' overflow='hidden' position='relative' borderRadius={GAP} boxShadow={GAP} sx={{ aspectRatio }} {...rest}>{children}</Box>)
export const FlexColCenter = ({ children, ...rest }) => (<Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%' px={GAP} {...rest}>{children}</Box>)
export const FlexRow = ({ children, align = 'center', gap = GAP, ...props }) => (<Box display='flex' alignItems={align} gap={gap} {...props}>{children}</Box>)