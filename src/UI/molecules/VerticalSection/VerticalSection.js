import Box from '@mui/material/Box'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
import { DefaultChildren } from './VerticalSection.slots'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
export const VerticalSection = ({ children = DefaultChildren, ...rest }) => (
    <Box display='flex' flexDirection='column' alignItems='center' maxWidth={MAX_CONTENT_WIDTH} width='100%' gap={GAP} {...rest}>
        {children}
    </Box>
)