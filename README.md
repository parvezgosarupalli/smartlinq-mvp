# SmartLinq Solutions — Static MVP Website

This package contains a simple, responsive **single-page** static website MVP for SmartLinq Solutions (Hyderabad).  
Files:
- `index.html` — main page
- `styles.css` — styling
- `script.js` — minimal client-side JS to handle the lead form
- `README.md` — this file
- `deploy_instructions.md` — step-by-step deploy & DNS instructions

## Quick local preview
Open `index.html` in a browser or run a simple static server:
```
python -m http.server 8000
# then visit http://localhost:8000
```

## Recommended deployment (Netlify or Vercel)
### Netlify (recommended for static sites)
1. Create a GitHub repository and push the files.
2. Sign up at https://app.netlify.com/ and choose "Add new site" → "Import from Git".
3. Connect your GitHub repo and deploy (defaults work for static sites).
4. In Netlify dashboard, go to "Domain settings" → "Add custom domain" and add `www.smartlinqsolutions.com` (or your apex domain).
5. Netlify will show DNS records (CNAME for `www` or A records for apex). Copy those to your domain registrar DNS settings.
6. Enable HTTPS (Netlify provides free Let's Encrypt certificate).

### Vercel
Similar flow: connect GitHub repo → import project → deploy → add custom domain in Vercel dashboard → update DNS.

## DNS samples (example only — change values to those provider gives)
- For `www` (CNAME): `www CNAME alias.netlify.app`
- For apex domain (`smartlinqsolutions.com`): add A records from provider or use ALIAS/ANAME as documented by Netlify/Vercel.

## Integrations to add after deploy
- **CRM / Forms**: HubSpot forms or direct POST to HubSpot API. Alternatively use Netlify Forms for quick capture and email forwarding.
- **Scheduling**: Calendly embed or HubSpot Meetings.
- **Analytics**: GA4, Google Search Console.
- **Heatmaps**: Microsoft Clarity or Hotjar.

## Next steps I can do for you (choose any)
- Push this to a GitHub repo and connect to Netlify/Vercel (I will provide exact commands).
- Replace the sample form with HubSpot form embed and automation.
- Create a PDF ROI Guide and gated download flow.
- Create LinkedIn ad copy & initial campaign setup checklist.
