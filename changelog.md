# Space Ahead Changelog

## v0.9.0

### Known Issues

- Pending fresh Tailwind CSS integration, especially for certain components - Pagination, ArrowLeft & ArrowRight icons, Subscribe form.
- Refactored SpaceMessages component, but not yet used in the project. I'll attempt a new implementation in the future for this. Also this is the only component that requires Preact dependency.

### New Features

- Added a new site config file to manage most of the site configuration and meta from one place.
- New Button & Icon Button components.
- New Formatted Date component.
- New Site Identity component.
- New Pagination component, along with ArrowLeft & ArrowRight icons.
- New Subscribe component, with a form and a button.
- New PostListPreview component for a simple text-only blog post preview.
- New PostCardPreview component for a blog post preview with an image.
- New 404 page. [No UI changes yet]
- New utility functions helper file for formatting dates, getting the current year, fetching tags, posts by tag, etc.

### Updates

- Switch from yarn to pnpm.
- Update all dependencies to the latest versions.
- Added swup.js for page transitions, with customization for two themes: fade and overlay.
- Updated the MainLayout with a max width with auto margins, switched from section to main tag for compatibility with swup.js.
- Switch to Astro's updated content collection API. Redefined the blogs collection.
- Moving all images to the `src/assets` folder and using the `Image` component to load them.
- Moved all posts to the `src/content/blogs` folder and using the `getCollection` function to load them.
- Updated the Footer layout, with separate nav links, social links and copyright text.
- Updated the Nav component to use site configuration, and improved UI.
- Updated the About page to use site configuration, removed Hobbies section to keep it simple.
- Updated the Blog page, and individual blog post pages to use the new content collection API, and naming conventions as per Astro v5.
- Updated the Home page to use site configuration, new content collection API, and general improved UI.
- Updated the Tags page and individual tag pages to use the new content collection API, and naming conventions as per Astro v5.
- Updates to global styles in `global.css`; swup related styles in `animate.css`.
- Switch to astro's strict tsconfig

### Improvements from Upgrading to Astro v5

- Use Astro v5's image component, which is more efficient and faster than the previous image component.
  - Since we are using pnpm, sharp is added as a dependency manually as per Astro's documentation.
- Use Astro v5's content collections, which is more efficient and faster than the previous content collections.
