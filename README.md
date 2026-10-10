# SAC LUXE

A responsive luxury-fashion storefront built with Next.js 14 App Router and React 18.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Create an optimized production build with `npm run build`, then serve it with `npm start`.

## Catalog and routes

The centralized catalog lives in [`lib/data.js`](./lib/data.js). It contains 60 distinct products across Women's Clothing, Men's Clothing, Handbags, Shoes, Jewellery, and Accessories, plus 12 New Arrivals and 12 Sale selections. Collections are derived from shared product flags; category listings and the shop do not maintain separate product arrays.

- `/categories` — all collections
- `/categories/women`, `/categories/men`, `/categories/handbags`, `/categories/shoes`, `/categories/jewellery`, `/categories/accessories`
- `/categories/new-arrivals`, `/categories/sale`
- `/shop` — complete catalog, search, category, price, and sort filters
- `/products/[slug]` — product detail and variant selection
- `/cart` and `/wishlist` — browser-persisted bag and saved items

Cart and wishlist state is stored in local browser storage. The checkout and newsletter form are storefront demos and are not connected to payment or email services.

## Image assets

Product photography is sourced from Unsplash and Pexels and saved locally under:

- `public/images/products/` — one distinct 3:4 image per catalog product
- `public/images/categories/` — collection/editorial hero images

The selected image URLs were checked before download. To regenerate the local files, run:

```bash
npm run images
```

The script validates responses and fails explicitly if an image cannot be downloaded. Images are rendered with `object-fit: cover`, descriptive product alt text, and a fallback image. Local image assets are served from `public`, so Next.js remote image-host configuration is not needed.

## Production integrations still required

- Connect the bag to inventory-aware checkout, shipping, tax, and payment providers.
- Replace the sample catalog, prices, and stock levels with the commerce platform's authoritative data.
- Connect newsletter signup and contact links to monitored business services.
- Configure legal, shipping, and returns content before launch.
