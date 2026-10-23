# Stage 4: AI log

## Tools
- Gemini

## Conversations
(https://share.gemini.google/7WGNOovJFZby) (Refactoring raw list into React components with props)

## Key requests
### 1. Creating ComponentCard and ComponentList
- Asked: I requested the implementation for the components described in Stage 4 of the PDF, applied to my Embedded Lab Manager data.
- Got: The JSX code for `ComponentCard` using conditional CSS classes for allocated items, and `ComponentList` with a `.map()` render using `key={item.id}` and an empty list check.
- Changed or rejected: Kept as suggested. Verified that the browser console shows no React warnings.

## What I learned / what did not work
I learned how to pass data between a parent and child using `props` and why the `key` attribute must be placed directly on the component returned by `map` to help React track elements.