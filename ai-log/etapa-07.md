# Stage 7: AI log

## Tools
- Gemini

## Conversations
https://share.gemini.google/wqVIwOTE8k1q (Building a controlled form and moving CRUD operations to the API)

## Key requests
### 1. Setting up the generic request function and tw.json
- Asked: I needed to know how to set up `tw.json` for automated testing and refactor `api.js` for POST, PATCH, and DELETE.
- Got: The structure for `tw.json` adapted to my "components" resource and a generic `request` function that handles headers, JSON stringifying, and the 204 No Content edge case.
- Changed or rejected: Kept as suggested. Placed `tw.json` in the root folder as instructed.

### 2. Creating the Controlled Form
- Asked: How to implement the React form with validation for my specific fields (Name, Type, Project Target).
- Got: The `ComponentForm.jsx` file with state for each field, validation logic (making fields mandatory and checking max length), error handling, and disabling the submit button to prevent double-submissions.
- Changed or rejected: Kept as suggested. Verified that the custom project field validation works correctly.

### 3. Updating App.jsx and data-testid attributes
- Asked: I needed to integrate the form and update the main App logic so changes persist to the server.
- Got: The updated `App.jsx` using `await` for `createComponent`, `updateComponent`, and `deleteComponent`. Also received instructions to add `data-testid` attributes on specific elements for automated testing.
- Changed or rejected: Kept as suggested. Tested all operations and confirmed they survive a page refresh.

## What I learned / what did not work
I learned how to build controlled components in React, where the state acts as the single source of truth for input values. I also learned the importance of updating the UI state only *after* the API request succeeds, ensuring the interface accurately reflects the database. Finally, I understood how to use `data-testid` attributes to make the application testable by automated scripts.