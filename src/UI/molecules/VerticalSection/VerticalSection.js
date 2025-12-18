import Box from '@mui/material/Box'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
import { HomeFirstTop, HomeFirstBottom } from './HomeFirst/HomeFirst.index.slots'
import { PageContainer } from '../PageContainer/PageContainer'
const DefaultChildren = <PageContainer><Box display='flex' flexDirection='column' alignItems='center' width='100%' gap={GAP} py={GAP}><HomeFirstTop /><HomeFirstBottom /></Box></PageContainer>
export const VerticalSection = ({ children = DefaultChildren, ...rest }) => (<Box component='section' display='flex' justifyContent='center' width='100%' {...rest}>{children}</Box>)