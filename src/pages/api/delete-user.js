import { createClient } from '@/Infra/Supabase/supabaseServerClient'
import { supabaseAdmin } from '@/Infra/Supabase/supabaseAdmin'

export default async function handler(req, res) { // ✓
    if (req.method !== 'DELETE') return res.status(405).json({ data: null, error: 'Method not allowed' }) // ✓
    const token = req.headers.authorization?.replace('Bearer ', '') // ✓
    if (!token) return res.status(401).json({ data: null, error: 'Missing access token, account not deleted' }) // ✓ 
    const supabase = createClient({ req, res }) // ✓
    const { data: authData, error: authError } = await supabase.auth.getUser(token) // ✓
    if (authError || !authData?.user) return res.status(401).json({ data: null, error: authError?.message ?? 'Not authenticated' }) // ✓
    const userId = authData.user?.id // ✓
    if (!userId) return res.status(400).json({ data: null, error: 'Missing userId. This is a Supabase server issue. Check docs to check if the API shape changed.' }) // ✓
    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(userId) // ✓
    if (deleteError) return res.status(500).json({ data: null, error: deleteError?.message ?? 'There is an unspecified delete error' }) // ✓
    return res.status(200).json({ data: { success: true }, error: null }) // ✓
}