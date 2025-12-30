import { handleGetForm } from '@/Infra/workflows/MultiStepForm.handlers'
import { FormSubmissionTemplate } from '@/UI/templates/FormSubmission/FormSubmissionTemplate'
import { createClient } from '@/Infra/Supabase/supabaseServerClient'
export const FormSubmission = ({ fields }) => (<FormSubmissionTemplate fields={fields} />)
export const getServerSideProps = async (ctx) => {
    const supabase = createClient(ctx)
    const { data: authData, error: authError } = await supabase.auth.getClaims()
    if (authError || !authData?.claims || authData?.claims?.role !== 'authenticated') return { redirect: { destination: '/', permanent: false } }
    const { data, error } = await handleGetForm({ ctx })
    return error ? { props: { fields: [] } } : { props: { fields: data } }
}
export default FormSubmission