import { createClient } from '@/Infra/Supabase/supabaseServerClient'

// TODO: make /auth/auth-code-error page
export async function getServerSideProps({ query, req, res }) {
    const { token_hash, type, next = '/' } = query // In password reset include redirectTo instead of next from the req.query ??
    if (!token_hash || !type) { return { redirect: { destination: '/auth/auth-code-error', permanent: false } } }
    const supabase = createClient({ req, res })
    const { error } = await supabase.auth.verifyOtp({ type, token_hash, })
    if (error) { console.error('Error verifying OTP:', error); return { redirect: { destination: '/auth/auth-code-error', permanent: false } } }
    return { redirect: { destination: next, permanent: false } }
}
export default function Confirm() { return null }