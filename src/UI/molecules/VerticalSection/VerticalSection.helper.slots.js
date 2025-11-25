import Box from '@mui/material/Box'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
export const HomeFirstCard = ({ state: { height }, children, ...rest }) => (<Box display='flex' alignItems='center' justifyContent='center' width='100%' height={height} overflow='hidden' position='relative' borderRadius={GAP} boxShadow={GAP} {...rest}>{children}</Box>)