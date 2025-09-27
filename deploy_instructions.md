# Deploy & DNS — Step-by-step (detailed)

## 1) Create a GitHub repo and push
```
git init
git add .
git commit -m "SmartLinq MVP site"
# create repo on GitHub (use UI) then:
git remote add origin git@github.com:YOURUSERNAME/smartlinq-mvp.git
git branch -M main
git push -u origin main
```

## 2) Netlify
1. Login to Netlify and "Add new site" -> "Import from Git".
2. Select your repo, branch `main`, and click deploy.
3. Once deployed, go to **Site settings -> Domain management -> Add custom domain** and enter `www.smartlinqsolutions.com`.
4. Netlify will provide DNS instructions. In your domain registrar, add the recommended CNAME (for `www`) and any A records for root (apex) as instructed.
5. Wait for DNS to propagate (can take up to 24 hours, usually much faster).
6. Enable "Force HTTPS" in Netlify settings.

## 3) Vercel (alternate)
1. Login to Vercel and import GitHub project.
2. Deploy and add custom domain in Vercel dashboard.
3. Update domain DNS as Vercel specifies.

## 4) Quick test checklist
- Visit `https://www.smartlinqsolutions.com` (or your chosen domain) and confirm it loads with HTTPS.
- Submit the contact form — confirm you see the alert. Replace with your CRM integration next.
- Add GA4 & Search Console and verify site ownership.
