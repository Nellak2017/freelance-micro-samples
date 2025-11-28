import Box from '@mui/material/Box'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
import { HomeFirstTop, HomeFirstBottom } from './HomeFirst/HomeFirst.index.slots'
const DefaultChildren = <><Box display='flex' flexDirection='column' alignItems='center' maxWidth={MAX_CONTENT_WIDTH} width='100%' gap={GAP} py={GAP}><HomeFirstTop /><HomeFirstBottom /></Box></>
export const VerticalSection = ({ children = DefaultChildren, ...rest }) => (<Box component='section' display='flex' justifyContent='center' width='100%' {...rest}>{children}</Box>)