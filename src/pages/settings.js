import { createClient } from '@/Infra/Supabase/supabaseServerClient'
export const Settings = () => (<div>Hello Settings!</div>)
export const getServerSideProps = async (ctx) => {
    const supabase = createClient(ctx)
    const { data: authData, error: authError } = await supabase.auth.getClaims()
    if (authError || !authData?.claims || authData?.claims?.role !== 'authenticated') return { redirect: { destination: '/', permanent: false } }
    return { props: { fields: [] } }
}
export default Settings