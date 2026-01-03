import { createClient } from '@/Infra/Supabase/supabaseServerClient'
import { SettingsTemplate } from '@/UI/templates/Settings/SettingsTemplate'
export const Settings = ({ email }) => (<SettingsTemplate email={email} />)
export const getServerSideProps = async (ctx) => {
    const supabase = createClient(ctx)
    const { data: authData, error: authError } = await supabase.auth.getClaims()
    if (authError || !authData?.claims || authData?.claims?.role !== 'authenticated' || !authData?.claims?.email) return { redirect: { destination: '/', permanent: false } }
    return { props: { email: authData.claims.email } }
}
export default Settings