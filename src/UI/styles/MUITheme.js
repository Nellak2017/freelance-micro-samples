import { createTheme } from '@mui/material/styles'

// TODO: Customize colors more
// Custom Properties: logoFilter, logoFilterActive, paperBackground
const baseTheme = {
    spacing: num => ['4px', '8px', '16px', '32px', '48px', '56px',]?.[num - 1] || '4px',
    shape: { borderRadius: 8, },
    typography: { caption: { fontSize: '10px' }, h6: { fontSize: '12px' }, h5: { fontSize: '14px' }, h4: { fontSize: '16px' }, h3: { fontSize: '24px' }, h2: { fontSize: '40px' }, h1: { fontSize: '64px' }, body1: { fontSize: '16px' }, body2: { fontSize: '14px' }, },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    textTransform: 'none', minWidth: '85px', color: theme.palette.primary.contrastText, backgroundColor: theme.palette.primary.main,
                    '& path': { color: theme.palette.primary.contrastText, },
                })
            }, variants: [], defaultProps: { variant: 'contained', },
        },
    },
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536, }, },
    logoFilterActive: 'invert(100%) brightness(0%) invert(36%) sepia(80%) saturate(3178%) hue-rotate(238deg) brightness(99%) contrast(91%)',
}
const sharedPalette = {
    primary: { main: '#59e8d9', light: '#8ffbf0', dark: '#1da297', contrastText: '#000000', },
    secondary: { main: '#C9B037', light: '#fdf3a9', dark: '#948128', contrastText: '#000000', },
    error: { main: '#E34234', light: '#ff7961', dark: '#ba000d', contrastText: '#FFFFFF', },
    warning: { main: '#FFA726', light: '#ffd95b', dark: '#c77800', contrastText: '#000000', },
    info: { main: '#8773ff', light: '#aea2ff', dark: '#5f50b2', contrastText: '#FFFFFF', },
    success: { main: '#66BB6A', light: '#98ee99', dark: '#338a3e', contrastText: '#000000', },
    grey: { 50: '#ebeaeb', 100: '#e1e0e1', 200: '#c2bfc2', 300: '#1a1c28', 400: '#332c34', 500: '#2e272e', 600: '#2b252c', 700: '#221d23', 800: '#1a161a', 900: '#141114', },
}
export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: { default: '#faf9f4', paper: '#fff', paperBackground: '#f3f0e6' },
        text: { primary: '#1f1f1f', secondary: '#5c5c49', disabled: '#a6a08c', },
        divider: 'rgba(34, 28, 56, 0.15)',
        ...sharedPalette,
    },
    ...baseTheme, logoFilter: 'invert(100%) brightness(0%)', /* Used for logo filter in Nav styles */
})
export const theme = createTheme({ // AKA: Dark Theme
    palette: {
        mode: 'dark',
        background: { default: '#221c38', paper: '#312a4c', paperBackground: '#302A31' },
        text: { primary: '#f6e9ab', secondary: '#c4b787', disabled: '#948a65', },
        divider: 'rgba(246, 233, 171, 0.12)',
        ...sharedPalette,
    },
    ...baseTheme, logoFilter: 'invert(0%) brightness(100%)', /* see also (convert black to any hex with filter): https://codepen.io/sosuke/pen/Pjoqqp */
})