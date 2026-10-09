# Stage 2: AI log

## Tools
- Gemini

## Conversations
<link_share_conversatie> (Implementing JavaScript data logic, immutable functions and validation)

## Key requests
### 1. Generating Array Methods and Functions
- Asked: I requested the implementation of the JavaScript logic steps from the PDF guide, customized for my Embedded Lab Manager.
- Got: The `components.js` file with the immutable functions using `map`, `filter`, `find`, and `reduce`, along with the console tests.
- Changed or rejected: Kept as suggested. Verified that the original array is not mutated when adding or changing elements.

## What I learned / what did not work
I understood the concept of immutability and how `[...array, newElement]` is used instead of `.push()` so that React will detect changes correctly in future stages.