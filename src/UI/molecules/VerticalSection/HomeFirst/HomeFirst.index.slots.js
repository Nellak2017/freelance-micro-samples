import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { GAP } from '@/Core/components/VerticalSection/VerticalSection.slots.constants'
import { FlexColCenter, FlexRow } from './HomeFirst.helper.slots'
import { HomeFirstDefaultBottomCards } from './HomeFirst.cards.slots'
import { HOME_FIRST_TOP } from '@/Core/components/VerticalSection/HomeFirst.constants'
import { PageContainer } from '../../PageContainer/PageContainer'

export const HomeFirstTop = ({ state: { header, subHeader, primaryButton, secondaryButton, } = HOME_FIRST_TOP }) => (
    <PageContainer sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box id='home-first-top' component='header' display='flex' flexDirection='column' gap={GAP} maxWidth='60%' aria-labelledby='home-first-header'>
            <Typography id='home-first-header' component='h1' variant='h1' fontWeight='normal' textAlign='center' mx={GAP}>{header}</Typography>
            <Typography component='h2' variant='h3' fontWeight='normal' textAlign='center' mx={GAP}>{subHeader}</Typography>
            <Box id='home-first-button-group' display='flex' justifyContent='center' gap={GAP}>
                <Button href={primaryButton?.href} aria-label={primaryButton?.label} title={primaryButton?.label}>{primaryButton?.label}</Button>
                <Button href={secondaryButton?.href} aria-label={secondaryButton?.label} variant='secondary' title={secondaryButton?.label}>{secondaryButton?.label}</Button>
            </Box>
        </Box>
    </PageContainer>
)
export const HomeFirstBottom = ({ children = HomeFirstDefaultBottomCards }) => (
    <FlexColCenter id='home-first-bottom' component='section' aria-labelledby='reviews-title' gap={GAP}>
        <FlexRow width={{ xs: '70%', sm: '50%', md: '100%' }} alignItems='flex-end' flexDirection={{ xs: 'column', md: 'row' }}>
            {children}
        </FlexRow>
    </FlexColCenter>)