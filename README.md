# Embedded Lab Manager
An application for tracking laboratory equipment, used to monitor and allocate components for practical electronic setups.

## Data model
Field        | Type         | Notes
Component    | text         | required, max 100 chars
Allocated    | boolean      | toggled from the list, default false
Type         | fixed values | Sensor, Actuator, Display, Microcontroller
Project      | relation     | Digital Safe, Parking Assistant, Alarm System
User         | relation     | the owner of the item (from week 11)

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
[ ] Stage 2: data logic in JavaScript