import Box from '@mui/material/Box'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useThemeMode } from '@/Application/hooks/shared/useThemeMode'
export const CustomDarkModeSwitch = ({ sx, defaultMode = 'dark' }) => {
	const { mode, setMode } = useThemeMode(defaultMode) // if defaultMode is set to null it will have SSR flicker but we can tell if it isn't ready or not
	const toggle = () => setMode(mode === 'dark' ? 'light' : 'dark')
	const enterToggle = (e) => { if (e.key === 'Enter') { e.preventDefault(); setMode(mode === 'dark' ? 'light' : 'dark') } }
	const title = `Change theme from ${mode} to ${mode === 'dark' ? 'light' : 'dark'}`
	return <Box role='button' tabIndex={0} aria-label={title} title={title} display='flex' alignItems='center' sx={theme => ({ 'svg': { color: theme.palette.text.primary }, ...sx })} onClick={toggle} onKeyDown={enterToggle}><DarkModeSwitch aria-hidden='true' checked={mode === 'dark'} onChange={toggle} /></Box>
}