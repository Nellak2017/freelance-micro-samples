import { supabase } from '../Supabase/supabaseBrowserClient'
import { api } from '@/Core/infra/shared/infra.domain'
// TODO: Verify the success messages are correct
export const handleSignUpWithEmail = async ({ showError, showSuccess, email, password }) => {
    const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/form-submission` } })
    if (error) { showError?.(error) } else { showSuccess?.() }
}
export const handleSignInWithEmail = async ({ router, showError, email, password }) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password, })
    if (error) { showError?.(error) } else { router?.push('/form-submission') }
}
export const handleSignOut = async ({ router, setAuth, showError = console.error, showSuccess = console.log }) => {
    const { error } = await supabase.auth.signOut()
    if (error) { showError?.(error) } else { router?.push('/'); showSuccess?.(); setAuth?.(null) }
}
export const handleRequestPasswordReset = async ({ showError, showSuccess, email, successText = null }) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password` })
    if (error) { showError?.(error) } else { showSuccess?.(successText) }
}
export const handleResetPassword = async ({ router, setAuth, showError, showSuccess, password }) => {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) { showError?.(error) } else { await handleSignOut({ router, setAuth, showError, showSuccess }); router?.replace('/sign-in') }
}
export const handleDelete = async ({ router, setAuth, showError = console.error, showSuccess = console.log }) => { // ✓
    const sessionResult = await supabase.auth.getSession() // ✓
    if (sessionResult?.error) { showError?.(sessionResult?.error); return sessionResult } // ✓
    const deleteResult = await api('/api/delete-user', { method: 'DELETE', headers: { 'Authorization': `Bearer ${sessionResult?.data?.session?.access_token}` }, }) // ✓
    if (deleteResult?.error) { showError?.(deleteResult?.error); return deleteResult } // ✓ 
    else { await handleSignOut({ router, showError, showSuccess, setAuth }); return deleteResult }
}