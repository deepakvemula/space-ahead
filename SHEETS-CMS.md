# Google Sheets CMS Integration

This project uses Google Sheets as a CMS for property listings via the OpenSheet API.

## Setup

### Google Sheets Configuration

1. **Spreadsheet ID**: `11Beqmcp0nY7L0PANlJ4iDzrXePPgk5yH03AlEHNFAs8`
2. **Sheet Tab**: `Listings` (update in `src/utils/listings.ts` if different)

### Making the Sheet Public

For OpenSheet to work, your Google Sheet must be publicly accessible:

1. Open your Google Sheet
2. Click **Share** in the top right
3. Click **Change to anyone with the link**
4. Set permission to **Viewer**
5. Click **Done**

### Sheet Structure

The sheet should have the following columns (as defined in your CSV):

- `Listing_ID` - Unique identifier
- `Page_Slug` - URL-friendly slug for the listing page
- `Meta_Title` - SEO title
- `Meta_Description` - SEO description
- `Project_Name` - Property name
- `Property_Type` - Type (Apartment, Villa, etc.)
- `Developer_Name` - Developer company name
- `RERA_Number` - Registration number
- `Total_Area_Acres` - Total project area
- `Total_Units` - Number of units
- `Project_Status` - Status (Under Construction, Ready to Move, etc.)
- `Possession_Date` - Expected possession date
- `Project_Description` - Detailed description
- `Key_Highlights` - Comma-separated highlights
- `Unit_Configurations` - Comma-separated (2 BHK, 3 BHK, etc.)
- `Min_Size_Sqft` - Minimum unit size
- `Max_Size_Sqft` - Maximum unit size
- `Price_Per_Sqft` - Price per square foot
- `Base_Price_Min_Lakhs` - Minimum price in lakhs
- `Base_Price_Max_Lakhs` - Maximum price in lakhs
- `Location_Area` - Neighborhood/area
- `Full_Address` - Complete address
- `Google_Maps_Embed_Link` - Full iframe embed code from Google Maps
- `Gallery_Image_URLs` - Comma-separated image URLs
- `Floorplan_Image_URLs` - Comma-separated floor plan URLs
- `Video_Link` - YouTube video URL

## Features

### 1. Listings Grid Component

- Responsive grid layout (1 column mobile, 2 tablet, 3 desktop)
- Property cards with image, title, location, price, and key details
- Hover effects and smooth transitions

### 2. Individual Listing Pages

- Dynamic routes generated from Google Sheets data
- Comprehensive property details
- Image gallery
- Floor plans
- Video tour
- Google Maps integration
- Contact CTA

### 3. Data Fetching

- Automatic fetching from Google Sheets via OpenSheet API
- Type-safe TypeScript interfaces
- Helper functions for data formatting

## File Structure

```
src/
├── components/
│   ├── ListingCard.astro         # Individual listing card
│   └── ListingsGrid.astro        # Grid layout component
├── pages/
│   ├── index.astro               # Homepage with featured listings
│   └── listings/
│       ├── index.astro           # All listings page
│       └── [slug].astro          # Individual listing detail page
└── utils/
    └── listings.ts               # Data fetching and helper functions
```

## Usage

### Display Listings on Any Page

```astro
---
import { fetchListings } from "../utils/listings";
import ListingsGrid from "../components/ListingsGrid.astro";

const listings = await fetchListings();
---

<ListingsGrid listings={listings} title="Available Properties" />
```

### Get Individual Listing

```astro
---
import { getListingBySlug } from "../utils/listings";

const listing = await getListingBySlug("your-listing-slug");
---
```

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```

## Updating Sheet Configuration

To use a different Google Sheet:

1. Update `SHEET_ID` in `src/utils/listings.ts`
2. Update `SHEET_TAB` if your tab name is different from "Listings"

```typescript
const SHEET_ID = "your-sheet-id-here";
const SHEET_TAB = "YourTabName";
```

## Notes

- The OpenSheet API caches data for 5 minutes
- Images should be hosted on a CDN or public hosting service
- Google Maps embed links should include the full `<iframe>` tag
- For development, you can use placeholder images if actual images aren't ready

## Troubleshooting

### No data showing up?

1. Verify the sheet is public
2. Check the Sheet ID and Tab name are correct
3. Check browser console for API errors
4. Verify the sheet has data and column names match exactly

### Images not loading?

1. Ensure image URLs are publicly accessible
2. Check that URLs are properly formatted in the sheet
3. Verify comma separation for multiple images
