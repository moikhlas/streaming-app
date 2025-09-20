# 🎬 Streaming App

A full-stack movie streaming platform built with modern web technologies. This application integrates third-party APIs, secure authentication, mailing services, and payment features to provide a Netflix-like experience where users can browse movies, create profiles, and subscribe to streaming plans.

## 🚀 Features

- __Movie Database Integration__
    -  Used The __Movie Database (TMDB) API__ to fetch and display movie data (titles, descriptions, posters, ratings, and more).

- __Secure User Authentication__

    - Account creation with email verification codes sent through __Google Cloud Mailing Service (via Nodemailer + Google OAuth)__.

    - Passwords are securely hashed with __bcrypt__.

- __Custom Backend API__

    - Built a __RESTful API__ using __Express.js and MongoDB__ for managing users, movies, plans, and payments.

    - __Middleware__ for request validation and error handling.

- __User Profiles & Subscription Plans__

    - Users can:

        - Create personalized profiles.

        - Choose a subscription plan.

        - Make payments and manage billing.

- __Responsive Frontend__

    - Designed with __React__ and __React Router DOM__ for smooth navigation.

    - Fully responsive UI built with __CSS__ for desktop, tablet, and mobile devices.

- __Scalable & Maintainable Codebase__

    - Clear separation of backend services, routes, and controllers.

    - Environment-based configuration with  `.env`.

## 🛠️ Tech Stack

- __Frontend:__

    - React

    - React Router DOM

    - CSS

- __Backend:__

    - Node.js

    - Express.js

    - MongoDB (Mongoose ORM)

- __Utilities & Tools:__

    - Nodemailer + Google APIs (OAuth2 for mailing service)

    - bcrypt (password hashing)

    - dotenv (environment configuration)

    - cors (CORS handling)

## ⚙️ Environment Variables

##### Create a `.env` file in the root of your project and add the following:
      API_TMDB=your_tmdb_api_key
      
      DBK=your_mongodb_connection_string
      
      CLIENT_ID=your_google_client_id
      
      CLIENT_SECRET=your_google_client_secret
      
      REDIRECT_URI=your_google_redirect_uri
      
      REFRESH_TOKEN=your_google_refresh_token  

## ▶️ Getting Started
### 1️⃣ Clone the repository
    git clone https://github.com/your-username/streaming-app.git
    cd streaming-app

### 2️⃣ Install dependencies
__Client side__

    cd client
    npm install

__Server side__
    
    cd server
    npm install

### 3️⃣ Run the project
__Client (React + Vite)__

    npm run dev


__Build for production:__

    npm run build

__Server (Express + MongoDB)__
    
    npm start

## 📦 Example package.json
__Client side__

    {
      "name": "streamming-project",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint .",
        "preview": "vite preview"
      },
      "dependencies": {
        "@fortawesome/fontawesome-svg-core": "^7.0.0",
        "@fortawesome/free-brands-svg-icons": "^7.0.0",
        "@fortawesome/free-solid-svg-icons": "^7.0.0",
        "@fortawesome/react-fontawesome": "^0.2.3",
        "react": "^19.1.1",
        "react-dom": "^19.1.1",
        "react-router-dom": "^7.8.1"
      },
      "devDependencies": {
        "@eslint/js": "^9.33.0",
        "@types/react": "^19.1.10",
        "@types/react-dom": "^19.1.7",
        "@vitejs/plugin-react": "^5.0.0",
        "eslint": "^9.33.0",
        "eslint-plugin-react-hooks": "^5.2.0",
        "eslint-plugin-react-refresh": "^0.4.20",
        "globals": "^16.3.0",
        "vite": "^7.1.2"
      }
    }

__Server side__

    {
      "name": "server",
      "version": "1.0.0",
      "type": "module",
      "main": "index.js",
      "scripts": {
        "start": "nodemon server.js"
      },
      "dependencies": {
        "bcrypt": "^6.0.0",
        "googleapis": "^160.0.0",
        "mongodb": "^6.20.0",
        "mongoose": "^8.18.1",
        "nodemailer": "^7.0.6"
      },
      "devDependencies": {
        "cors": "^2.8.5",
        "dotenv": "^17.2.1",
        "express": "^5.1.0",
        "nodemon": "^3.1.10"
      }
    }

## 📖 Summary

This project demonstrates the integration of third-party APIs, secure backend services, and a modern frontend into one cohesive streaming platform. It serves as a robust portfolio project showcasing React, Node.js, Express, and MongoDB while also covering key aspects of full-stack development such as authentication, API building, and responsive design.

