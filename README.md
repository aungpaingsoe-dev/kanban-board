
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

## Usage Guide

Create New Tasks

- Go to tasks page
- Click new button
- Enter task details ( eg: title, description, due date, status, and priority )
- Click save 

Edit Task

- Click edit icon 
- Modify task details that you want to change ( eg: title, description, due date, status, and priority )
- Click save 

Delete Task 

- Click delete icon
- Enter ok on show confirmation alert 

Change Task Status 

- Change status in task edit ( To Do, In Progress, Done )
- Can change also task status by Drag and Drop  ( To Do, In Progress, Done )

Overview Dashboard 

- Can see overview tasks like total count, complete tasks, and priority tasks

Toggle Theme Mode 

- Can change dark and light mode by clicking theme button at header 
