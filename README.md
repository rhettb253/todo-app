# Todo Application

This is a simple Todo application built with Vite and React, leveraging the Context API for state management.

## Features

- Add new tasks to your todo list.
- Mark tasks as completed.
- Delete tasks from the list.
- Filter tasks by All, Active, or Completed.
- Clear all completed tasks in one click.

## Technologies

- [Vite](https://vitejs.dev/): A fast build tool that harnesses the power of native ES modules to deliver faster development builds.
- [React](https://reactjs.org/): A popular JavaScript library for building user interfaces.
- [Context API](https://reactjs.org/docs/context.html): React's built-in state management system.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   git clone https://github.com/your-username/todo-app.git

   cd todo-app

2. Install dependencies:

    npm install

3. Run server locally:

    npm run dev

4. View in browser

    open internet browser and go to http://localhost:5173

## Usage

To add a new task, enter a task description and press Enter or click the "Add" button.

To mark a task as completed, click the checkbox next to it.

To delete a task, click the "X" button next to it.

Use the filter buttons to show All, Active, or Completed tasks.

Click the "Clear Completed" button to remove all completed tasks from the list.

## Project Structure

src directory contains the source code for the application.

src/Components holds React components used in the app.

src/Context includes the Context API setup for managing application state.

src/App.jsx is the main application component.