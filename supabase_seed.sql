-- PointsMax Seed Data — May 2026 (post-devaluation)
-- Run in Supabase SQL Editor AFTER schema

-- ===================== CARDS =====================

INSERT INTO public.cards (slug, name, bank, tier, point_name, earn_rate, annual_fee, has_transfers, display_order, seo_title, seo_description) VALUES
('hdfc_infinia', 'HDFC Infinia', 'HDFC', 'Super Premium', 'Reward Points', '5 RP / ₹150 (up to 10X on SmartBuy)', '₹12,500 (waived on ₹10L spend)', TRUE, 1, 'HDFC Infinia Reward Points Value 2026 — Best Redemption Options', 'Calculate the real ₹ value of your HDFC Infinia reward points. Compare SmartBuy, airmiles transfers, vouchers, and cashback. Updated post-2026 devaluation.'),
('hdfc_diners_black', 'HDFC Diners Club Black', 'HDFC', 'Super Premium', 'Reward Points', '5 RP / ₹150', '₹10,000 (waived on ₹8L spend)', TRUE, 2, 'HDFC Diners Club Black Points Value 2026', 'Best ways to redeem HDFC Diners Club Black reward points. Full transfer partner list with ratios.'),
('hdfc_regalia_gold', 'HDFC Regalia Gold', 'HDFC', 'Premium', 'Reward Points', '4 RP / ₹150', '₹2,500 (waived on ₹4L spend)', TRUE, 3, 'HDFC Regalia Gold Points Value 2026', 'HDFC Regalia Gold reward points redemption guide with SmartBuy and transfer partner values.'),
('hdfc_regalia', 'HDFC Regalia', 'HDFC', 'Premium', 'Reward Points', '4 RP / ₹150', '₹2,500', FALSE, 4, 'HDFC Regalia Points Value 2026', 'How to get the best value from HDFC Regalia reward points.'),
('hdfc_millennia', 'HDFC Millennia', 'HDFC', 'Entry', 'CashPoints', '2 CP / ₹150 (5% Amazon/FK/SmartBuy)', '₹1,000 (waived on ₹1L spend)', FALSE, 5, 'HDFC Millennia CashPoints Value 2026', 'HDFC Millennia CashPoints redemption guide.'),
('axis_magnus', 'Axis Bank Magnus', 'Axis', 'Super Premium', 'EDGE Points', '12 EDGE / ₹200', '₹12,500', TRUE, 10, 'Axis Magnus EDGE Points Value 2026 — Post Devaluation Guide', 'Axis Magnus reward points value after April 2026 devaluation. Updated transfer partner ratios.'),
('axis_atlas', 'Axis Bank Atlas', 'Axis', 'Premium', 'EDGE Miles', '5 Miles / ₹100', '₹5,000', TRUE, 11, 'Axis Atlas EDGE Miles Value 2026', 'Axis Atlas miles redemption guide after April 2026 partner changes.'),
('axis_select', 'Axis Bank SELECT', 'Axis', 'Mid', 'EDGE Points', '2-8 EDGE / ₹100', '₹3,000', FALSE, 12, 'Axis SELECT Points Value 2026', 'Axis Bank SELECT reward points redemption options.'),
('sbi_elite', 'SBI Card ELITE', 'SBI', 'Premium', 'Reward Points', '2 RP / ₹100', '₹4,999', FALSE, 20, 'SBI ELITE Reward Points Value 2026', 'SBI Card ELITE reward points redemption via SBI Rewardz.'),
('sbi_prime', 'SBI Card PRIME', 'SBI', 'Premium', 'Reward Points', '2 RP / ₹100 (bonus dining/groceries)', '₹2,999', FALSE, 21, 'SBI PRIME Points Value 2026', 'SBI Card PRIME redemption guide.'),
('sbi_cashback', 'SBI Cashback Card', 'SBI', 'Mid', 'Cashback (₹)', '5% online / 1% offline (₹2K cap each)', '₹999', FALSE, 22, 'SBI Cashback Card Review 2026', 'SBI Cashback card after April 2026 cap changes.'),
('icici_emeralde', 'ICICI Emeralde', 'ICICI', 'Super Premium', 'Reward Points', '4 RP / ₹100', '₹15,000', TRUE, 30, 'ICICI Emeralde Points Value 2026', 'ICICI Emeralde reward points with InterMiles transfer.'),
('icici_sapphiro', 'ICICI Sapphiro', 'ICICI', 'Premium', 'Reward Points', '2 RP / ₹100', '₹6,500', TRUE, 31, 'ICICI Sapphiro Points Value 2026', 'ICICI Sapphiro reward points redemption guide.'),
('icici_coral', 'ICICI Coral', 'ICICI', 'Mid', 'Reward Points', '2 RP / ₹100', '₹500', FALSE, 32, 'ICICI Coral Points Value 2026', 'ICICI Coral reward points guide.'),
('icici_amazon_pay', 'Amazon Pay ICICI', 'ICICI', 'LTF', 'Cashback (₹)', '5% Amazon / 2% partner / 1% others', 'Lifetime Free', FALSE, 33, 'Amazon Pay ICICI Card Review 2026', 'Amazon Pay ICICI cashback card — best lifetime free card in India.'),
('idfc_mayura', 'IDFC FIRST Mayura', 'IDFC FIRST', 'Super Premium', 'Reward Points', '6 RP / ₹100', '₹25,000', FALSE, 40, 'IDFC FIRST Mayura Points Value 2026', 'IDFC FIRST Mayura reward points — ₹0.50/pt on travel.'),
('idfc_ashva', 'IDFC FIRST Ashva', 'IDFC FIRST', 'Premium', 'Reward Points', '4 RP / ₹100', '₹10,000', FALSE, 41, 'IDFC FIRST Ashva Points Value 2026', 'IDFC FIRST Ashva reward points redemption guide.'),
('amex_platinum', 'Amex Platinum Travel', 'Amex', 'Premium', 'Membership Rewards', '1 MR / ₹50', '₹5,000', TRUE, 50, 'Amex Platinum Travel MR Points Value 2026', 'American Express Platinum Travel membership rewards value and transfer partners.'),
('amex_mrcc', 'Amex MRCC (Gold)', 'Amex', 'Mid', 'Membership Rewards', '1 MR / ₹50', '₹1,500', TRUE, 51, 'Amex Gold MRCC Points Value 2026', 'Amex MRCC Gold membership rewards redemption.'),
('indusind_legend', 'IndusInd Legend', 'IndusInd', 'Premium', 'Reward Points', '1.5 RP / ₹100', '₹10,000', TRUE, 60, 'IndusInd Legend Points Value 2026', 'IndusInd Legend reward points with InterMiles transfer.'),
('kotak_league_platinum', 'Kotak League Platinum', 'Kotak', 'Mid', 'Reward Points', '4 RP / ₹150', '₹1,500', FALSE, 70, 'Kotak League Platinum Points 2026', 'Kotak League Platinum reward points redemption.'),
('scapia', 'Scapia Federal Card', 'Federal', 'LTF', 'Scapia Coins', '10 coins/₹100 + 20% travel', 'Lifetime Free', FALSE, 80, 'Scapia Federal Card Review 2026', 'Scapia card — zero forex markup + travel rewards.');


-- ===================== REDEMPTIONS =====================

-- HDFC Infinia
INSERT INTO public.redemptions (card_slug, method, value_per_point, rank, tip, icon, display_order) VALUES
('hdfc_infinia', 'SmartBuy Flights/Hotels', 1.0000, 1, 'Best value — book via SmartBuy portal. Up to 70% payable via points.', '✈️', 1),
('hdfc_infinia', 'SmartBuy Tanishq/Apple', 1.0000, 1, '₹1/pt on Tanishq vouchers (50K cap/mo) and Apple products.', '💎', 2),
('hdfc_infinia', 'Airmiles Transfer', 0.5000, 2, 'Value varies by partner. 2:1 ratio on most = ₹0.50 effective. See Transfer Partners.', '🌍', 3),
('hdfc_infinia', 'SmartBuy Gift Vouchers', 0.5000, 2, 'Amazon, Flipkart, Myntra vouchers at ₹0.50/pt.', '🎁', 4),
('hdfc_infinia', 'Cash/Statement Credit', 0.5000, 3, '₹99 convenience fee. Adjusted against next statement.', '💵', 5),
('hdfc_infinia', 'Product Catalogue', 0.2000, 4, 'Worst value — products overpriced in catalogue. Avoid.', '📦', 6),

-- HDFC Diners Black
('hdfc_diners_black', 'SmartBuy Flights/Hotels', 1.0000, 1, '₹1/pt on travel. Same as Infinia.', '✈️', 1),
('hdfc_diners_black', 'Airmiles Transfer', 0.5000, 2, 'Same partners as Infinia at 2:1. See Transfer Partners.', '🌍', 2),
('hdfc_diners_black', 'SmartBuy Gift Vouchers', 0.5000, 2, 'Amazon/Flipkart vouchers.', '🎁', 3),
('hdfc_diners_black', 'Cash/Statement Credit', 0.5000, 3, '₹99 fee.', '💵', 4),
('hdfc_diners_black', 'Product Catalogue', 0.2000, 4, 'Avoid.', '📦', 5),

-- HDFC Regalia Gold
('hdfc_regalia_gold', 'SmartBuy Flights/Hotels', 0.5000, 1, '₹0.50/pt. 70% payable via points.', '✈️', 1),
('hdfc_regalia_gold', 'Airmiles Transfer', 0.3300, 2, '3:1 ratio on most partners.', '🌍', 2),
('hdfc_regalia_gold', 'SmartBuy Gift Vouchers', 0.3000, 2, 'Amazon/FK at ₹0.30/pt.', '🎁', 3),
('hdfc_regalia_gold', 'Cash/Statement Credit', 0.2000, 3, 'Low value.', '💵', 4),
('hdfc_regalia_gold', 'Product Catalogue', 0.1500, 4, 'Avoid.', '📦', 5),

-- HDFC Regalia
('hdfc_regalia', 'SmartBuy Flights/Hotels', 0.5000, 1, '₹0.50/pt. Best for this card.', '✈️', 1),
('hdfc_regalia', 'Gift Vouchers (Lifestyle/Westside)', 0.3500, 2, '₹0.35/pt on lifestyle vouchers.', '🎁', 2),
('hdfc_regalia', 'Cash/Statement Credit', 0.2000, 3, '₹0.20/pt.', '💵', 3),
('hdfc_regalia', 'Product Catalogue', 0.1500, 4, 'Avoid.', '📦', 4),

-- HDFC Millennia
('hdfc_millennia', 'Cash/Statement Credit', 0.2500, 1, '₹0.25 per CashPoint.', '💵', 1),
('hdfc_millennia', 'Product Catalogue', 0.2000, 2, 'Slightly lower.', '📦', 2),

-- Axis Magnus
('axis_magnus', 'Travel EDGE Portal', 0.5000, 1, 'Flights/hotels on Travel EDGE.', '✈️', 1),
('axis_magnus', 'Miles Transfer', 0.4000, 1, 'Transfer to airline/hotel partners. Post-Apr 2026 devaluation.', '🌍', 2),
('axis_magnus', 'EDGE Reward Store Vouchers', 0.2500, 2, 'E-vouchers.', '🎁', 3),
('axis_magnus', 'Statement Credit', 0.2000, 3, 'Last resort.', '💵', 4),

-- Axis Atlas
('axis_atlas', 'Travel EDGE Portal', 0.5000, 1, 'Direct flight/hotel booking.', '✈️', 1),
('axis_atlas', 'Miles Transfer', 0.2500, 2, 'Post-Apr 2026 devaluation hit Atlas hardest.', '🌍', 2),
('axis_atlas', 'EDGE Reward Store Vouchers', 0.2500, 2, 'E-vouchers.', '🎁', 3),
('axis_atlas', 'Statement Credit', 0.2000, 3, 'Last resort.', '💵', 4),

-- Axis SELECT
('axis_select', 'Travel EDGE Portal', 0.3000, 1, '₹0.30/pt.', '✈️', 1),
('axis_select', 'EDGE Vouchers', 0.2000, 2, '₹0.20/pt.', '🎁', 2),
('axis_select', 'Statement Credit', 0.2000, 3, 'Same as vouchers.', '💵', 3),

-- SBI ELITE
('sbi_elite', 'Statement Credit', 0.2500, 1, '₹0.25/pt. 60K pts/mo cap (Apr 2026).', '💵', 1),
('sbi_elite', 'SBI Rewardz Portal', 0.2500, 1, 'Vouchers & products.', '🛍️', 2),
('sbi_elite', 'Gift Vouchers', 0.2500, 2, 'Amazon, Flipkart etc.', '🎁', 3),
('sbi_elite', 'Product Catalogue', 0.2000, 3, 'Slightly worse.', '📦', 4),

-- SBI PRIME
('sbi_prime', 'Statement Credit', 0.2500, 1, '₹0.25/pt.', '💵', 1),
('sbi_prime', 'SBI Rewardz Portal', 0.2500, 1, 'Vouchers.', '🛍️', 2),

-- SBI Cashback
('sbi_cashback', 'Auto Statement Credit', 1.0000, 1, 'Auto-credited. ₹2K/mo cap per category since April 2026.', '💵', 1),

-- ICICI Emeralde
('icici_emeralde', 'InterMiles Transfer', 0.5000, 1, 'Best value. Convert to InterMiles for flights.', '🌍', 1),
('icici_emeralde', 'ICICI Catalogue/Vouchers', 0.2500, 2, 'Standard voucher value.', '🎁', 2),
('icici_emeralde', 'Statement Credit', 0.2500, 2, '₹0.25/pt.', '💵', 3),

-- ICICI Sapphiro
('icici_sapphiro', 'InterMiles Transfer', 0.5000, 1, 'Convert to InterMiles.', '🌍', 1),
('icici_sapphiro', 'Vouchers/Statement Credit', 0.2500, 2, '₹0.25/pt.', '💵', 2),

-- ICICI Coral
('icici_coral', 'Vouchers/Statement Credit', 0.2500, 1, '₹0.25/pt.', '💵', 1),

-- Amazon Pay ICICI
('icici_amazon_pay', 'Amazon Pay Balance (Auto)', 1.0000, 1, 'Auto-credited as Amazon Pay balance. No action needed.', '🛒', 1),

-- IDFC Mayura
('idfc_mayura', 'Travel & Shop (Flights/Hotels)', 0.5000, 1, '₹0.50/pt via IDFC FIRST app.', '✈️', 1),
('idfc_mayura', 'Gift Vouchers', 0.2500, 2, '₹0.25/pt.', '🎁', 2),
('idfc_mayura', 'Statement Credit', 0.2500, 2, 'Same as vouchers.', '💵', 3),

-- IDFC Ashva
('idfc_ashva', 'Travel & Shop (Flights/Hotels)', 0.4000, 1, '₹0.40/pt via app.', '✈️', 1),
('idfc_ashva', 'Vouchers/Statement Credit', 0.2500, 2, '₹0.25/pt.', '💵', 2),

-- Amex Platinum Travel
('amex_platinum', 'Amex Travel (Flights)', 1.0000, 1, '₹1/pt on flights via Amex Travel Online.', '✈️', 1),
('amex_platinum', 'Airline Transfer Partners', 0.5000, 2, 'Transfer to partner programs.', '🌍', 2),
('amex_platinum', 'Statement Credit', 0.3000, 3, '₹0.30/pt.', '💵', 3),
('amex_platinum', 'Product Catalogue', 0.2500, 4, 'Avoid.', '📦', 4),

-- Amex MRCC
('amex_mrcc', 'Amex Travel (Flights)', 0.5000, 1, 'Best for this card.', '✈️', 1),
('amex_mrcc', '18/24K Gold Collection', 0.5000, 1, 'Gold coins at good value.', '💎', 2),
('amex_mrcc', 'Statement Credit', 0.3000, 2, '₹0.30/pt.', '💵', 3),

-- IndusInd Legend
('indusind_legend', 'InterMiles Transfer', 0.5000, 1, 'Convert to InterMiles.', '🌍', 1),
('indusind_legend', 'Vouchers/Statement Credit', 0.2500, 2, '₹0.25/pt.', '💵', 2),

-- Kotak League Platinum
('kotak_league_platinum', 'Gift Vouchers', 0.2500, 1, '₹0.25/pt.', '🎁', 1),
('kotak_league_platinum', 'Statement Credit', 0.2000, 2, '₹0.20/pt.', '💵', 2),

-- Scapia
('scapia', 'Scapia Travel Bookings', 0.1000, 1, '10 coins = ₹1. Auto-applied.', '✈️', 1),
('scapia', 'Statement Credit', 0.1000, 1, 'Same value.', '💵', 2);


-- ===================== TRANSFER PARTNERS =====================

-- HDFC Infinia
INSERT INTO public.transfer_partners (card_slug, partner_name, partner_type, alliance, country_icon, transfer_ratio, effective_value, note, is_best, is_devalued, display_order) VALUES
('hdfc_infinia', 'Singapore Airlines KrisFlyer', 'airline', 'Star Alliance', '🇸🇬', '1:1', 1.0000, 'Legacy partner. Transfer via NetBanking.', TRUE, FALSE, 1),
('hdfc_infinia', 'Finnair Avios', 'airline', 'Oneworld', '🇫🇮', '1:1', 1.0000, '1:1 ratio! Transfer Avios free to BA/Qatar. Best Avios hack.', TRUE, FALSE, 2),
('hdfc_infinia', 'Aeroplan (Air Canada)', 'airline', 'Star Alliance', '🇨🇦', '2:1', 0.5000, 'Star Alliance awards. Good for North America.', FALSE, FALSE, 3),
('hdfc_infinia', 'United MileagePlus', 'airline', 'Star Alliance', '🇺🇸', '2:1', 0.5000, 'Star Alliance. Decent for US flights.', FALSE, FALSE, 4),
('hdfc_infinia', 'Air India Flying Returns', 'airline', 'Star Alliance', '🇮🇳', '2:1', 0.5000, 'Usually better to book via SmartBuy at ₹1/pt.', FALSE, FALSE, 5),
('hdfc_infinia', 'British Airways Avios', 'airline', 'Oneworld', '🇬🇧', '2:1', 0.5000, 'Short-haul sweet spots on BA/Qatar.', FALSE, FALSE, 6),
('hdfc_infinia', 'Cathay Pacific Asia Miles', 'airline', 'Oneworld', '🇭🇰', '2:1', 0.5000, 'Good for Asia-Pacific premium cabins.', FALSE, FALSE, 7),
('hdfc_infinia', 'Thai Airways Royal Orchid Plus', 'airline', 'Star Alliance', '🇹🇭', '2:1', 0.5000, 'Star Alliance partner.', FALSE, FALSE, 8),
('hdfc_infinia', 'Turkish Miles & Smiles', 'airline', 'Star Alliance', '🇹🇷', '2:1', 0.5000, 'Was 1:1 pre-Jan 2024. Good for biz class.', FALSE, TRUE, 9),
('hdfc_infinia', 'Avianca LifeMiles', 'airline', 'Star Alliance', '🇨🇴', '2:1', 0.5000, 'Was 1:1 pre-Jan 2024. Low award taxes.', FALSE, TRUE, 10),
('hdfc_infinia', 'Qatar Airways Privilege Club', 'airline', 'Oneworld', '🇶🇦', '2:1', 0.5000, 'QSuites business class!', FALSE, FALSE, 11),
('hdfc_infinia', 'Japan Airlines Mileage Bank', 'airline', 'Oneworld', '🇯🇵', '2:1', 0.5000, 'Oneworld awards to Japan.', FALSE, FALSE, 12),
('hdfc_infinia', 'Air France Flying Blue', 'airline', 'SkyTeam', '🇫🇷', '2:1', 0.5000, 'SkyTeam. Monthly promo awards.', FALSE, FALSE, 13),
('hdfc_infinia', 'Vietnam Airlines LotusSmiles', 'airline', 'SkyTeam', '🇻🇳', '2:1', 0.5000, 'SkyTeam partner.', FALSE, FALSE, 14),
('hdfc_infinia', 'Marriott Bonvoy', 'hotel', '', '🏨', '2:1', 0.5000, 'Direct transfer or via SQ/ITC routes.', FALSE, FALSE, 20),
('hdfc_infinia', 'IHG One Rewards', 'hotel', '', '🏨', '2:1', 0.5000, 'Holiday Inn, Crowne Plaza, InterContinental.', FALSE, FALSE, 21),
('hdfc_infinia', 'Accor Live Limitless (ALL)', 'hotel', '', '🏨', '2:1', 0.5000, 'Ibis to Raffles. 1 Accor pt ≈ €0.02.', FALSE, FALSE, 22),
('hdfc_infinia', 'Club ITC', 'hotel', '', '🏨', '2:1', 0.5000, 'ITC Hotels India. Can transfer ITC → Marriott.', FALSE, FALSE, 23),
('hdfc_infinia', 'Wyndham Rewards', 'hotel', '', '🏨', '2:1', 0.5000, 'Budget hotels globally.', FALSE, FALSE, 24),
('hdfc_infinia', 'Radisson Rewards', 'hotel', '', '🏨', '2:1', 0.5000, 'Strong India presence.', FALSE, FALSE, 25),

-- HDFC Diners Black (same as Infinia minus a few)
('hdfc_diners_black', 'Singapore Airlines KrisFlyer', 'airline', 'Star Alliance', '🇸🇬', '1:1', 1.0000, 'Legacy 1:1. Via NetBanking.', TRUE, FALSE, 1),
('hdfc_diners_black', 'Finnair Avios', 'airline', 'Oneworld', '🇫🇮', '1:1', 1.0000, 'Best Avios entry. Move free to BA/Qatar.', TRUE, FALSE, 2),
('hdfc_diners_black', 'Aeroplan (Air Canada)', 'airline', 'Star Alliance', '🇨🇦', '2:1', 0.5000, 'Star Alliance awards.', FALSE, FALSE, 3),
('hdfc_diners_black', 'Air India Flying Returns', 'airline', 'Star Alliance', '🇮🇳', '2:1', 0.5000, 'SmartBuy usually better.', FALSE, FALSE, 4),
('hdfc_diners_black', 'British Airways Avios', 'airline', 'Oneworld', '🇬🇧', '2:1', 0.5000, 'Short-haul sweet spots.', FALSE, FALSE, 5),
('hdfc_diners_black', 'Turkish Miles & Smiles', 'airline', 'Star Alliance', '🇹🇷', '2:1', 0.5000, 'Biz class to Europe.', FALSE, TRUE, 6),
('hdfc_diners_black', 'Avianca LifeMiles', 'airline', 'Star Alliance', '🇨🇴', '2:1', 0.5000, 'Low surcharges.', FALSE, TRUE, 7),
('hdfc_diners_black', 'Qatar Airways Privilege Club', 'airline', 'Oneworld', '🇶🇦', '2:1', 0.5000, 'QSuites business class.', FALSE, FALSE, 8),
('hdfc_diners_black', 'Marriott Bonvoy', 'hotel', '', '🏨', '2:1', 0.5000, 'Direct or via ITC.', FALSE, FALSE, 20),
('hdfc_diners_black', 'Accor Live Limitless (ALL)', 'hotel', '', '🏨', '2:1', 0.5000, 'Ibis to Raffles.', FALSE, FALSE, 21),
('hdfc_diners_black', 'Club ITC', 'hotel', '', '🏨', '2:1', 0.5000, 'ITC Hotels India.', FALSE, FALSE, 22),
('hdfc_diners_black', 'IHG One Rewards', 'hotel', '', '🏨', '2:1', 0.5000, 'Holiday Inn, Crowne Plaza.', FALSE, FALSE, 23),

-- HDFC Regalia Gold
('hdfc_regalia_gold', 'Singapore Airlines KrisFlyer', 'airline', 'Star Alliance', '🇸🇬', '2:1', 0.5000, 'Best transfer for this card.', TRUE, FALSE, 1),
('hdfc_regalia_gold', 'Aeroplan (Air Canada)', 'airline', 'Star Alliance', '🇨🇦', '3:1', 0.3300, 'Worse ratio than Infinia/DCB.', FALSE, FALSE, 2),
('hdfc_regalia_gold', 'Air India Flying Returns', 'airline', 'Star Alliance', '🇮🇳', '3:1', 0.3300, 'SmartBuy likely better.', FALSE, FALSE, 3),
('hdfc_regalia_gold', 'Marriott Bonvoy', 'hotel', '', '🏨', '3:1', 0.3300, 'Direct transfer.', FALSE, FALSE, 20),
('hdfc_regalia_gold', 'Accor Live Limitless (ALL)', 'hotel', '', '🏨', '3:1', 0.3300, 'Budget to luxury.', FALSE, FALSE, 21),
('hdfc_regalia_gold', 'Club ITC', 'hotel', '', '🏨', '3:1', 0.3300, 'ITC India.', FALSE, FALSE, 22),
('hdfc_regalia_gold', 'IHG One Rewards', 'hotel', '', '🏨', '3:1', 0.3300, 'Holiday Inn family.', FALSE, FALSE, 23),

-- Axis Magnus
('axis_magnus', 'Singapore Airlines KrisFlyer', 'airline', 'Star Alliance', '🇸🇬', '5:2', 0.4000, 'Legacy partner. Unchanged.', TRUE, FALSE, 1),
('axis_magnus', 'Aeroplan (Air Canada)', 'airline', 'Star Alliance', '🇨🇦', '5:2', 0.4000, 'Star Alliance. Unchanged.', FALSE, FALSE, 2),
('axis_magnus', 'Japan Airlines Mileage Bank', 'airline', 'Oneworld', '🇯🇵', '5:2', 0.4000, 'Oneworld partner.', FALSE, FALSE, 3),
('axis_magnus', 'Air India Flying Returns', 'airline', 'Star Alliance', '🇮🇳', '5:2', 0.4000, 'Star Alliance India.', FALSE, FALSE, 4),
('axis_magnus', 'Air France Flying Blue', 'airline', 'SkyTeam', '🇫🇷', '5:2', 0.4000, 'SkyTeam. Promo awards.', FALSE, FALSE, 5),
('axis_magnus', 'British Airways Avios', 'airline', 'Oneworld', '🇬🇧', '5:1', 0.2000, 'NEW Apr 2026. Worse ratio.', FALSE, TRUE, 6),
('axis_magnus', 'Finnair Avios', 'airline', 'Oneworld', '🇫🇮', '5:1', 0.2000, 'NEW Apr 2026. Poor ratio.', FALSE, TRUE, 7),
('axis_magnus', 'Vietnam Airlines LotusSmiles', 'airline', 'SkyTeam', '🇻🇳', '5:1', 0.2000, 'NEW Apr 2026. Poor ratio.', FALSE, TRUE, 8),
('axis_magnus', 'IHG One Rewards', 'hotel', '', '🏨', '5:2', 0.4000, 'Unchanged.', FALSE, FALSE, 20),
('axis_magnus', 'Club ITC', 'hotel', '', '🏨', '5:2', 0.4000, 'ITC Hotels India.', FALSE, FALSE, 21),
('axis_magnus', 'Radisson Rewards', 'hotel', '', '🏨', '5:2', 0.4000, 'Group B partner.', FALSE, FALSE, 22),

-- Axis Atlas
('axis_atlas', 'Singapore Airlines KrisFlyer', 'airline', 'Star Alliance', '🇸🇬', '1:2', 0.5000, 'Best Atlas transfer. 1 Mile → 2 KF miles.', TRUE, FALSE, 1),
('axis_atlas', 'Aeroplan (Air Canada)', 'airline', 'Star Alliance', '🇨🇦', '1:2', 0.5000, 'Star Alliance. Good ratio.', TRUE, FALSE, 2),
('axis_atlas', 'Japan Airlines Mileage Bank', 'airline', 'Oneworld', '🇯🇵', '1:2', 0.5000, 'Oneworld awards.', FALSE, FALSE, 3),
('axis_atlas', 'Air India Flying Returns', 'airline', 'Star Alliance', '🇮🇳', '1:2', 0.5000, 'Star Alliance India.', FALSE, FALSE, 4),
('axis_atlas', 'Air France Flying Blue', 'airline', 'SkyTeam', '🇫🇷', '1:2', 0.5000, 'SkyTeam.', FALSE, FALSE, 5),
('axis_atlas', 'British Airways Avios', 'airline', 'Oneworld', '🇬🇧', '2:1', 0.1300, 'DEVALUED Apr 2026. Was 1:2 → now 2:1. Avoid.', FALSE, TRUE, 6),
('axis_atlas', 'Finnair Avios', 'airline', 'Oneworld', '🇫🇮', '2:1', 0.1300, 'DEVALUED Apr 2026. Avoid.', FALSE, TRUE, 7),
('axis_atlas', 'IHG One Rewards', 'hotel', '', '🏨', '1:2', 0.5000, 'Good ratio.', FALSE, FALSE, 20),
('axis_atlas', 'Club ITC', 'hotel', '', '🏨', '1:2', 0.5000, 'ITC Hotels.', FALSE, FALSE, 21),

-- ICICI Emeralde
('icici_emeralde', 'InterMiles', 'airline', 'Multi', '🇮🇳', '1:1', 1.0000, '1 RP = 1 InterMile. Book flights, hotels.', TRUE, FALSE, 1),

-- ICICI Sapphiro
('icici_sapphiro', 'InterMiles', 'airline', 'Multi', '🇮🇳', '2:1', 0.5000, '2 RP = 1 InterMile.', TRUE, FALSE, 1),

-- Amex Platinum Travel
('amex_platinum', 'British Airways Avios', 'airline', 'Oneworld', '🇬🇧', '1:1', 1.0000, 'Excellent 1:1 ratio. Short-haul sweet spots.', TRUE, FALSE, 1),
('amex_platinum', 'Singapore Airlines KrisFlyer', 'airline', 'Star Alliance', '🇸🇬', '1:1', 1.0000, '1:1 ratio. Premium cabin awards.', TRUE, FALSE, 2),
('amex_platinum', 'InterMiles', 'airline', 'Multi', '🇮🇳', '1:1', 1.0000, 'Domestic flights India.', FALSE, FALSE, 3),
('amex_platinum', 'Marriott Bonvoy', 'hotel', '', '🏨', '5:4', 0.8000, 'Close to 1:1. Good for hotel stays.', FALSE, FALSE, 20),

-- Amex MRCC
('amex_mrcc', 'InterMiles', 'airline', 'Multi', '🇮🇳', '1:1', 0.5000, '1 MR = 1 InterMile.', TRUE, FALSE, 1),

-- IndusInd Legend
('indusind_legend', 'InterMiles', 'airline', 'Multi', '🇮🇳', '2:1', 0.5000, '2 RP = 1 InterMile.', TRUE, FALSE, 1);
