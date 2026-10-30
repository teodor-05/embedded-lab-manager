# Stage 5: AI log

## Tools
- Gemini

## Conversations
https://share.gemini.google/qev2RY9LEUOX (Implementing local state for components and theme)

## Key requests
### 1. Adding State and Event Handlers
- Asked: I requested the implementation for Etapa 5 to manage the components list and theme using `useState` in App.jsx, and pass handlers as props.
- Got: The updated `App.jsx` with `useState` and functions (`handleToggle`, `handleDelete`, `handleTheme`), updated `ComponentList.jsx` and `ComponentCard.jsx` to consume the props and attach `onChange`/`onClick` handlers. Also received CSS updates for the light/dark mode logic and UI elements.
- Changed or rejected: Kept as suggested. Tested in the browser and confirmed that no React warnings are displayed.

## What I learned / what did not work
I learned how to manage state in the parent component and pass immutable update functions down to children via props. I also understood how to build a controlled checkbox and use a derived value for the header counter so it automatically stays in sync with the state.