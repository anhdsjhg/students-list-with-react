# Students Management App

A simple **React + TypeScript + Vite** application to manage students.  
You can view, search, filter, add, edit, and delete students.  
The app also includes light/dark theme support and pagination.

---

## Features

- View all students in a **card layout**
- Search students by **name or email**
- Filter students by **group or age**
- Add new students
- Edit existing students
- Delete students
- **Light/Dark theme toggle**
- Pagination (**9 students per page**)
- **API integration** with Mock API or backend

---

## Screenshots

_Main screen with students list:_  
![Students List](/public/screenshots/student-list.png)

_Add student modal:_  
![Add Student](students-list/public/screenshots/add-new-student.png)

_Search and filters:_  
![Search](/public/screenshots/search-student.png)
![Filter](/public/screenshots/filters-byGroup-Ages.png)

_Detail students:_  
![Students List](/public/screenshots/details-student-editAndDelete.png)

_Edit student modal:_  
![Edit Student](/public/screenshots/edit-student.png)

_Light mode:_  
![Light mode](/public/screenshots/light-mode.png)


## Technologies Used

- **React**  
- **TypeScript**  
- **Vite**  
- **Tailwind CSS**  
- **ESLint** (with `@typescript-eslint`)  

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/students-list-with-react.git
cd students-list-with-react

Install dependencies:

npm install


Running the Project

Start the development server:
npm run dev

Build for production:
npm run build


API Integration

The app uses a Mock API or backend for CRUD operations:

getStudents() – Fetch all students

createStudent(student) – Add a new student

updateStudent(id, student) – Update an existing student

deleteStudent(id) – Delete a student

These functions are located in src/services/api.ts and used in App.tsx.


Deployment

The project can be deployed using GitHub Pages:

npm run build
npm run deploy
