import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { HOME_SECOND_DATA, SECTION_HEADER } from '@/Core/components/VerticalSection/HomeSecond.constants'
import { GridItem, TopGridItem, BottomGridItem } from './HomeSecond.helper.slots'
import { PageContainer } from '../../PageContainer/PageContainer'

const { header, subHeader } = SECTION_HEADER
export const DefaultChildrenHomeSecond = () => (
    <PageContainer>
        <Box display='flex' flexDirection='column' alignItems='center' p={{ xs: 0, sm: 3 }} gap={3} width={{ xs: '70%', sm: '100%' }}>
            <Box component='header' aria-labelledby='home-second-header' display='flex' flexDirection='column' alignItems='center' width={{ xs: '100%', sm: '50%' }} gap={3} >
                <Typography id='home-second-header' width='100%' variant='h2' fontWeight='bold' textAlign='center' color='primary.contrastText'>{header}</Typography>
                <Typography width='70%' textAlign='center' variant='h3' component='p' color='primary.contrastText'>{subHeader}</Typography>
            </Box>
            <Box aria-label='home-grid-region' component='ul' display='grid' gap={3} width='100%' sx={{ gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, alignItems: 'stretch', }}>
                {HOME_SECOND_DATA?.map(({ key, Icon, heading, description }) => (<GridItem key={key}><TopGridItem Icon={Icon} /><BottomGridItem heading={heading} description={description} /></GridItem>))}
            </Box>
        </Box>
    </PageContainer>
)