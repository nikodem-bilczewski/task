<h1>React & Typescript Form</h1>

Form build using React, Typescript, React Hook Form and Zod. Expected behavior:

- When "Europe" is selected from the dropdown and the number of characters in the surname input is less than 2 the message "Nie spełnioen kryteria" will show under the dropdown.
- If the required field is not filled in, the error "To pole jest wymagane" will show under the required field.
- If the date of birth will be greater than today's date, "Wyślij" button will become inactive.
- If the user is older than 60 years old, the font-size will increase twice on the whole page.
- When all validations pass after clicking "Wyślij" success alert will display on the screen

In addition, the form logic has been moved to custom hook (useMyForm) and TextFields have been moved to InputField component to keep MyForm component leaner and cleaner.

## Technologies

- React
- TypeScript
- React Hook Form
- Material UI
- Strapi
- Zod
- React Testing Library

![Zrzut ekranu 2023-10-4 o 02 00 33](https://github.com/nikodem-bilczewski/task/assets/112383479/c2b6b2f7-5508-4e4c-96b5-b3ba01835810)
![Zrzut ekranu 2023-10-4 o 01 59 58](https://github.com/nikodem-bilczewski/task/assets/112383479/f8f367a7-90a1-4c88-92b5-6f72a729152a)
![Zrzut ekranu 2023-10-4 o 01 59 34](https://github.com/nikodem-bilczewski/task/assets/112383479/a64a6c6b-c49b-4387-8efb-8399273726db)
![Zrzut ekranu 2023-10-4 o 02 03 07](https://github.com/nikodem-bilczewski/task/assets/112383479/cafc7f2e-675a-4e3a-b2f4-401fa1608a5a)
