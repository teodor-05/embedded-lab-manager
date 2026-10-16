Stage 3: AI log

## Tools
- Gemini

## Conversations
https://share.gemini.google/EWCCpGGVyaZE (Initializing Vite and React project, migrating styles and data to App.jsx)

## Key requests
### 1. Setting up Vite and App Component
- Asked: I requested the steps and code to migrate the Embedded Lab Manager into a React project using Vite according to the Stage 3 guide.
- Got: Terminal commands for moving mockup files, scaffolding Vite, cleaning up boilerplate files, and the JSX implementation for `App.jsx` with dynamic counter calculation and raw JSON output.
- Changed or rejected: Kept as suggested. Verified that `npm run dev` and `npm run build` execute without errors.

## What I learned / what did not work
I learned the difference between HTML and JSX (such as using `className` instead of `class` and curly braces `{}` for JavaScript expressions) and why static initial data should be placed outside the `App` component function so it is not recreated on every render.