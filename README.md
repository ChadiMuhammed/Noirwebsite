# Noir Boutique — customer storefront prototype

An English, static customer-facing website. Open index.html directly, or upload this folder to a static host. There is no Node dependency, build step, backend, POS connection, or real transaction.

Included: homepage, collection/search/category/availability/sort filters, sale, product detail/quick view, boutique availability and branch pages, wishlist, bag, sign-in/registration/recovery previews, profile and addresses, shipping/pickup checkout, simulated Paymob payment, order confirmation/history/details/cancellation, and customer information pages.

The three supplied photographs are included locally in assets/. Product descriptions, prices and inventory are fictional. Branch names and the Zayed address came from a read-only query of the POS database. Missing branch addresses and hours have not been invented. This website has no administration screen or color/size selectors.

## Preview

Double-click index.html. All navigation uses hash URLs, so pages also work on GitHub Pages without rewrite rules. Some browsers isolate storage for file URLs; preview on a static host for consistent persistence.

Only localStorage stores the fictional customer, bag, wishlist and order data. Use made-up details. Passwords are neither stored nor validated. Demo payment only changes local state. Stock holds also exist only in this browser; different devices cannot share inventory. Reloading retains data when browser storage is available. Clear this site's storage to reset the demo.

## GitHub Pages

To publish this folder as a separate repository:
1. Put the contents of website/ at the repository root (index.html alongside app.js, seed.js, styles.css and assets/).
2. Commit and push.
3. Under Settings → Pages, choose Deploy from a branch, then main and / (root).
4. Open the resulting Pages URL.

If preserving this directory inside a larger repository, use a Pages workflow that deploys website/ as the static artifact. Do not publish the POS database, backups, logs, accounts, or secrets.

## Before going live

Real customer authentication, shared inventory reservations, Paymob webhooks, and Cloudflare Turnstile server-side token verification require a backend. Cloudflare DNS/proxy/WAF protection is configured separately. This prototype does not implement those services or send email/messages. Shipping/return content is illustrative.

Google Fonts is optional; local fallback fonts remain usable offline. All three product photos are local. The Google Maps directions link opens an external page only when clicked.

## Local validation

The optional scripts in tests/ use the Playwright installation already present in the adjacent POS project. They are not runtime dependencies or included customer pages.
