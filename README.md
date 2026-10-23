# Embedded Lab Manager
An application for tracking laboratory equipment, used to monitor and allocate components for practical electronic setups.

## Data model
| Field | Type | Notes |
|---|---|---|
| Component | text | required, max 100 chars |
| Allocated | boolean | toggled from the list, default false |
| Type | fixed values | Sensor, Actuator, Display, Microcontroller |
| Project | relation | Digital Safe, Parking Assistant, Alarm System |
| User | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Ultrasonic Sensor HC-SR04, active, Sensor
2. I2C LCD Display, done, Display
3. Arduino Uno Board, active, Microcontroller

## AI usage
Tool   | Used for
Gemini | Structuring the README file and generating the initial HTML/CSS code (Stage 1).

Details per stage: see the `ai-log/` folder.

## How to run
Open `index.html` in a browser. No build step, no server.

## Status
[x] Stage 1: static mockup
[x] Stage 2: data logic in JavaScript
[x] Stage 3: Vite and React project
[x] Stage 4: components rendered from data


## Stage 2: data logic
Plain JavaScript, no DOM. `components.js` holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 1 Checklist
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S1-R1 | README: description, fields, sample data, how to run | [README.md] (https://github.com/teodor-05/embedded-lab-manager/blob/d117001c78c303eaa698b416ffd45bbd3247eacf/README.md?plain=1#L1-L24) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/teodor-05/embedded-lab-manager/blob/068c4469025540b8b7de68b921fee3dd3d13398d/README.md?plain=1#L17-L21) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/teodor-05/embedded-lab-manager/blob/068c4469025540b8b7de68b921fee3dd3d13398d/ai-log/etapa-01.md?plain=1#L1-L16) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html](https://github.com/teodor-05/embedded-lab-manager/blob/068c4469025540b8b7de68b921fee3dd3d13398d/index.html#L1-L71) | open the page |
| S1-R5 | finished card looks different | [style.css](https://github.com/teodor-05/embedded-lab-manager/blob/068c4469025540b8b7de68b921fee3dd3d13398d/style.css#L144-L152) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css](https://github.com/teodor-05/embedded-lab-manager/blob/068c4469025540b8b7de68b921fee3dd3d13398d/style.css#L149-L152) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css](https://github.com/teodor-05/embedded-lab-manager/blob/068c4469025540b8b7de68b921fee3dd3d13398d/style.css#L137-L142) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit Link](https://github.com/teodor-05/embedded-lab-manager/commit/068c4469025540b8b7de68b921fee3dd3d13398d) | commit history |



## Stage 2 Checklist
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S2-R1 | JS file linked, logs on page load | [index.html](https://github.com/teodor-05/embedded-lab-manager/blob/23639f4da4486c64328428e4a8595e4e6bb96481/index.html#L75) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [components.js](https://github.com/teodor-05/embedded-lab-manager/blob/23639f4da4486c64328428e4a8595e4e6bb96481/components.js#L2-L8) | read |
| S2-R3 | list, count, search, add, toggle, delete | [components.js](https://github.com/teodor-05/embedded-lab-manager/blob/23639f4da4486c64328428e4a8595e4e6bb96481/components.js#L11-L65) | console output |
| S2-R4 | add rejects empty name and invalid tag | [components.js](https://github.com/teodor-05/embedded-lab-manager/blob/23639f4da4486c64328428e4a8595e4e6bb96481/components.js#L31-L44) | last 2 console lines |
| S2-R5 | original array unchanged after add | [components.js](https://github.com/teodor-05/embedded-lab-manager/blob/23639f4da4486c64328428e4a8595e4e6bb96481/components.js#L74-L76) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md](https://github.com/teodor-05/embedded-lab-manager/blob/b894194b66dd4cf3f3d4df2b8b70847f72e39114/README.md?plain=1#L33-L34), [ai-log/etapa-02.md](https://github.com/teodor-05/embedded-lab-manager/blob/23639f4da4486c64328428e4a8595e4e6bb96481/ai-log/etapa-02.md?plain=1#L1-L16) | read |
| S2-R7 | commit "Stage 2" pushed | [Commit Link](https://github.com/teodor-05/embedded-lab-manager/commit/23639f4da4486c64328428e4a8595e4e6bb96481) | commit history |


## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Stage 3 Checklist
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S3-R1 | npm run dev starts without errors | [frontend/package.json](https://github.com/teodor-05/embedded-lab-manager/blob/0c59d507639e26aec3a5d4b79221cf589153e921/frontend/package.json#L6-L11) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx](https://github.com/teodor-05/embedded-lab-manager/blob/0c59d507639e26aec3a5d4b79221cf589153e921/frontend/src/App.jsx#L8-L18) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx](https://github.com/teodor-05/embedded-lab-manager/blob/0c59d507639e26aec3a5d4b79221cf589153e921/frontend/src/App.jsx#L1-L5) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](https://github.com/teodor-05/embedded-lab-manager/blob/0c59d507639e26aec3a5d4b79221cf589153e921/frontend/src/App.css#L1-L28) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](https://github.com/teodor-05/embedded-lab-manager/blob/0c59d507639e26aec3a5d4b79221cf589153e921/frontend/.gitignore#L1-L14) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md](<https://github.com/teodor-05/embedded-lab-manager/blob/0c59d507639e26aec3a5d4b79221cf589153e921/README.md?plain=1#L62-L70), [ai-log/etapa-03.md](https://github.com/teodor-05/embedded-lab-manager/blob/830a3c296bd031f723225fa4e41a694bea8be3f7/ai-log/etapa-03.md?plain=1#L1-L16) | read |
| S3-R7 | commit "Stage 3" pushed | [Commit Link](https://github.com/teodor-05/embedded-lab-manager/commit/0c59d507639e26aec3a5d4b79221cf589153e921) | commit history |


## Stage 4: components
The list is rendered from the data, through two components:
`ComponentList` receives the whole array and renders one card per item.
`ComponentCard` receives a single item through props and displays it.