import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

const FlexCenterCenter = { display: 'flex', justifyContent: 'center', alignItems: 'center' }
export const AuthContainer = styled(Paper)(({ theme, maxwidth }) => ({
	...FlexCenterCenter,  flexDirection: 'column',
	padding: `${theme.spacing(3)} 0`, rowGap: theme.spacing(3), borderRadius: theme.spacing(3),
	maxWidth: `${maxwidth}px`, width: '100%', boxShadow: theme.shadows[3],
}))
export const StyledAuthForm = styled('form')(({ theme }) => ({ ...FlexCenterCenter, flexDirection: 'column', rowGap: theme.spacing(3), width: '100%', }))
export const InputSection = styled('div')(({ theme }) => ({ display: 'flex', flexDirection: 'column', rowGap: theme.spacing(1), width: '80%', }))
export const SignInContainer = styled('div')(() => ({ ...FlexCenterCenter, width: '100%', margin: '20px 0 20px 0', role: 'group' }))
export const CenteredContainer = styled('div')(() => ({ ...FlexCenterCenter, height: '100vh', }))