### User Management App

This is a User Management application built using React and Material-UI. The application allows users to view a list of users, search, sort by name, and view detailed information about individual users. It also includes a light/dark mode toggle feature.

**Deployed Link** - https://grand-mermaid-187941.netlify.app/

## Features

- User Listing: Displays a list of users fetched from an external API.
- Search: Users can search for other users by name.
- Sorting: Sort the user list alphabetically in ascending or descending order.
- User Details: Clicking on a user displays their detailed information on a separate page.
- Light/Dark Mode Toggle: The app supports light and dark themes, which can be toggled by the user.

## Technologies Used

- React: JavaScript library for building the user interface.
- Material-UI: React UI library used to style components.
- React Router: For navigating between different pages (home and user details).
- Context API: Used for managing the global state of the users and dark/light mode.
- External API: Fetches user data from https://jsonplaceholder.typicode.com/users.

## Setup and Installation

**Prerequisites**

- Make sure you have Node.js installed. You can download it from here.

**Steps**

1. Clone the repository: https://github.com/ktiya23/User_Management_App 
    cd user-management-app
2. Install dependencies: Run the following command to install the required dependencies:
    npm install
3. Run the application: Start the development server:
    npm start
This will open the app in your default browser at http://localhost:3000.

## Project Structure

/user-management-app
├── /public
│   └── index.html      # HTML template
├── /src
│   ├── /components     # Reusable UI components (e.g., NavBar, UserCard)
│   ├── /context        # Context for managing state (e.g., UserContext)
│   ├── /pages          # Page components (e.g., HomePage, UserDetailPage)
│   ├── App.js          # Main React component that initializes the app
│   ├── index.js        # Entry point for the app
│   └── theme.js        # Custom MUI theme configuration
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies and scripts
└── README.md           # This file
