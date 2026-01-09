// Most are not here for simplicity due to not doing any special work, KISS applies
import { supabase } from '../Supabase/supabaseBrowserClient'
import { validatePassword } from '@/Core/shared/fieldRules'
export const signUp = async ({ email, password, options }) => {
    const { valid, errors } = validatePassword(password)
    if (!valid) { return { data: null, error: errors?.[0] } }
    const { data, error } = await supabase.auth.signUp({ email, password, options })
    return { data, error }
}
export const resetPassword = async ({ password }) => {
    const { valid, errors } = validatePassword(password)
    if (!valid) { return { data: null, error: errors?.[0] } }
    const { data, error } = await supabase.auth.updateUser({ password })
    return { data, error }
}