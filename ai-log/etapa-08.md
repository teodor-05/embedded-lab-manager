# Stage 8: AI log

## Tools
- Gemini

## Conversations
https://share.gemini.google/9HM315AiAj5J (Implementing React Router and CSS Modules)

## Key requests
### 1. Setting up React Router and the Layout
- Asked: How to reorganize the app to use multiple pages without reloading, using `react-router-dom`.
- Got: Instructions to create `Layout.jsx`, `ComponentsPage.jsx`, `ComponentDetailPage.jsx`, and update `App.jsx` with a `<Routes>` map.
- Changed or rejected: Kept as suggested. Verified that `NavLink` highlights the active route correctly.

### 2. Implementing the Detail Page
- Asked: How to fetch and display a single component using the ID from the URL.
- Got: Added `fetchComponent(id)` in `api.js` and built `ComponentDetailPage.jsx` using `useParams()`. Included error handling for non-existent IDs.
- Changed or rejected: Kept as suggested. The page correctly displays the `Project Target` and `Type` fields.

### 3. Migrating to CSS Modules
- Asked: How to split the global `index.css` into component-specific styles.
- Got: Created `.module.css` files for each component and page, updating the `className` attributes to use the imported `styles` object.
- Changed or rejected: Kept as suggested. Verified in DevTools that class names are uniquely generated.

## What I learned / what did not work
I learned how React Router enables a Single Page Application (SPA) experience by changing components based on the URL without fetching a new HTML document. I also learned how `useParams` extracts data from the route path to fetch specific data. Finally, I saw how CSS Modules prevent class name collisions by scoping styles locally to each component.