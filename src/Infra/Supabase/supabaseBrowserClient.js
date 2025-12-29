import { createBrowserClient } from '@supabase/ssr' // NOTE: FOOT-GUN WARNING! If this is not used then it will not write cookies in the browser meaning that you can not read cookies for SSR! see also: https://github.com/supabase/supabase-js/issues/1396 
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
export const supabase = createBrowserClient(supabaseUrl, supabasePublishableKey)