# 📚 Book Haven (Server)

Backend for **Book Haven**, a digital library where users can explore and manage books online.
Book Haven — a modern digital library where readers can explore, add, and manage books effortlessly.
Built with React, Node.js, MongoDB, and Firebase, it offers secure login, real-time updates, and a sleek user experience.

## 🌐 Live Server

🔗 [https://my-library-orpin.vercel.app/]

## 🌐 Live Link

🔗 [https://book-haven2.netlify.app/]

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

## 🚀 Run Locally

Follow these steps to run the project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/your-project.git
cd your-project

2. Install Dependencies Backend:
cd backend
npm install express cors nodemon mongoose dotenv
cd ..
3. Backend with Nodemon:
cd backend
npm run dev
4. Setup Environment Variables:
# Firebase Config
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

# MongoDB
MONGO_URI=your_mongodb_connection_string

