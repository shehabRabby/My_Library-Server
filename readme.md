# 📚 Book Haven (Server)

Backend for **Book Haven**, a digital library where users can explore and manage books online.
Book Haven — a modern digital library where readers can explore, add, and manage books effortlessly.
Built with React, Node.js, MongoDB, and Firebase, it offers secure login, real-time updates, and a sleek user experience.

## 🌐 Live Server

🔗 [https://my-library-orpin.vercel.app/]

## ⚙️ Tech Stack

- Node.js & Express.js
- MongoDB Atlas
- Firebase Auth
- Vercel (deployment)

## 🚀 Features

- RESTful APIs for all book operations
- Protected routes with Firebase token
- CRUD (Add, Read, Update, Delete) support
- Filter & sort by rating
- Optimized database queries

## 📦 API Routes

| Method | Endpoint      | Purpose        |
| ------ | ------------- | -------------- |
| GET    | /books        | Get all books  |
| POST   | /books        | Add a new book |
| PUT    | /books/:id    | Update book    |
| DELETE | /books/:id    | Delete book    |
| GET    | /latest-books | Latest 6 books |
