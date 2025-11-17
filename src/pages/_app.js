import { useMemo } from 'react'
import { useLocalStorage } from '@/Application/hooks/shared/useLocalStorage'
import { theme as MUIDarkTheme, lightTheme as MUILightTheme } from '@/UI/styles/MUITheme'
import Head from 'next/head'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { GlobalStyles } from '@mui/material'
import { muiGlobalStyles } from '@/UI/styles/globalStyles'
const App = ({ Component, pageProps }) => {
    const { value } = useLocalStorage('themeMode', 'dark')
    const MUITheme = useMemo(() => value === 'dark' ? MUIDarkTheme : MUILightTheme, [value])
    return (
        <>
            <Head><title>Freelance Samples</title><meta name='viewport' content='width=device-width, initial-scale=1.0' /></Head>
            <MUIThemeProvider theme={MUITheme}>
                <GlobalStyles styles={muiGlobalStyles({ theme: MUITheme })} />
                <Component {...pageProps} />
            </MUIThemeProvider>
        </>
    )
}
export default App