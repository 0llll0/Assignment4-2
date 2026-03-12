# React Todo List

A simple and clean Todo List app built with React and Vite.  
You can add tasks, assign a status, filter tasks by status, and delete tasks.

## Features

- Add a new task with validation
- Choose task status (`In Progress` / `Completed`)
- Filter tasks by status
- Delete any task from the list
- Responsive UI with Tailwind CSS

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- ESLint 9

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    Todo.jsx
    TodoForm.jsx
    Todolist.jsx
  App.jsx
  main.jsx
  index.css
```

## Notes

- Current UI labels are in Azerbaijani.
- Task data is kept in component state (no backend or persistence yet).

