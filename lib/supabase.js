import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Fetch all active cards with their bank info
export async function getCards() {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .eq('is_active', true)
    .order('display_order')
  if (error) throw error
  return data
}

// Fetch redemptions for a specific card
export async function getRedemptions(cardSlug) {
  const { data, error } = await supabase
    .from('redemptions')
    .select('*')
    .eq('card_slug', cardSlug)
    .eq('is_active', true)
    .order('display_order')
  if (error) throw error
  return data
}

// Fetch transfer partners for a specific card
export async function getTransferPartners(cardSlug) {
  const { data, error } = await supabase
    .from('transfer_partners')
    .select('*')
    .eq('card_slug', cardSlug)
    .eq('is_active', true)
    .order('display_order')
  if (error) throw error
  return data
}

// Fetch card by slug (for SEO pages)
export async function getCardBySlug(slug) {
  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .single()
  if (error) throw error
  return data
}

// Auth helpers
export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: typeof window !== 'undefined' 
        ? `${window.location.origin}/auth/callback`
        : undefined,
    },
  })
  if (error) throw error
  return data
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Log page view
export async function logPageView(cardSlug, pagePath) {
  const user = await getUser()
  await supabase.from('page_views').insert({
    card_slug: cardSlug,
    page_path: pagePath,
    user_id: user?.id || null,
  })
}
