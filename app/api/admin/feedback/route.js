import { createClient } from '@supabase/supabase-js'

// Server-only Supabase client using the service-role key.
// This key MUST NOT be exposed to the browser — it lives only in server env.
function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceKey) return null
  return createClient(url, serviceKey, { auth: { persistSession: false } })
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }

  const submitted = (body?.password || '').toString()
  const expected = process.env.ADMIN_PASSWORD || ''

  // Constant-ish comparison; reject if not configured or mismatched.
  if (!expected) {
    return Response.json({ error: 'Dashboard not configured (missing ADMIN_PASSWORD).' }, { status: 500 })
  }
  if (submitted.length === 0 || submitted !== expected) {
    return Response.json({ error: 'Incorrect password.' }, { status: 401 })
  }

  const supabase = getAdminClient()
  if (!supabase) {
    return Response.json({ error: 'Server not configured (missing service role key).' }, { status: 500 })
  }

  const { data, error } = await supabase
    .from('feedback')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(2000)

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ rows: data || [] })
}
