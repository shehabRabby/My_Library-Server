# 🖥️ HAVEN | Server Side (Backend)

The **HAVEN Server** powers the backend of the Digital Library Management System. It is built with **Node.js**, **Express**, and **MongoDB**, providing a secure, scalable REST API to manage books, users, and protected dashboard operations.

---

## ⚙️ Tech Stack

* **Node.js** – JavaScript runtime for scalable backend services
* **Express.js** – Lightweight and fast REST API framework
* **MongoDB** – NoSQL database for flexible data modeling
* **Firebase Admin SDK** – Authentication & user verification
* **dotenv** – Environment variable management
* **CORS** – Secure cross-origin requests

---

## 🔐 Authentication & Security

* Firebase Authentication (Google & Email/Password)
* Protected routes using token verification
* Role-ready architecture (User / Admin expandable)
* Environment variables secured with `.env`

---

## ✨ Core Features

* 📚 **Book Management API** (CRUD operations)
* 👤 **User Data Handling** (profile & role support)
* 🔒 **Protected Routes** for dashboard operations
* 📊 **Real-time Data Support** for charts & tables
* ⚡ **RESTful API Structure** following best practices

---

## 📂 API Endpoints (Example)

> Base URL: `http://localhost:5000`

### 📘 Books

* `GET /books` – Get all books
* `GET /books/:id` – Get a single book
* `POST /books` – Add a new book (Protected)
* `PUT /books/:id` – Update a book (Protected)
* `DELETE /books/:id` – Delete a book (Protected)

### 👤 Users

* `POST /users` – Save or update user info
* `GET /users/:email` – Get user by email

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/book-haven.git
cd book-haven/server
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the **server root** and add:

```env
PORT=5000
DB_USER=your_db_user
DB_PASS=your_db_password
```

> If using Firebase Admin SDK, also include your service credentials securely.

---

## ▶️ Run the Server

```bash
# Development mode
npm start
```

The server will run on:

```
http://localhost:5000
```

---

## 🗂️ Server Structure

```plaintext
server/
├── index.js        # Main server entry point
├── routes/         # API route handlers
├── middleware/     # Auth & verification middleware
├── config/         # DB & Firebase configuration
└── .env            # Environment variables
```

---

## 🧪 Testing

* Test APIs using **Postman** or **Thunder Client**
* Ensure protected routes require valid auth tokens

---

## 📌 Notes

* This server is designed to work seamlessly with the **HAVEN Client**
* Role-based features (Admin/User) can be extended easily
* Follow REST conventions for consistency

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/NewFeature`
3. Commit changes: `git commit -m "Add New Feature"`
4. Push to branch: `git push origin feature/NewFeature`
5. Open a Pull Request

---

🚀 *Backend built for performance, security, and scalability.*
