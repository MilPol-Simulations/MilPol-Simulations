# MilPol RAL 6005 Forest Redesign

This is a visual-only update based on the latest Professional Refresh website.

## Upload
Upload the changed HTML files, `milpol-forest.css`, `milpol-forest.js`, and both `assets/forest-*.svg` files. Preserve the `assets/` directory. No Supabase SQL or Edge Function changes are needed.

## Design
The background uses an approximate screen representation of RAL 6005 (moss green), #114232. Real-world RAL colours cannot be reproduced exactly on every display. Two locally hosted SVG forest silhouette layers create the black tree-line effect while scrolling. Orange and olive brand accents are retained.

## Test
After deployment, test desktop and mobile, navigation dropdowns, admin forms, article editor, language selector, and reduced-motion preferences. This package was checked statically, not tested against the live site.
