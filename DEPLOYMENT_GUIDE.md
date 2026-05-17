# PointsMax.in — Deployment Guide
## Credit Card Rewards Optimizer for India

---

## ARCHITECTURE OVERVIEW

```
┌─────────────────────────────────────────────┐
│  VERCEL (Hosting - Free)                    │
│  Next.js App + Edge CDN for Indian users    │
│  ┌───────────────┐  ┌───────────────────┐   │
│  │ Public Pages  │  │ Protected Pages   │   │
│  │ (SEO content) │  │ (Full optimizer)  │   │
│  └───────────────┘  └───────────────────┘   │
└──────────────┬──────────────────────────────┘
               │ API calls
┌──────────────▼──────────────────────────────┐
│  SUPABASE (Database + Auth - Free)          │
│  ┌────────────┐ ┌─────────┐ ┌───────────┐  │
│  │ Card Data  │ │ Transfer│ │ User Auth │  │
│  │ (editable) │ │ Partners│ │ (Google)  │  │
│  └────────────┘ └─────────┘ └───────────┘  │
└─────────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────┐
│  GOOGLE ADSENSE (Revenue)                   │
│  Header banner / In-feed / Sticky footer    │
└─────────────────────────────────────────────┘
```

---

## STEP 1: CREATE A GITHUB ACCOUNT (skip if you have one)

1. Go to https://github.com
2. Click "Sign up" → use your email → create username
3. Verify email
4. Done. You now have a place to store your code.

---

## STEP 2: SET UP SUPABASE (Database + Auth)

### 2a. Create Supabase Project

1. Go to https://supabase.com → Click "Start your project"
2. Sign in with GitHub (the account from Step 1)
3. Click "New Project"
   - Organization: your name
   - Project name: `pointsmax`
   - Database password: generate a strong one → **SAVE THIS**
   - Region: **South Asia (Mumbai)** ← critical for Indian users
   - Plan: Free (sufficient for ~50,000 monthly users)
4. Wait 2 minutes for project to spin up

### 2b. Create Database Tables

1. In Supabase dashboard → click "SQL Editor" (left sidebar)
2. Click "New query"
3. Paste the ENTIRE contents of the file `supabase_schema.sql` (provided)
4. Click "Run" → you should see "Success"
5. Go to "Table Editor" → you should see 3 tables: `cards`, `redemptions`, `transfer_partners`

### 2c. Seed the Data

1. In SQL Editor → New query
2. Paste the ENTIRE contents of `supabase_seed.sql` (provided)
3. Click "Run" → Success
4. Check Table Editor → `cards` should have 20+ rows

### 2d. Enable Google Sign-In

1. Go to https://console.cloud.google.com
2. Create a new project → name it "PointsMax"
3. In sidebar → "APIs & Services" → "OAuth consent screen"
   - User Type: External → Create
   - App name: PointsMax
   - User support email: your email
   - Authorized domains: add `supabase.co` (for now; add your domain later)
   - Developer contact: your email → Save
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
   - Application type: Web application
   - Name: PointsMax Web
   - Authorized redirect URIs: 
     `https://YOUR_SUPABASE_PROJECT_REF.supabase.co/auth/v1/callback`
     (Find your project ref in Supabase → Settings → General)
   - Click Create → **SAVE the Client ID and Client Secret**
5. Back in Supabase dashboard → Authentication → Providers → Google
   - Enable Google
   - Paste Client ID and Client Secret
   - Save

### 2e. Get Your Supabase Keys

1. In Supabase → Settings → API
2. Copy these two values (you'll need them in Step 4):
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon/public key**: `eyJhbGci...` (the long one)

---

## STEP 3: SET UP VERCEL (Hosting)

1. Go to https://vercel.com → "Sign Up" → sign in with GitHub
2. That's it for now. We'll connect the code in Step 5.

---

## STEP 4: PREPARE THE CODE

1. Go to https://github.com → click "+" → "New repository"
   - Name: `pointsmax`
   - Public or Private (your choice)
   - Click "Create repository"
2. Upload all the project files I've provided to this repository
   - Easiest way: click "uploading an existing file" link on the repo page
   - Drag and drop ALL the project files
   - Click "Commit changes"

### 4b. Set Environment Variables

You'll add these in Vercel (Step 5), not in the code:
```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxx (add later when approved)
```

---

## STEP 5: DEPLOY TO VERCEL

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Find your `pointsmax` repo → click "Import"
4. Framework Preset: Next.js (auto-detected)
5. Environment Variables → add:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
6. Click "Deploy" → wait 1-2 minutes
7. 🎉 Your site is live at `pointsmax.vercel.app`

---

## STEP 6: SET UP GOOGLE ADSENSE

1. Go to https://adsense.google.com → Sign in with Google
2. Add your site URL: `pointsmax.vercel.app` (or custom domain)
3. Google will give you a verification code → add it to the `<head>` of your site
   (I've added a placeholder in the code — just replace the client ID)
4. Submit for review → takes 1-7 days for approval
5. Once approved, ads will auto-fill in the designated ad slots

**AdSense Tips for faster approval:**
- Have at least 5 content pages (I've built these: card-specific SEO pages)
- Add a Privacy Policy page (included in the build)
- Add an About page (included)
- Don't have too many ad slots initially (I've placed 3 — that's fine)

---

## STEP 7: CUSTOM DOMAIN (Optional but recommended)

1. Buy a domain (e.g. `pointsmax.in`) from:
   - GoDaddy.com (~₹599/year for .in)
   - Namecheap.com
   - Google Domains
2. In Vercel dashboard → your project → Settings → Domains
3. Add `pointsmax.in` → Vercel gives you DNS records
4. In your domain registrar → DNS settings → add the records Vercel gives you
5. Wait 10-30 minutes → your site is live on your domain
6. Update Google OAuth redirect URI to include your new domain
7. Update AdSense site URL

---

## HOW TO UPDATE CARD DATA (No coding needed!)

### When a bank changes reward points / transfer ratios:

1. Go to https://supabase.com → sign in → your project
2. Click "Table Editor" in left sidebar
3. Click on the relevant table:
   - `cards` → to edit card names, earn rates, tiers
   - `redemptions` → to edit redemption methods, values, tips
   - `transfer_partners` → to edit airline/hotel partners, ratios
4. Click on the row you want to edit → modify the value → it auto-saves
5. The website reflects changes INSTANTLY (no redeploy needed)

### To add a new credit card:
1. In `cards` table → click "Insert row"
2. Fill in: slug, name, bank, tier, point_name, earn_rate
3. Then add its redemptions in `redemptions` table
4. Add transfer partners (if any) in `transfer_partners` table
5. Live immediately.

### To delete a discontinued card:
1. Delete its rows from `transfer_partners` first
2. Delete from `redemptions`
3. Delete from `cards`

---

## COSTS SUMMARY

| Service | Free Tier Limit | Monthly Cost |
|---------|----------------|--------------|
| Vercel | 100GB bandwidth, serverless | ₹0 |
| Supabase | 500MB DB, 50K auth users | ₹0 |
| Domain (.in) | — | ~₹50/month |
| **Total** | | **₹0 – ₹50/month** |
| **Revenue** | AdSense + registered user data | 💰 |

---

## NEXT STEPS (Future Enhancements)

- [ ] WhatsApp OTP login via Twilio
- [ ] Points expiry email reminders
- [ ] Multi-card portfolio view
- [ ] "Compare 2 cards" feature
- [ ] Blog section for SEO content
- [ ] Push notifications for devaluation alerts
- [ ] Affiliate links to card apply pages (₹500-2000 per lead)

---

## TROUBLESHOOTING

**"Site shows blank page"**
→ Check Vercel logs: Dashboard → your project → Deployments → click latest → Logs

**"Google Sign-In doesn't work"**
→ Check redirect URI matches exactly in Google Console AND Supabase

**"Data not loading"**
→ Check Supabase → Settings → API → ensure RLS policies are correct (the schema file sets these up)

**"AdSense says 'Site not ready'"**
→ Need more content pages + traffic. Focus on SEO content first, reapply after 2 weeks.

**Need help?**
→ Come back to this Claude chat — I can debug anything.
