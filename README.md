# 🚀 MeterFlow Backend

MeterFlow is a usage-based API billing and metering platform built with Node.js, Express, and MongoDB.

This backend handles:

- Authentication & Authorization
- API Management
- API Key Generation & Revocation
- API Gateway
- Usage Tracking
- Billing System
- Rate Limiting
- Request Logging

---

# 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Express Rate Limit

---

# 📦 Features

## 🔐 Authentication
- User Signup
- User Login
- JWT Authentication
- Role-based access

---

## 🔑 API Key Management
- Generate API Keys
- Revoke API Keys
- Store API metadata

---

## 🌐 API Gateway
- Validate API Keys
- Forward API Requests
- Log API Usage

---

## 📊 Usage Tracking
Tracks:

- API Key
- Endpoint
- Method
- Status Code
- Timestamp

---

## 💰 Billing Engine
- Count API Requests
- Calculate Billing
- Store Billing Records

---

## 🚦 Rate Limiting
- Limits requests per API key
- Prevents API abuse

---

# 📁 Project Structure

```bash
backend/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── index.js
└── package.json
