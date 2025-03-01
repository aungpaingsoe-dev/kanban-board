
# Project Title

Kanban Board : Task Management System 

A modern task management system built with shadcn/ui, TypeScript, Tailwind CSS, and Zustand. This project includes features like drag-and-drop task organization, a dashboard overview, dark/light mode, and mobile responsive.
## Demo Link

https://kanban.aungpaingsoe.site




## Screenshots

![App Screenshot](https://github.com/aungpaingsoe-dev/kanban-board/blob/main/public/Responsive%20Frame.png?raw=true)


## Features

- Task Management with Drag-and-Drop
- Dashboard Overview
- Dark Mode / Light Mode
- Mobile Responsive


## Tech Stack

**Client:** TypeScrpt, React, TailwindCSS, Zustand





## Folder Structure

```bash
/kanban-board
│── public/           # Static assets
│── src/              # Source code
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components     
│   ├── providers/    # Context providers
│   ├── lib/          # Utility functions
│   ├── styles/       # Global stylesinteractions
│   ├── routes/       # React Routers
│   ├── stores/       # Stage Management
│   ├── types/        # Global types
│   ├── App.tsx       # Main application component
│   ├── main.tsx      # Entry point
│── .gitignore        # Files to ignore in Git
│── package.json      # Project dependencies and scripts
│── README.md         # Project documentation

```

## Run Locally

Clone the project

```bash
  git clone https://github.com/aungpaingsoe-dev/kanban-board.git
```

Go to the project directory

```bash
  cd kanban-board
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

##Usage Guide

1️⃣ Adding a Task
* Click on the "Add Task" button
* Enter the task details (title, description, priority, etc.)
* Click Save
2️⃣ Managing Tasks
* Drag and drop tasks between different columns (To Do, In Progress, Done)
* Click on a task to edit or delete it
3️⃣ Switching Dark/Light Mode
* Toggle the theme switch button in the top-right corner
4️⃣ Mobile View
* The app is **fully responsive