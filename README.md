# Movie Reservation System - Frontend

This project is the backend of a movie reservation system developed as the final project for the Coding Factory Program of Athens University of Economics and Business.
It provides a user-friendly web interface for browsing movies, viewing screenings, making seat reservations, and managing user authentication.

# Features
- Public movie listing
- Movie filtering and sorting
- View screenings per movie
- Seat reservation
- User authentication (login / register)
- Role-based UI (admin / user)
- Protected routes

# Authentication & Authorization
Authentication is handled using **JWT tokens**: Tokens are stored in localStorage, Protected routes restrict access to authenticated users, Admin-only features are displayed based on user role.

# Technology Stack
React, Vite, Typescript, Axios, Tailwind CSS, React Router

# Testing
Application behavior was manually tested through **UI interactions**. API communication was validated using **Postman** during backend testing. Path: postman/MovieReservationApp.postman_collection.json

# Build and Run instructions
The frontend application runs on http://localhost:5173. The frontend is deployed locally for development purposes and communicates with the backend via REST APIs.
bash
npm install
npm run dev

# Backend Repository
https://github.com/AthanasiaPet/movie-reservation

