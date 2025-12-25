import { supabase } from '../Supabase/supabaseBrowserClient'
// TODO: Redirect to the real app page instead of the dummy pages. Meaning you have to alter the dummy pages or make new ones
// TODO: Test every single Supabase function here
// TODO: Add serverless delete user function in pages /api
// TODO: Verify the success messages are correct
export const handleSignUpWithEmail = async ({ showError, showSuccess, email, password }) => {
    const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/form-submission` } })
    if (error) { showError(error) } else { showSuccess() }
}
export const handleSignInWithEmail = async ({ router, showError, email, password }) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password, })
    if (error) { showError(error) } else { router.push('/form-submission') }
}
export const handleRequestPasswordReset = async ({ showError, showSuccess, email }) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password` })
    if (error) { showError(error) } else { showSuccess() }
}
export const handleResetPassword = async ({ router, showError, password }) => {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) { showError(error) } else { await supabase.auth.signOut(); router.replace('/sign-in') }
}
export const handleSignOut = async ({ router, showError, showSuccess }) => {
    const { error } = await supabase.auth.signOut()
    if (error) { showError(error) } else { router.push('/'); showSuccess() }
}
export const handleGetUser = async () => {
    const { data, error } = await supabase.auth.getUser()
    return { data, error }
}