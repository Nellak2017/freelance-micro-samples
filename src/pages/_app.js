import Head from 'next/head'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { GlobalStyles } from '@mui/material'
import { muiGlobalStyles } from '@/UI/styles/globalStyles'
import { useApp } from '@/Application/hooks/pages/useApp'
const App = ({ Component, pageProps }) => {
    const { MUITheme } = useApp()
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