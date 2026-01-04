import { supabase } from '../Supabase/supabaseBrowserClient'
import { api } from '@/Core/infra/shared/infra.domain'
import { SIGN_UP_SUCCESS, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, REQUEST_PASSWORD_RESET_SUCCESS, RESET_PASSWORD_SUCCESS, DELETE_SUCCESS } from '@/Core/components/AuthForm/AuthForm.constants'

export const handleSignUpWithEmail = async ({ showError, showSuccess, email, password, successText = SIGN_UP_SUCCESS }) => {
    const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/form-submission` } })
    if (error) { showError?.(error) } else { showSuccess?.(successText) }
}
export const handleSignInWithEmail = async ({ router, showSuccess, showError, email, password, successText = SIGN_IN_SUCCESS }) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password, })
    if (error) { showError?.(error) } else { showSuccess?.(successText); router?.push('/form-submission') }
}
export const handleSignOut = async ({ router, setAuth, showError = console.error, showSuccess = console.log, successText = SIGN_OUT_SUCCESS }) => {
    const { error } = await supabase.auth.signOut()
    if (error) { showError?.(error) } else { router?.push('/'); showSuccess?.(successText); setAuth?.(null) }
}
export const handleRequestPasswordReset = async ({ showError, showSuccess, email, successText = REQUEST_PASSWORD_RESET_SUCCESS }) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password` })
    if (error) { showError?.(error) } else { showSuccess?.(successText) }
}
export const handleResetPassword = async ({ router, setAuth, showError, showSuccess, password, successText = RESET_PASSWORD_SUCCESS }) => {
    const { error } = await supabase.auth.updateUser({ password })
    if (error) { showError?.(error) } else { await handleSignOut({ router, setAuth, showError, showSuccess, successText }); router?.replace('/sign-in') }
}
export const handleDelete = async ({ router, setAuth, showError = console.error, showSuccess = console.log, successText = DELETE_SUCCESS }) => { 
    const sessionResult = await supabase.auth.getSession() 
    if (sessionResult?.error) { showError?.(sessionResult?.error); return sessionResult } 
    const deleteResult = await api('/api/delete-user', { method: 'DELETE', headers: { 'Authorization': `Bearer ${sessionResult?.data?.session?.access_token}` }, }) 
    if (deleteResult?.error) { showError?.(deleteResult?.error); return deleteResult }  
    else { await handleSignOut({ router, setAuth, showError, showSuccess, successText }); return deleteResult }
}