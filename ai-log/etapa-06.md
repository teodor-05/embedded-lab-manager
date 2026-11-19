# Stage 6: AI log

## Tools
- Gemini

## Conversations
<link_share_conversatie> (Moving data to a mock API and fetching with useEffect)

## Key requests
### 1. Setting up json-server and fetch logic
- Asked: I requested the instructions for Stage 6 to migrate my hardcoded components to a local REST API using json-server.
- Got: The setup for `db.json`, the npm script for `json-server`, and the `api.js` file to handle the fetch request using environment variables. 
- Changed or rejected: Kept as suggested. Verified the route in the browser at `localhost:3001/components`.

### 2. Updating React with useEffect and loading/error states
- Asked: I needed the React code to fetch the data on mount and handle the three states (loading, success, error).
- Got: The updated `App.jsx` using `useEffect` with a cleanup function (`ignore = true`), along with conditional rendering for the loading and error messages. CSS classes were also provided for the error state.
- Changed or rejected: Kept as suggested. Tested both the delay function and the error state (shutting down the API), and both worked perfectly.

## What I learned / what did not work
I learned how to use `useEffect` to execute code only once when a component mounts. I also learned that every data fetch operation has three distinct states that need to be represented in the UI (loading, success, error) to avoid blank screens. I understand that the toggle and delete functions currently only modify the local state and are lost on refresh, which will be fixed in the next stage.