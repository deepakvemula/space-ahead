# 📝 Google Sheets Data Entry Guide

## Quick Start

Your Google Sheet: [Open Sheet](https://docs.google.com/spreadsheets/d/11Beqmcp0nY7L0PANlJ4iDzrXePPgk5yH03AlEHNFAs8/edit)

## 🔧 Making Your Sheet Public (REQUIRED)

**Without this step, the OpenSheet API cannot read your data!**

1. Open your Google Sheet
2. Click **Share** button (top right)
3. Click **Change to anyone with the link**
4. Select **Viewer** permission
5. Click **Done**

## 📋 Column Guidelines

### Required Fields

| Column           | Example                 | Notes                   |
| ---------------- | ----------------------- | ----------------------- |
| `Listing_ID`     | ALP016                  | Unique identifier       |
| `Page_Slug`      | sumadhura-gardens-brook | URL-friendly, no spaces |
| `Project_Name`   | Sumadhura Gardens       | Property name           |
| `Location_Area`  | Shamshabad / Kokapet    | Neighborhood            |
| `Project_Status` | Under Construction      | Or "Ready to Move"      |

### Image URLs (IMPORTANT!)

❌ **Won't Work:**

```
img1.jpg
photo.png
images/gallery/1.jpg
```

✅ **Will Work:**

```
https://i.imgur.com/abc123.jpg
https://your-cdn.com/images/property1.jpg
https://storage.googleapis.com/your-bucket/img1.jpg
```

**Where to Host Images:**

- [Imgur](https://imgur.com/) - Free, easy
- [Cloudinary](https://cloudinary.com/) - Free tier available
- [Cloudflare Images](https://www.cloudflare.com/products/cloudflare-images/) - Paid
- Google Drive (make public) - Free
- Your own hosting/CDN

**Multiple Images (comma-separated):**

```
https://example.com/img1.jpg, https://example.com/img2.jpg, https://example.com/img3.jpg
```

### Google Maps Embed

1. Go to [Google Maps](https://maps.google.com)
2. Search for the location
3. Click **Share** button
4. Select **Embed a map** tab
5. Copy the ENTIRE `<iframe>` code
6. Paste into `Google_Maps_Embed_Link` column

Example:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
></iframe>
```

### YouTube Video Link

Use the standard YouTube URL:

```
https://www.youtube.com/watch?v=WDdZ1XSYsgU
```

### Comma-Separated Fields

For these columns, separate multiple values with commas:

**Key_Highlights:**

```
72% Open Space, G+44 Floors, Swimming Pool, Gym
```

**Unit_Configurations:**

```
2 BHK, 2.5 BHK, 3 BHK
```

**Gallery_Image_URLs:**

```
https://example.com/img1.jpg, https://example.com/img2.jpg, https://example.com/img3.jpg
```

**Floorplan_Image_URLs:**

```
https://example.com/plan-2bhk.jpg, https://example.com/plan-3bhk.jpg
```

## 📊 Complete Example Row

| Column                 | Value                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| Listing_ID             | ALP016                                                                                              |
| Page_Slug              | sumadhura-gardens-brook                                                                             |
| Meta_Title             | Sumadhura Gardens: 2/3 BHK Flats in Shamshabad                                                      |
| Meta_Description       | View amenities, floor plans, and price for Sumadhura Gardens by The Brook in Shamshabad, Hyderabad. |
| Project_Name           | Sumadhura Gardens By The Brook                                                                      |
| Property_Type          | Apartment                                                                                           |
| Developer_Name         | Sumadhura Infracon Pvt Ltd                                                                          |
| RERA_Number            | P02400006812                                                                                        |
| Total_Area_Acres       | 9.32                                                                                                |
| Total_Units            | 908                                                                                                 |
| Project_Status         | Under Construction                                                                                  |
| Possession_Date        | Sep, 2025                                                                                           |
| Project_Description    | Modern residential project with world-class amenities...                                            |
| Key_Highlights         | 72% Open Space, G+44 Floors, Swimming Pool, Clubhouse                                               |
| Unit_Configurations    | 2 BHK, 2.5 BHK, 3 BHK                                                                               |
| Min_Size_Sqft          | 1285                                                                                                |
| Max_Size_Sqft          | 1680                                                                                                |
| Price_Per_Sqft         | 6850                                                                                                |
| Base_Price_Min_Lakhs   | 88                                                                                                  |
| Base_Price_Max_Lakhs   | 120                                                                                                 |
| Location_Area          | Shamshabad / Kokapet                                                                                |
| Full_Address           | 228 Of Gaganpahad Village, Shamshabad                                                               |
| Google_Maps_Embed_Link | `<iframe src="https://www.google.com/maps/embed?pb=..."...></iframe>`                               |
| Gallery_Image_URLs     | https://i.imgur.com/abc1.jpg, https://i.imgur.com/abc2.jpg                                          |
| Floorplan_Image_URLs   | https://i.imgur.com/plan1.jpg, https://i.imgur.com/plan2.jpg                                        |
| Video_Link             | https://www.youtube.com/watch?v=WDdZ1XSYsgU                                                         |

## 🎯 Tips for Best Results

### For SEO

- Make `Meta_Title` descriptive and under 60 characters
- Write `Meta_Description` between 150-160 characters
- Include location and property type

### For URLs

- `Page_Slug` should be lowercase
- Use hyphens instead of spaces: `my-property-name`
- Keep it short but descriptive

### For Images

- Use landscape orientation for gallery images (16:9 ratio ideal)
- Optimize images before uploading (under 500KB each)
- Use descriptive filenames
- Ensure images are publicly accessible

### For Prices

- Use numbers only (no ₹ symbol or "L")
- Example: `88` not `88L` or `₹88 Lakhs`

### For Dates

- Use consistent format: `Sep, 2025` or `Q3 2025`

## 🔄 How Updates Work

1. Edit your Google Sheet
2. Save changes (Ctrl+S or automatic save)
3. Wait ~5 minutes (OpenSheet cache)
4. Refresh your website

**Note:** OpenSheet caches data for approximately 5 minutes. Changes won't appear immediately.

## ✅ Testing Your Data

Run this command to test the connection:

```bash
node test-sheets.mjs
```

It will show:

- Connection status
- Number of listings found
- First listing preview
- All column names

## 🐛 Common Issues

### "No listings showing"

- ✓ Check sheet is public
- ✓ Verify sheet ID in `src/utils/listings.ts`
- ✓ Confirm tab name is "Listings"
- ✓ Wait 5 minutes for cache

### "Images not loading"

- ✓ Ensure URLs start with `http://` or `https://`
- ✓ Test image URL in browser directly
- ✓ Check images are publicly accessible
- ✓ No spaces in URLs

### "Map not showing"

- ✓ Use full `<iframe>` code from Google Maps
- ✓ Don't modify the embed code
- ✓ Include quotes around the value in the sheet

## 📞 Need Help?

Check these files:

- `SHEETS-CMS.md` - Technical documentation
- `IMPLEMENTATION-SUMMARY.md` - What's been built
- `test-sheets.mjs` - Test script

---

**Remember:** Keep your Google Sheet public and use full URLs for all images! 🚀
