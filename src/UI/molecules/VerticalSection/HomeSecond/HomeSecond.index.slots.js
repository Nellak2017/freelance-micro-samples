import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
import { HOME_SECOND_DATA, SECTION_HEADER } from '@/Core/components/VerticalSection/HomeSecond.constants'
import { GridItem, TopGridItem, BottomGridItem } from './HomeSecond.helper.slots'

// TODO: Fix ugly colors and the MUITheme palette in general to something better
// TODO: Fix responsive grid errors, it is wrong sizes
// TODO: Fix aria stuff
// TODO: Fix semantic stuff
// TODO: Use the Typography default override instead of repeating long sx stuff
// TODO: Extract the Header/Sub-header typography into its own re-used molecule, it is also used in HomePayment
const { header, subHeader } = SECTION_HEADER
export const DefaultChildrenHomeSecond = (
    <Box display='flex' flexDirection='column' alignItems='center' p={3} gap={3} maxWidth={MAX_CONTENT_WIDTH} width='100%'>
        <Box display='flex' flexDirection='column' alignItems='center' width='50%' gap={3} >
            <Typography width='100%' variant='h2' fontWeight='bold' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.h3.fontSize, md: theme.typography.h2.fontSize }, color: theme.palette.primary.contrastText })}>{header}</Typography>
            <Typography width='70%' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, color: theme.palette.primary.contrastText })}>{subHeader}</Typography>
        </Box>
        <Box aria-label='home-grid-region' display='flex' maxWidth={MAX_CONTENT_WIDTH} width='100%' sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} width='100%'>
                {HOME_SECOND_DATA?.map(({ key, Icon, heading, description }) => (<GridItem key={key}><TopGridItem Icon={Icon} /><BottomGridItem heading={heading} description={description} /></GridItem>))}
            </Grid>
        </Box>
    </Box>
)