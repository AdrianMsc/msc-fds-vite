# ✨ Fuel Design System: Ignite Your Product Experience

## Overview

**Fuel Design System** is a meticulously crafted, modern, and responsive design system engineered to power the company's expanding suite of products. It offers a centralized and intuitive platform to seamlessly track, update, and analyze the status of design components across diverse platforms.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure that the following are installed on your system:

* **Node.js**: Version 18 or higher.
* **npm**: Node Package Manager.

### Installation

1. **Clone the Repository**
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Configure Environment Variables**
   Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Ensure `VITE_API_URL` is set to `/api` to utilize the local Vite proxy or Vercel `vercel.json` rewrites. Update Auth0 credentials as needed.

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be accessible at [http://localhost:5173](http://localhost:5173).

## 🛠 Scripts

- **`npm run dev`**: Starts the Vite development server.
- **`npm run build`**: Builds the production-ready application.
- **`npm run lint`**: Runs ESLint to check for code issues.
- **`npm run tw-build`**: Watches and builds Tailwind CSS for the main app.
- **`npm run tw-build:cdn`**: Watches and builds Tailwind CSS for CDN usage.

## 🔑 Environment Variables

The frontend requires the following variables in `.env`:

- `VITE_API_URL`: The URL of the backend API. **Must be `/api`** to utilize the Vite proxy (dev) and Vercel rewrite (prod) to prevent third-party cookie blocking.
- `VITE_AUTH0_DOMAIN`: Your Auth0 domain.
- `VITE_AUTH0_CLIENT_ID`: Your Auth0 client ID.
- `VITE_AUTH0_AUDIENCE`: Your Auth0 API identifier.

## 🤝 Support and Feedback

If you encounter any issues, please reach out to the development team or open an issue in the repository.
