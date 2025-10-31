# Students Management App

A simple React + TypeScript + Vite application to manage students. You can view, search, filter, add, edit, and delete students. The app also includes light/dark theme support and pagination.

---

## Features

- View all students in a card layout
- Search students by name or email
- Filter students by group or age
- Add new students
- Edit existing students
- Delete students
- Light/Dark theme toggle
- Pagination (9 students per page)
- API integration with Mock API or backend

---

## Usage

1. **View Students**: See all students listed in cards.
2. **Search**: Type in the search input to filter students by name or email.
3. **Filter**: Use dropdowns to filter by group or age.
4. **Add Student**: Click **Add Student**, fill the form, and submit.
5. **Edit Student**: Click a student card, modify details in the modal, and save.
6. **Delete Student**: Click a student card, then click **Delete** in the modal.
7. **Theme Toggle**: Click the light/dark mode button to switch themes.
8. **Pagination**: Navigate between pages if there are more than 9 students.

---

## API Integration

The app uses a Mock API or backend for CRUD operations:

- `getStudents()` – Fetch all students  
- `createStudent(student)` – Add a new student  
- `updateStudent(id, student)` – Update an existing student  
- `deleteStudent(id)` – Delete a student  

These functions are located in `src/services/api.ts` and used in `App.tsx`.

---

## ESLint & TypeScript

The project uses TypeScript with strict linting rules. Recommended setup:

```bash
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev


module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // add custom rules here
  },
};


Styling

Tailwind CSS is used for styling

Responsive design for desktop and mobile

Light/dark mode support


Commands 

# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint
