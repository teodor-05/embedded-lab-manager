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
[ ] Stage 3: Vite and React project


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
| S2-R6 | README Stage 2 section + AI log | [README.md](<permalink>), [ai-log/etapa-02.md](https://github.com/teodor-05/embedded-lab-manager/blob/23639f4da4486c64328428e4a8595e4e6bb96481/ai-log/etapa-02.md?plain=1#L1-L16) | read |
| S2-R7 | commit "Stage 2" pushed | [Commit Link](https://github.com/teodor-05/embedded-lab-manager/commit/23639f4da4486c64328428e4a8595e4e6bb96481) | commit history |