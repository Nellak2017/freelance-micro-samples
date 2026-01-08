import { strictFormSerializer } from '@/Core/infra/workflows/MultiStepForm/MultiStepForm.serializers'
import { createClient } from '@/Infra/Supabase/supabaseServerClient'
import { getForm } from '@/Infra/endpoints/form.endpoints'
export const getFormDefaultState = async (ctx) => {
    const supabase = createClient(ctx)
    const user = await supabase.auth.getUser() // Used for email, error is redundant but safe
    const { data: defaultValues } = await getForm({ user, ctx, serializer: strictFormSerializer(user?.data?.user?.email) })
    return defaultValues
}