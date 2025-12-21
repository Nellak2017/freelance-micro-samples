import { createTheme } from '@mui/material/styles'

// Custom Properties: logoFilter, logoFilterActive, paperBackground
const baseTheme = {
    spacing: num => ['4px', '8px', '16px', '32px', '48px', '56px',]?.[num - 1] || '4px',
    shape: { borderRadius: 8, },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ theme, ownerState }) => ({
                    textTransform: 'none', minWidth: '85px', color: theme.palette[ownerState?.color || 'primary'].contrastText, backgroundColor: theme.palette[ownerState?.color || 'primary'].main,
                    borderRadius: '32px', paddingBlock: '12px', [theme.breakpoints.up('sm')]: { paddingBlock: '6px' }, textAlign: 'center', 
                    '& path': { color: theme.palette[ownerState?.color || 'primary'].contrastText, },
                    '&:hover': { backgroundColor: theme.palette[ownerState?.color || 'primary'].dark, color: theme.palette[ownerState?.color || 'primary'].contrastText, fontWeight: 'bold', },
                    '&:active, &:focus': { backgroundColor: theme.palette[ownerState?.color || 'primary'].darker ?? theme.palette[ownerState?.color || 'primary'].dark, color: theme.palette[ownerState?.color || 'primary'].contrastText, },
                })
            }, variants: [
                {
                    props: { variant: 'secondary' }, style: ({ theme }) => ({ backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary, boxShadow: theme.shadows[1], '&:hover': { backgroundColor: theme.palette.background.paperBackground, color: theme.palette.text.secondary, }, })
                },
                {
                    props: { variant: 'outlined' },
                    style: ({ theme }) => ({
                        border: `1px solid ${theme.palette.primary.main}`, backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary,
                        '&:hover': { backgroundColor: `${theme.palette.primary.dark}50`, color: theme.palette.text.primary, },
                    })
                },
            ], defaultProps: { variant: 'contained', },
        },
        MuiCssBaseline: { defaultProps: { enableColorScheme: false, }, },
    },
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1450, }, },
    logoFilterActive: 'invert(100%) brightness(0%) invert(36%) sepia(80%) saturate(3178%) hue-rotate(238deg) brightness(99%) contrast(91%)',
}
const typography = { h1: { fontSize: '64px', [`@media (max-width:${baseTheme.breakpoints.values.md}px)`]: { fontSize: '40px' }, [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: { fontSize: '32px' }, }, h2: { fontSize: '32px', [`@media (max-width:${baseTheme.breakpoints.values.md}px)`]: { fontSize: '24px' }, [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: { fontSize: '20px' }, }, h3: { fontSize: '24px', [`@media (max-width:${baseTheme.breakpoints.values.md}px)`]: { fontSize: '20px' }, [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: { fontSize: '16px' }, }, h4: { fontSize: '16px', [`@media (max-width:${baseTheme.breakpoints.values.md}px)`]: { fontSize: '14px' }, [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: { fontSize: '12px' }, }, h5: { fontSize: '14px' }, h6: { fontSize: '12px' }, subtitle1: { fontSize: '16px', [`@media (max-width:${baseTheme.breakpoints.values.md}px)`]: { fontSize: '14px' }, [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: { fontSize: '12px' }, }, subtitle2: { fontSize: '14px', [`@media (max-width:${baseTheme.breakpoints.values.md}px)`]: { fontSize: '12px' }, [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: { fontSize: '10px' }, }, body1: { fontSize: '16px', [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: { fontSize: '14px' }, }, body2: { fontSize: '14px', [`@media (max-width:${baseTheme.breakpoints.values.sm}px)`]: { fontSize: '12px' }, }, caption: { fontSize: '10px', }}
const sharedPalette = {
    primary: { main: '#2196F3', light: '#4DABF5', dark: '#1769AA', contrastText: '#FFFFFF', },
    secondary: { main: '#3D5AFE', light: '#637BFE', dark: '#2A3EB1', contrastText: '#FFFFFF' },
    error: { main: '#E34234', light: '#ff7961', dark: '#ba000d', contrastText: '#FFFFFF', },
    warning: { main: '#FFA726', light: '#ffd95b', dark: '#c77800', contrastText: '#000000', },
    info: { main: '#8773ff', light: '#aea2ff', dark: '#5f50b2', contrastText: '#FFFFFF', },
    success: { main: '#66BB6A', light: '#98ee99', dark: '#338a3e', contrastText: '#FFFFFF', },
    grey: { 50: '#ebeaeb', 100: '#e1e0e1', 200: '#c2bfc2', 300: '#1a1c28', 400: '#332c34', 500: '#2e272e', 600: '#2b252c', 700: '#221d23', 800: '#1a161a', 900: '#141114', },
}
export const lightTheme = createTheme({
    cssVariables: false,
    ...baseTheme,
    palette: {
        mode: 'light',
        background: { default: '#faf9f4', paper: '#fff', paperBackground: '#f3f0e6' },
        text: { primary: '#1f1f1f', secondary: '#5c5c49', disabled: '#a6a08c', },
        divider: 'rgba(34, 28, 56, 0.15)',
        ...sharedPalette,
    },
    typography, logoFilter: 'invert(100%) brightness(0%)', /* Used for logo filter in Nav styles */
})
export const theme = createTheme({ // AKA: Dark Theme
    cssVariables: false,
    ...baseTheme,
    palette: {
        mode: 'dark',
        background: { default: '#221c38', paper: '#312a4c', paperBackground: '#302A31' },
        text: { primary: '#f6e9ab', secondary: '#c4b787', disabled: '#948a65', },
        divider: 'rgba(246, 233, 171, 0.12)',
        ...sharedPalette,
    },
    typography, logoFilter: 'invert(0%) brightness(100%)', /* see also (convert black to any hex with filter): https://codepen.io/sosuke/pen/Pjoqqp */
}) // see also: https://bareynol.github.io/mui-theme-creator/