# Stage 1: AI log

## Tools
- Gemini

## Conversations
(https://share.gemini.google/Zu6th9j8EhNK) (Discussing project theme, README structure, HTML layout and CSS styling)

## Key requests
### 1. Generating Mockup Code
- Asked: I provided the project requirements and asked for the HTML structure and CSS styling for the Embedded Lab Manager.
- Got: Semantic HTML structure with CSS Grid and Flexbox, plus CSS variables for dark mode.
- Changed or rejected: Kept as suggested, it successfully implemented S1-R4 through S1-R7 requirements.

### 2. Structuring the Checklist and Permalinks
- Asked: I asked for the exact line numbers to generate the GitHub permalinks for the Stage 1 checklist.
- Got: The specific line ranges for `README.md`, `index.html`, and `style.css` corresponding to each S1-R requirement.
- Changed or rejected: I verified the line numbers directly on my GitHub repository to ensure they exactly match my published formatting before copying the links.

## What I learned / what did not work
I learned how to use CSS variables to easily implement a dark theme without duplicating CSS rules, using the `@media (prefers-color-scheme: dark)` feature.