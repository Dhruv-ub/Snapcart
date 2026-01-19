# Snapcart 🛒

**A Full-Stack Real-Time Quick Commerce Platform**

Snapcart is a hyper-local delivery application designed to simulate a real-world quick commerce ecosystem. Built with **Next.js 16** and **TypeScript**, it features a comprehensive three-way marketplace connecting **Customers**, **Admins**, and **Delivery Partners** with real-time geospatial tracking and communication.

---

## 🚀 Key Features

### 🟢 Real-Time Capabilities
* **Live Order Tracking:** utilized **Socket.io** and **Leaflet Maps** to render delivery partner location updates in real-time on the user’s screen.
* **In-App Chat:** Bi-directional communication channel between users and delivery partners using a dedicated WebSocket server.
* **Status Updates:** Instant order status reflection across all client interfaces (Admin Dashboard, User App, Delivery Interface).

### 🛍️ User Experience & Interface
* **Modern UI/UX:** Responsive design built with **Tailwind CSS** and **Framer Motion** for fluid animations.
* **Secure Authentication:** Role-based access control (RBAC) implementation using **NextAuth.js (v5)** supporting Google OAuth and Credentials.
* **Cart Management:** Persistent state management using **Redux Toolkit**.

### 🔧 Backend & Infrastructure
* **Scalable Architecture:** Decoupled architecture separating the Next.js application logic from the dedicated Socket.io microservice.
* **Database:** **MongoDB** with **Mongoose** for schema-based data modeling.
* **Payment Integration:** Secure checkout flow integrated with **Stripe**.
* **Media Management:** Optimized image storage and delivery via **Cloudinary**.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | Next.js 16 (App Router), TypeScript, React 19, Redux Toolkit, Tailwind CSS, Framer Motion |
| **Backend** | Node.js, Express.js, Next.js API Routes, Socket.io |
| **Database** | MongoDB, Mongoose ODM |
| **Maps & Geo** | Leaflet, React-Leaflet, OpenStreetMap API |
| **Services** | Cloudinary (CDN), Stripe (Payments), Nodemailer (Notifications), NextAuth (Auth) |
| **DevOps** | ESLint, TypeScript Strict Mode |

---

## 📂 Repository Structure

The repository is organized into two main services:

* **`Web-app/`**: The main Next.js full-stack application (Frontend + API Routes).
* **`Socker-server/`**: A dedicated Node.js/Express server handling WebSocket connections for low-latency updates.

---

## ⚡ Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
* Node.js (v18+)
* MongoDB (Local or Atlas URL)
* Stripe Account
* Cloudinary Account
* Google Cloud Console (for OAuth)

### 1. Clone the Repository
```bash
git clone [https://github.com/dhruv-ub/snapcart.git](https://github.com/dhruv-ub/snapcart.git)
cd snapcart
```
### 2. Setup The Socket Server
This server handles real-time location and chat events.
cd Socker-server
```
# Install dependencies
npm install

# Create a .env file
# PORT=5000
# NEXT_BASE_URL=http://localhost:3000

# Run the server
node index.js
# OR for development with nodemon
npm run dev
```
### 3. Setup The Main Web Application
Open a new terminal for the main application.
```
cd Web-app

# Install dependencies
npm install

# Setup Environment Variables (create .env file)
# See the 'Environment Variables' section below

# Run the development server
npm run dev
```
The application will be available at http://localhost:3000.
### 4. 🔐 Environment Variables
Create a .env file in the Web-app directory with the following keys:
```
# Database
MONGODB_URL=your_mongodb_connection_string

# Authentication (NextAuth)
AUTH_SECRET=your_nextauth_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Socket Server Connection
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000

# Cloudinary (Image Uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe (Payments)
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
```
# Base URL
NEXT_BASE_URL=http://localhost:3000



   # Developed by Dhruv Kumar Singh
