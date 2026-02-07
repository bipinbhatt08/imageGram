# 📸 ImageGram — Social Media Backend API

## 🚀 Overview
ImageGram is a scalable social media backend API built using Node.js, Express.js, and MongoDB.

The project follows a **layered architecture** separating responsibilities into controllers, services, repositories, middleware, validators, and routing layers to maintain clean, maintainable, and scalable backend code.

It implements real-world backend engineering practices including JWT authentication, rate limiting, compound indexing for uniqueness, atomic database operations, centralized error handling, schema validation, pagination, file upload handling using Multer, and AWS S3 media storage integration.

This project is backend-only and designed to be integrated with any frontend client.

🔗 Repository: https://github.com/bipinbhatt08/imageGram.git  
🌐 Live API: https://imagegram-1-ti4v.onrender.com

---

## 🧰 Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (File Upload Handling)
- AWS S3 (Media Storage)
- Zod Validation
- Password Hashing (`bcrypt`)


---

## 🧱 Architecture
Layered Backend Structure:

- Controllers → Handle HTTP requests & responses
- Services → Business Logic Layer
- Repositories → Database Access Layer
- Middleware → Authentication, Error Handling
- Validators / Schema → Request Validation
- Routing → API Route Definitions
- Utils & Config → Shared Utilities & Configuration

---


## ✨ Features

### 🔐 Authentication
- User Signup
- User Login
- Change Password
- JWT-based Authentication & Authorization

### 👤 User System
- Follow / Unfollow Users

### 📝 Posts
- Create Post
- Read Post
- Update Post
- Delete Post
- Pagination Support

### 💬 Social Interaction
- Comment on Posts
- Like Posts
- Like Comments
- Compound Indexing for Unique Likes

### 🔔 Notifications
- Notification Creation System (Non-realtime)

### 📁 Media Upload
- File Upload Handling using Multer + Multer-S3
- Cloud Media Storage via AWS S3

---

## ⚙️ Backend Engineering Practices
- Global Error Handler
- Async Handler Wrapper
- Centralized API Response Structure
- Zod-based Request Validation
- Rate Limiting Protection
- Atomic Database Operations:
  - Post Deletion
  - Comment Deletion
  - Like Deletion
- Pagination for Performance
- Compound Indexing for Data Integrity(to avoid duplicate likes)

---

## 📈 Upcoming Features

### Phase 2
- Password Reset System
- Real-time Notifications using WebSocket
- Story / My-Day Feature

### Phase 3
- Real-time Chat System

---

## 🔑 Environment Variables
Create a `.env` file in the root directory(I also have env.sample file for reference)

```
DB_URL=""
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_REGION=""
S3_BUCKET_NAME=""
JWT_SECRET=""
```

---

## ▶️ Installation & Setup

### 1. Clone Repository
```
git clone https://github.com/bipinbhatt08/imageGram.git
cd imageGram
```

### 2. Install Dependencies
```
npm install
```

### 3. Setup Environment Variables
Create `.env` file and add required variables.

### 4. Run Development Server
```
npm run dev
```

---
## 📚 API Documentation

You can explore and test all the backend endpoints using this Postman collection:

🌐 [Postman Collection](https://documenter.getpostman.com/view/30097916/2sBXc8pj1e)

---

## 📌 API Design Principles
- RESTful API Architectureƒ
- Layered Backend Design
- Centralized Response Format
- Consistent Error Handling
- Secure JWT Middleware
- Zod-based Request Validation
- Atomic Database Transactions

---

## 👨‍💻 Author
Bipin Bhatt  
Software Developer(MERN)
---

