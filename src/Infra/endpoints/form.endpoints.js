import { createClient } from '@/Infra/Supabase/supabaseServerClient'
export const dummyFx = () => { }
export const getFormWithoutAuth = async ({ user = null, ctx = null, serializer = defaultFormSerializer, showSuccess = dummyFx, showError = console.error }) => {
    const serverSupabase = createClient(ctx)
    const { data, error } = await serverSupabase.from('form').select('*').eq('user_id', user?.data?.user?.id).single()
    if (error) { showError(error) } else { showSuccess(data) }
    return { error, data: serializer(data) }
}