import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
export async function middleware(req) {
    let res = NextResponse.next()
    const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, { cookies: { getAll: () => req.cookies.getAll(), setAll: cookies => { cookies.forEach(c => { res.cookies.set(c.name, c.value, c.options) }) } } })
    const { error } = await supabase.auth.getClaims()
    if (error) { // Token is invalid, corrupted, expired beyond refresh window, etc.
        res.cookies.delete('sb-access-token'); res.cookies.delete('sb-refresh-token') // Clear auth cookies and continue anonymously
        res.headers.set('x-auth-state', 'invalid-token') // Optional: attach a header for observability
    }
    return res
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'], }