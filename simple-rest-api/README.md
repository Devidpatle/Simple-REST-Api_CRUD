# Simple CRUD API

This repository contains a basic CRUD (Create, Read, Update, Delete) API built using Node.js and Express.js. The API manages a collection of tasks (to-do items) and stores the data in memory, eliminating the need for a database.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Data Storage](#data-storage)
- [Validation](#validation)
- [Error Handling](#error-handling)
- [How to Run Locally](#how-to-run-locally)

## Technologies Used

- **Node.js:** A JavaScript runtime for executing server-side code.
- **Express.js:** A web application framework for Node.js, simplifying the creation of APIs.

## Project Structure

- `app.js`: The main entry point of the application.
- `package.json`: Configuration file for Node.js project.
- ...

## Endpoints

### 1. `GET /tasks`

- **Description:** Retrieve a list of all tasks.
- **Response:** Returns an array of tasks.

### 2. `GET /tasks/:id`

- **Description:** Retrieve a specific task by ID.
- **Parameters:**
  - `id` (Path Parameter): The unique identifier for the task.
- **Response:** Returns the task with the specified ID or a 404 error if not found.

### 3. `POST /tasks`

- **Description:** Create a new task.
- **Request Body:**
  - `title` (string, required): The title of the task.
  - `description` (string, required): The description of the task.
- **Response:** Returns the newly created task or a 400 error if validation fails.

### 4. `PUT /tasks/:id`

- **Description:** Update an existing task by ID.
- **Parameters:**
  - `id` (Path Parameter): The unique identifier for the task to be updated.
- **Request Body:**
  - `title` (string, required): The updated title of the task.
  - `description` (string, required): The updated description of the task.
- **Response:** Returns the updated task or a 404 error if the task is not found.

### 5. `DELETE /tasks/:id`

- **Description:** Delete a task by ID.
- **Parameters:**
  - `id` (Path Parameter): The unique identifier for the task to be deleted.
- **Response:** Returns a success message or a 404 error if the task is not found.

## Data Storage

Tasks are stored in memory using a simple array (`tasks` in `app.js`).

## Validation

Basic validation is implemented to ensure that task properties (`title` and `description`) are required. A 400 error is returned for invalid requests.

## Error Handling

Error handling is implemented to gracefully handle unexpected issues. A global error handling middleware is used to catch unhandled errors and return a 500 error response.

## How to Run Locally

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the server with `npm start`.
4. Test the API using tools like Postman or curl.

