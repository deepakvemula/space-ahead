# 🚀 Quick Reference

## Your Setup

**Google Sheet:** https://docs.google.com/spreadsheets/d/11Beqmcp0nY7L0PANlJ4iDzrXePPgk5yH03AlEHNFAs8/edit

**Sheet Tab:** Listings

**Dev Server:** http://localhost:4321/space-ahead

## Pages Created

| Page            | URL                | Purpose                    |
| --------------- | ------------------ | -------------------------- |
| Homepage        | `/`                | Featured properties + blog |
| All Properties  | `/listings`        | Grid of all listings       |
| Property Detail | `/listings/[slug]` | Individual property page   |

## Key Files

```
src/
├── components/
│   ├── ListingCard.astro       # Property card component
│   ├── ListingsGrid.astro      # Grid layout
│   └── PropertyImage.astro     # Image with placeholders
├── pages/
│   ├── index.astro             # Homepage (updated)
│   └── listings/
│       ├── index.astro         # All listings
│       └── [slug].astro        # Dynamic listing pages
└── utils/
    └── listings.ts             # Data fetching & helpers
```

## Commands

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Test Google Sheets connection
node test-sheets.mjs

# Preview production build
pnpm preview
```

## Common Tasks

### Add New Property

1. Add row in Google Sheet
2. Wait ~5 minutes for cache
3. Page auto-generated at `/listings/your-slug`

### Update Property

1. Edit row in Google Sheet
2. Wait ~5 minutes for cache
3. Changes appear automatically

### Change Sheet

Edit `src/utils/listings.ts`:

```typescript
const SHEET_ID = "your-new-sheet-id";
const SHEET_TAB = "YourTabName";
```

## Image Hosting Options

- **Imgur:** Free, easy upload
- **Cloudinary:** Free tier, image optimization
- **Google Drive:** Share link → public
- **Your CDN:** Best for production

## Important Notes

✅ Sheet MUST be public (Viewer access)
✅ Images MUST be full URLs (https://...)
✅ Slug MUST be unique for each listing
✅ Cache ~5 min via OpenSheet API

## Data Format Examples

**Images (comma-separated):**

```
https://example.com/img1.jpg, https://example.com/img2.jpg
```

**Configurations (comma-separated):**

```
2 BHK, 3 BHK, 4 BHK
```

**Google Maps:**

```html
<iframe src="https://www.google.com/maps/embed?pb=..."></iframe>
```

**YouTube:**

```
https://www.youtube.com/watch?v=VIDEO_ID
```

## Troubleshooting

| Issue                 | Solution                        |
| --------------------- | ------------------------------- |
| No listings           | Check sheet is public           |
| 404 errors            | Update image URLs to full paths |
| Map not showing       | Use full iframe code            |
| Video not playing     | Use youtube.com/watch URL       |
| Changes not appearing | Wait 5 min for cache            |

## Documentation

- `SHEETS-CMS.md` - Full technical docs
- `IMPLEMENTATION-SUMMARY.md` - What's built
- `GOOGLE-SHEETS-GUIDE.md` - Data entry guide

---

**Status:** ✅ Fully integrated and working!
