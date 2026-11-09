# MilPol Modern Motion Refresh

Based on the latest RAL 6005 forest redesign. Keeps the existing colour palette, forest silhouettes, account/CMS/newsletter/announcement scripts, and page content.

## Upload
Upload the 16 updated HTML pages and the two new files `milpol-motion.css` and `milpol-motion.js` to your GitHub Pages root. Do not remove `milpol-forest.css`, `milpol-forest.js`, or the `assets/forest-*.svg` images.

## Animations
- Forward and reverse page-transition curtains for internal page links.
- Back/forward browser history direction is tracked when a page's history state is available.
- Scroll reveals reverse as elements leave the viewport and replay when they re-enter.
- Refined cards, controls, header, and subtle depth effects.
- Respects `prefers-reduced-motion`.

## Notes
This is a progressive enhancement. Links still work without JavaScript. The motion layer does not alter Supabase SQL or Edge Functions. Browser back/forward cache can differ across browsers, so test history navigation, auth redirects, mobile menu, language switching, admin editor, and forms before release. For a true seamless app-style page morph, a larger site architecture change would be required.
