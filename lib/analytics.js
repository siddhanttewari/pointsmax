// Central GA4 event tracker for PointsMax
// Usage: track('event_name', { param1: 'value1' })

export function track(eventName, params = {}) {
  if (typeof window === 'undefined') return
  if (!window.gtag) return
  window.gtag('event', eventName, {
    ...params,
    // Always include timestamp for funnel analysis
    event_timestamp: Date.now(),
  })
}

// ── SITE SEARCH ──
export const siteSearch = {
  query: (term, resultsCount) => track('site_search', { search_term: term, results_count: resultsCount }),
  resultClick: (term, resultTitle, resultUrl) => track('search_result_click', { search_term: term, result_title: resultTitle, result_url: resultUrl }),
}

// ── CHATBOT ──
export const chatbot = {
  open: () => track('chatbot_opened'),
  message: (userMsg, intent) => track('chatbot_message', { user_message: userMsg.slice(0, 100), matched_intent: intent }),
  linkClick: (intent, url) => track('chatbot_link_click', { intent, url }),
}

// ── HOMEPAGE / CALCULATOR ──
export const calculator = {
  selectCard: (cardSlug) => track('calculator_select_card', { card: cardSlug }),
  enterPoints: (cardSlug, points) => track('calculator_enter_points', { card: cardSlug, points_value: parseInt(points) || 0 }),
  switchTab: (tab, cardSlug) => track('calculator_switch_tab', { tab, card: cardSlug }),
  viewResult: (cardSlug, pts, bestValue) => track('calculator_view_result', { card: cardSlug, points: pts, best_value: bestValue }),
  clickCTA: (destination) => track('calculator_cta_click', { destination }),
}

// ── CARD QUIZ ──
export const quiz = {
  start: () => track('quiz_start'),
  answerQuestion: (questionId, questionIndex, answer) => track('quiz_answer', {
    question_id: questionId,
    question_index: questionIndex + 1,
    answer: String(answer),
  }),
  dropOff: (questionIndex) => track('quiz_drop_off', { dropped_at_question: questionIndex + 1 }),
  complete: (answers) => track('quiz_complete', {
    spend_level: answers.spend,
    travel_frequency: answers.travel,
    priority: answers.priority,
    fee_tolerance: answers.fee,
    bank_preference: answers.bank,
  }),
  viewRecommendation: (cardName, matchPct, rank) => track('quiz_recommendation_view', {
    card_name: cardName,
    match_percentage: matchPct,
    rank,
  }),
  clickRecommendation: (cardName, destination) => track('quiz_recommendation_click', {
    card_name: cardName,
    destination,
  }),
  retake: () => track('quiz_retake'),
}

// ── BREAKEVEN CALCULATOR ──
export const breakeven = {
  selectCard: (cardName, annualFee) => track('breakeven_select_card', {
    card_name: cardName,
    annual_fee: annualFee,
  }),
  enterSpend: (spendAmount) => track('breakeven_enter_spend', {
    annual_spend: spendAmount,
    spend_bucket: spendAmount < 500000 ? 'under_5L' : spendAmount < 1000000 ? '5-10L' : spendAmount < 2000000 ? '10-20L' : 'above_20L',
  }),
  viewResult: (cardName, netValue, isPositive, feeWaived) => track('breakeven_view_result', {
    card_name: cardName,
    net_value: netValue,
    result: isPositive ? 'positive' : 'negative',
    fee_waived: feeWaived,
  }),
  clickCTA: (cardName, destination) => track('breakeven_cta_click', {
    card_name: cardName,
    destination,
  }),
}

// ── DEBT-TRAP / INTEREST CALCULATOR ──
export const debtTrap = {
  calculate: (balance, monthlyRate, months, payMode) => track('debttrap_calculate', {
    balance,
    monthly_rate: monthlyRate,
    months,
    pay_mode: payMode,
  }),
  viewResult: (totalInterest, effectiveApr) => track('debttrap_view_result', {
    total_interest: totalInterest,
    effective_apr: effectiveApr,
  }),
  clickCTA: (destination) => track('debttrap_cta_click', { destination }),
}

// ── CIBIL / UTILISATION CHECKER ──
export const cibil = {
  calculate: (totalLimit, totalBalance, ratio) => track('cibil_calculate', {
    total_limit: totalLimit,
    total_balance: totalBalance,
    utilisation: ratio,
  }),
  viewResult: (ratio, band) => track('cibil_view_result', { utilisation: ratio, band }),
  clickCTA: (destination) => track('cibil_cta_click', { destination }),
}

// ── LEAD MAGNET (email capture) ──
export const leadMagnet = {
  submit: (source) => track('lead_submit', { source }),
  download: (source) => track('lead_download', { source }),
}

// ── CROSS-PROMOTION (Decoder network) ──
export const crossPromo = {
  click: (destination, placement) => track('crosspromo_click', { destination, placement }),
}

// ── EXPIRY REMINDER ──
export const expiry = {
  selectCard: (cardName, expiryMonths) => track('expiry_select_card', {
    card_name: cardName,
    expiry_months: expiryMonths,
  }),
  enterDate: (cardName, daysRemaining) => track('expiry_enter_date', {
    card_name: cardName,
    days_remaining: daysRemaining,
    urgency: daysRemaining < 90 ? 'urgent' : daysRemaining < 180 ? 'moderate' : 'low',
  }),
  formSubmit: (cardName, hasComment) => track('expiry_form_submit', {
    card_name: cardName,
    added_comment: hasComment,
  }),
  submitError: (errorType) => track('expiry_submit_error', { error_type: errorType }),
}

// ── TRANSFERS DIRECTORY ──
export const transfers = {
  applyFilter: (filterType, filterValue) => track('transfers_filter_apply', {
    filter_type: filterType, // 'card', 'type', 'search'
    filter_value: String(filterValue),
  }),
  viewPartner: (partnerName, cardName, ratio) => track('transfers_partner_view', {
    partner_name: partnerName,
    card_name: cardName,
    ratio,
  }),
  clickCardLink: (cardName, partnerName) => track('transfers_card_link_click', {
    card_name: cardName,
    partner_name: partnerName,
  }),
}

// ── BLOG / FEEDBACK ──
export const blog = {
  feedbackRate: (pageSlug, rating) => track('blog_feedback_rating', {
    page_slug: pageSlug,
    rating, // 'up' or 'down'
  }),
  feedbackRecommend: (pageSlug, recommend) => track('blog_feedback_recommend', {
    page_slug: pageSlug,
    recommend, // 'no' | 'maybe' | 'yes'
  }),
  feedbackComment: (pageSlug, rating, hasComment) => track('blog_feedback_submit', {
    page_slug: pageSlug,
    rating,
    has_comment: hasComment,
  }),
  ctaClick: (pageSlug, ctaType, destination) => track('blog_cta_click', {
    page_slug: pageSlug,
    cta_type: ctaType, // 'mid_article', 'bottom', 'sticky_bar'
    destination,
  }),
  stickyBarClick: (pageSlug) => track('blog_sticky_bar_click', { page_slug: pageSlug }),
}

// ── PUSH NOTIFICATIONS ──
export const push = {
  shown: () => track('push_banner_shown'),
  accepted: () => track('push_permission_accepted'),
  declined: () => track('push_permission_declined'),
  dismissed: () => track('push_banner_dismissed'),
}
