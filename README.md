# User Management Application (React)

🔗 Live Demo: https://user-management-applications.netlify.app/

A responsive **User Management Application** built using **React** that
demonstrates full CRUD (Create, Read, Update, Delete) functionality with
data fetched from a public API. The project focuses on clean component
design, proper state management, routing, and modern UI practices.

------------------------------------------------------------------------

## 🚀 Features

-   Fetch and display users from a public API
-   Create new users (simulated via API)
-   Update existing user details
-   Delete users
-   Individual user profile page using routing
-   Responsive and modern UI design
-   Error handling for API requests
-   Loading states for better user experience

------------------------------------------------------------------------

## 🛠 Tech Stack

-   React (JavaScript)
-   React Router DOM
-   HTML5
-   CSS3
-   JSONPlaceholder API

------------------------------------------------------------------------

## 📁 Project Structure

    src/
     ├── api/
     │    └── users.js
     ├── components/
     │    ├── UserForm.jsx
     │    ├── UserList.jsx
     │    ├── UserRow.jsx
     │    └── Loader.jsx
     ├── pages/
     │    ├── Home.jsx
     │    └── UserDetail.jsx
     ├── App.jsx
     ├── main.jsx
     └── index.css

------------------------------------------------------------------------

## 🔄 CRUD Functionality

### Fetch Users

Users are fetched from the JSONPlaceholder API and displayed in a
structured table.

### Create User

Users can be added using a form. A POST request is sent to simulate
creation, and the UI is updated using local state.

### Update User

Existing users can be edited with pre-filled data. Updates are simulated
via PUT requests.

### Delete User

Users can be removed using a DELETE request. UI updates instantly using
optimistic state updates.

> **Note:** JSONPlaceholder does not persist data. All write operations
> are simulated.

------------------------------------------------------------------------

## 🧭 Routing

-   `/` → User list and management dashboard\
-   `/user/:id` → Individual user profile page

Routing is implemented using React Router DOM.

------------------------------------------------------------------------

## 🎨 UI & Design

-   Clean, card-based layout
-   Responsive design (desktop & mobile)
-   Structured user profile page
-   Avatar fallback using initials
-   Consistent spacing and typography

------------------------------------------------------------------------

## ▶️ Getting Started

### 1. Clone the repository

``` bash
git clone https://github.com/Vishal-Rauniyar/User-Management.git
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Run the application

``` bash
npm run dev
```

------------------------------------------------------------------------

## 📌 Future Improvements

-   Search and filter functionality
-   Pagination
-   Toast notifications
-   Dark mode
-   Backend integration
-   Authentication and authorization

------------------------------------------------------------------------

## 📄 License

This project is open-source and intended for learning and demonstration
purposes.
