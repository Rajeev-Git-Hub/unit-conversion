# AdSense Deployment Requirements

## Critical: Custom Domain Required

**GitHub Pages (github.io) domains are NOT eligible for Google AdSense.**

You MUST use a custom domain before applying for AdSense:
- Purchase a domain (e.g., convertmaster.com)
- Configure DNS to point to your hosting
- Update `next.config.ts` with the new domain

## Why github.io is Blocked

1. **Subdomain spam**: GitHub Pages subdomains are frequently used for spam sites
2. **No ownership verification**: Google cannot verify you own the subdomain
3. **Policy violation**: AdSense Terms of Service require owned domains

## Steps to Enable AdSense

1. **Buy a custom domain** (Namecheap, GoDaddy, Cloudflare)
2. **Deploy to Netlify/Vercel** (not GitHub Pages) OR configure GitHub Pages custom domain
3. **Wait 2-4 weeks** for domain age and content indexing
4. **Apply at google.com/adsense** with the custom domain
5. **Add the AdSense code** to your layout.tsx head section

## Alternative Monetization (No Custom Domain)

- Affiliate links to conversion tools
- Buy Me a Coffee donations
- GitHub Sponsors

## Current Deployment Status

- Current: GitHub Pages (BLOCKED from AdSense)
- Required: Custom domain + separate hosting
- Recommended: Netlify or Vercel for Next.js apps
