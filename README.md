# Embedded Lab Manager
O aplicație pentru evidența echipamentelor dintr-un laborator, folosită pentru monitorizarea și alocarea pieselor în montaje practice.

## Data model
Field        | Type         | Notes
Componentă   | text         | required, max 100 chars
Alocată      | boolean      | toggled from the list, default false
Tip          | fixed values | Senzor, Actuator, Afișaj, Microcontroller
Proiect      | relation     | Seif digital, Asistență parcare, Sistem alarmă
Utilizator   | relation     | the owner of the item (from week 11)

Sample data used across all stages:
1. Senzor ultrasonic HC-SR04, active, Senzor
2. Display LCD I2C, done, Afișaj
3. Placă Arduino Uno, active, Microcontroller

## AI usage
Tool | Used for
Gemini | Structurarea fisierului README si generarea codului initial pentru HTML/CSS (Etapa 1).

Details per stage: see the `ai-log/` folder.

## How to run
Open `index.html` in a browser. No build step, no server.

## Status
[x] Stage 1: static mockup
[ ] Stage 2: data logic in JavaScript