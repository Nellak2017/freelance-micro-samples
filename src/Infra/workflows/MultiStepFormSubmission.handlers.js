import { supabase } from '../Supabase/supabaseBrowserClient'
import { createClient } from '../Supabase/supabaseServerClient'
import { defaultFormSerializer } from '@/Core/infra/workflows/MultiStepFormSubmission/MultiStepFormSubmission.serializers'
import { getFormWithoutAuth, dummyFx } from '@/Infra/endpoints/form.endpoints'

export const handleGetForm = async ({ ctx = null, serializer = defaultFormSerializer, showSuccess = dummyFx, showError = console.error }) => {
    const serverSupabase = createClient(ctx)
    const user = await serverSupabase.auth.getUser()
    if (!user?.data?.user || user?.error) return { error: user?.error, data: serializer(user?.data?.user) }
    const { data, error } = await getFormWithoutAuth({ user, ctx, serializer, showSuccess, showError })
    return { data, error }
}
// TODO: Add a type here for form 
export const handleSaveForm = async ({ form, showSuccess = dummyFx, showError = console.error }) => {
    const user = await supabase.auth.getUser()
    if (!user?.data?.user || user?.error) return user
    const { data, error } = await supabase.from('form').upsert({ ...form, user_id: user?.data?.user?.id }, { onConflict: 'user_id' }).select()
    if (error) { showError(error) } else { showSuccess(data) }
    return { data, error }
}
export const handleDeleteForm = async ({ showSuccess = dummyFx, showError = console.error }) => {
    const user = await supabase.auth.getUser()
    if (!user?.data?.user || user?.error) return user
    const { data, error } = await supabase.from('form').delete().eq('user_id', user?.data?.user?.id)
    if (error) { showError(error) } else { showSuccess(data) }
    return { data, error }
}