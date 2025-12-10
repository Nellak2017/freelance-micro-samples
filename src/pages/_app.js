import Head from 'next/head'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'
import { muiGlobalStyles } from '@/UI/styles/globalStyles'
import { useThemeMode } from '@/Application/hooks/shared/useThemeMode'
import { AppCacheProvider } from '@mui/material-nextjs/v16-pagesRouter'
import createEmotionCache from '@/Core/shared/createEmotionCache'
import { Analytics } from '@vercel/analytics/next'
const clientCache = createEmotionCache({ key: 'css', enableCssLayer: false })
const App = ({ Component, pageProps }) => {
    const { theme } = useThemeMode()
    return (<>
        <Head><title>Freelance Samples</title><meta name='viewport' content='width=device-width, initial-scale=1.0' /></Head>
        <AppCacheProvider emotionCache={clientCache} {...pageProps}>
            <MUIThemeProvider theme={theme}>
                <GlobalStyles styles={muiGlobalStyles({ theme })} />
                <Component {...pageProps} />
                <Analytics />
            </MUIThemeProvider>
        </AppCacheProvider>
    </>)
}
export default App