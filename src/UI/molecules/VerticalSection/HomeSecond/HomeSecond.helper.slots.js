import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { LuArrowUpRight } from 'react-icons/lu'
import { ICON_SIZE } from '@/Core/shared/global.constants'
export const StandardIcon = ({ Icon }) => (<Box width={ICON_SIZE} height={ICON_SIZE}>{<Icon size={ICON_SIZE} aria-hidden />}</Box>)
export const GridItem = ({ children }) => (<Box component='li' minWidth={0} height='100%' display='flex' flexDirection='column' justifyContent='flex-start' textAlign='center' gap={6} p={4} borderRadius={2} overflow='hidden' sx={theme => ({ backgroundColor: theme.palette.background.paper })}>{children}</Box>)
export const TopGridItem = ({ Icon }) => (<Box display='flex' alignItems='center' justifyContent='space-between'><StandardIcon Icon={Icon} /><StandardIcon Icon={LuArrowUpRight} /></Box>)
export const BottomGridItem = ({ heading, description }) => (
    <Box display='flex' flexDirection='column' alignItems='flex-start' gap={3}>
        <Typography variant='h3' textAlign='start' fontWeight='bold'>{heading}</Typography>
        <Typography variant='body1' component='p' textAlign='start' >{description}</Typography>
    </Box>
)