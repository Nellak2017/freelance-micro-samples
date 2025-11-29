import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { MAX_CONTENT_WIDTH } from '@/Core/shared/global.constants'
import { HOME_SECOND_DATA, SECTION_HEADER } from '@/Core/components/VerticalSection/HomeSecond.constants'
import { GridItem, TopGridItem, BottomGridItem } from './HomeSecond.helper.slots'

// TODO: Fix ugly colors and the MUITheme palette in general to something better
// TODO: Fix aria stuff
// TODO: Fix semantic stuff
// TODO: Use the Typography default override instead of repeating long sx stuff
// TODO: Extract the Header/Sub-header typography into its own re-used molecule, it is also used in HomePayment
const { header, subHeader } = SECTION_HEADER
export const DefaultChildrenHomeSecond = (
    <Box display='flex' flexDirection='column' alignItems='center' p={{ xs: 0, sm: 3 }} gap={3} maxWidth={MAX_CONTENT_WIDTH} width={{ xs: '70%', sm: '100%' }}>
        <Box display='flex' flexDirection='column' alignItems='center' width={{ xs: '100%', sm: '50%' }} gap={3} >
            <Typography width='100%' variant='h2' fontWeight='bold' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.h3.fontSize, md: theme.typography.h2.fontSize }, color: theme.palette.primary.contrastText })}>{header}</Typography>
            <Typography width='70%' textAlign='center' sx={theme => ({ fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize }, color: theme.palette.primary.contrastText })}>{subHeader}</Typography>
        </Box>
        <Box
            aria-label='home-grid-region'
            display='grid'
            gap={3}
            width='100%'
            sx={{ gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, alignItems: 'stretch', }}
        >
            {HOME_SECOND_DATA?.map(({ key, Icon, heading, description }) => (
                <GridItem key={key}>
                    <TopGridItem Icon={Icon} />
                    <BottomGridItem heading={heading} description={description} />
                </GridItem>
            ))}
        </Box>
    </Box>
)