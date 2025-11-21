import { createEmotionCache as createPagesCreateEmotionCache } from '@mui/material-nextjs/v16-pagesRouter'
// This seems to be needed since the default Next.js integration with the Emotion Cache fails. 
// This gives a synced emotion cache for SSR and CSR in _app.js and _document.js
export default function createEmotionCache(options = {}) {
  try {
    return createPagesCreateEmotionCache({ key: 'css', prepend: true, enableCssLayer: false, ...options })
  } catch (e) {
    const createCache = require('@emotion/cache').default
    return createCache({ key: 'css', prepend: true, enableCssLayer: false, ...options })
  }
}