import Box from '@mui/material/Box'
import { ExtraLargeLogo } from '@/UI/atoms/AvatarLink/AvatarLink.slots'
import { SettingsOptions } from '@/UI/organisms/SettingsOptions/SettingsOptions'
import { SettingsMenu } from '@/UI/organisms/SettingsMenu/SettingsMenu'
// TODO: Re-use existing components instead of re-inventing the wheel (Like the pattern with the form handling, verify it is the same and consistent)
// TODO: Make this responsive
export const SettingsTemplate = ({ email }) => (
    <Box id='root' display='flex' flexDirection='row' alignItems='flex-start' minHeight='100vh' justifyContent='center' pt={3}>
        <Box component='nav' aria-label='Settings Navigation' display='flex' flexDirection='column' alignItems='center' px={3} gap={3}>
            <ExtraLargeLogo /><SettingsMenu />
        </Box>
        <Box id='main-content' component='main' display='flex' flexDirection='column' alignItems='flex-start' pt={6}>
            <SettingsOptions email={email} />
        </Box>
    </Box>
)