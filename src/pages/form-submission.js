import { QueryClient, dehydrate } from '@tanstack/react-query'
import { handleGetFormServerSide } from '@/Infra/workflows/MultiStepFormSubmission.handlers'
import { FormSubmissionTemplate } from '@/UI/templates/FormSubmission/FormSubmissionTemplate'
import { createClient } from '@/Infra/Supabase/supabaseServerClient'
import { REACT_QUERY_KEYS } from '@/Core/shared/global.constants'
const { APP_FORM: { FIELDS } } = REACT_QUERY_KEYS
export const FormSubmission = ({ initialFields }) => (<FormSubmissionTemplate initialFields={initialFields} />)
export const getServerSideProps = async (ctx) => {
    const supabase = createClient(ctx)
    const { data: authData, error: authError } = await supabase.auth.getClaims()
    if (authError || !authData?.claims || authData?.claims?.role !== 'authenticated') return { redirect: { destination: '/', permanent: false } }
    const { data, error } = await handleGetFormServerSide({ ctx })
    const initialFields = error ? [] : data
    const queryClient = new QueryClient()
    queryClient.setQueryData([FIELDS], initialFields)
    return { props: { dehydratedState: dehydrate(queryClient), initialFields } }
}
export default FormSubmission