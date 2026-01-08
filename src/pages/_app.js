import { useMemo } from 'react'
import Head from 'next/head'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'
import { muiGlobalStyles } from '@/UI/styles/globalStyles'
import { useThemeMode } from '@/Application/hooks/shared/useThemeMode'
import { AppCacheProvider } from '@mui/material-nextjs/v16-pagesRouter'
import createEmotionCache from '@/Core/shared/createEmotionCache'
import { Analytics } from '@vercel/analytics/next'
import { TITLE } from '@/Core/pages/_app.constants'
import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'
const clientCache = createEmotionCache({ key: 'css', enableCssLayer: false }) // NOTE: needed for accidental complexity reasons
const App = ({ Component, pageProps }) => {
    const queryClient = useMemo(() => new QueryClient(), [pageProps.dehydratedState])
    const { theme } = useThemeMode()
    return (<>
        <Head><title>{TITLE}</title><meta name='viewport' content='width=device-width, initial-scale=1.0' /></Head>
        <AppCacheProvider emotionCache={clientCache} {...pageProps}>
            <MUIThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <HydrationBoundary state={pageProps.dehydratedState}>
                        <GlobalStyles styles={muiGlobalStyles({ theme })} />
                        <Component {...pageProps} />
                        <Analytics />
                    </HydrationBoundary>
                </QueryClientProvider>
            </MUIThemeProvider>
        </AppCacheProvider>
    </>)
}
export default App