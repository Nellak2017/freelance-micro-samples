import Box from '@mui/material/Box'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { useThemeMode } from '@/Application/hooks/shared/useThemeMode'
export const CustomDarkModeSwitch = ({ sx, defaultMode = 'dark' }) => {
	const { mode, setMode } = useThemeMode(defaultMode) // if defaultMode is set to null it will have SSR flicker but we can tell if it isn't ready or not
	return <Box display='flex' alignItems='center' title={`Change theme from ${mode} to ${mode === 'dark' ? 'light' : 'dark'}`} sx={theme => ({ 'svg': { color: theme.palette.text.primary }, ...sx })}><DarkModeSwitch checked={mode === 'dark'} onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')} /></Box>
}