# Project 2: Restaurant Management App

## Description
The Restaurant Management App is a simple application that provides basic functionality for managing restaurant user details. Users can sign up, log in, and access the restaurant dashboard to perform actions like adding, editing, deleting, and saving records.

### How to Use the Application
1. Sign up and log in using the email and password provided during the signup process.
2. Navigate to the Restaurant Dashboard, where you can manage restaurant user details and perform various actions.
3. Logout when done.

### How to Run the Project
1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/sherwinvishesh/Project-Nexus.git
    cd Project-Nexus
    cd Project_2
    ```
2. Install dependencies for the frontend (Angular application).
    ```bash
    npm install
    ```
3. Start the Angular development server.
    ```bash
    ng serve
    ```
   The application will run on http://localhost:4200/.

4. Start the server for the backend (using json-server).
    ```bash
    json-server --watch db.json
    ```
   The server will run on http://localhost:3000/.
