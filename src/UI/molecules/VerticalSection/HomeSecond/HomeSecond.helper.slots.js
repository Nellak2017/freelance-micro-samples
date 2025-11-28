import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { LuArrowUpRight } from 'react-icons/lu'
import { ICON_SIZE } from '@/Core/shared/global.constants'
export const StandardIcon = ({ Icon }) => (<Box width={ICON_SIZE} height={ICON_SIZE} sx={theme => ({ '&:hover': { cursor: 'pointer', 'path': { color: theme.palette.primary.main } } })}>{<Icon size={ICON_SIZE} />}</Box>)
export const GridItem = ({ children }) => (<Grid size={4}><Box display='flex' flexDirection='column' justifyContent='space-between' textAlign='center' p={4} borderRadius={2} sx={theme => ({ aspectRatio: '3/2', backgroundColor: theme.palette.background.paper })}>{children}</Box></Grid>)
export const TopGridItem = ({ Icon }) => (<Box display='flex' alignItems='center' justifyContent='space-between'><StandardIcon Icon={Icon} /><StandardIcon Icon={LuArrowUpRight} /></Box>)
export const BottomGridItem = ({ heading, description }) => (
    <Box display='flex' flexDirection='column' alignItems='flex-start' gap={3}>
        <Typography textAlign='start' sx={theme => ({ fontSize: { xs: theme.typography.h4.fontSize, sm: theme.typography.h3.fontSize }, fontWeight: 'bold' })}>{heading}</Typography>
        <Typography textAlign='start' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, sm: theme.typography.body1.fontSize, } })}>{description}</Typography>
    </Box>
)