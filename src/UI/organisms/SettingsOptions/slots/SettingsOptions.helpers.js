import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FormInputTextField } from '@/UI/molecules/FormInputTextField/FormInputTextField'
import InputLabel from '@mui/material/InputLabel'
export const Header = ({ headline }) => (<Typography variant='h1' component='h1'>{headline}</Typography>)
export const SettingsShell = ({ headline, children }) => (<Box display='flex' flexDirection='column' gap={3}><Header headline={headline} />{children}</Box>)
export const ReadOnlyEmailField = ({ email }) => (<Box display='flex' flexDirection='column' gap={1}><InputLabel htmlFor={'email'}>Email</InputLabel><FormInputTextField state={{ slotProps: { input: { readOnly: true, }, } }} value={email} /></Box>)
export const ButtonGroup = ({ children }) => (<Box display='flex' alignItems='center' justifyContent='center' gap={3}>{children}</Box>)
