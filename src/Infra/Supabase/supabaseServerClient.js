import { createServerClient } from '@supabase/ssr'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
export const createClient = (ctx) => {
    const cookies = parseCookies(ctx)
    return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, { cookies: { getAll: () => Object.entries(cookies).map(([name, value]) => ({ name, value })), setAll: cookiesToSet => {cookiesToSet.forEach(({ name, value, options }) => { if (!value) { destroyCookie(ctx, name, options) } else { setCookie(ctx, name, value, options) }})}}})
}