# Portfolio Frontend (R Mohamed Nishan)

This is the React frontend for R Mohamed Nishan's portfolio website, built with Vite, TailwindCSS, and Framer Motion.

## Features

* React component structure
* Styling with TailwindCSS (utility-first)
* Dark mode support (toggle + localStorage persistence) via Context API
* Animations using Framer Motion (page transitions, scroll animations, hover effects)
* Responsive design
* Pages: Home, About, Skills, Experience, Projects, Education, Contact
* Contact form integration with the backend API
* Loading screen

## Prerequisites

* Node.js (v18 or later recommended)
* npm or yarn
* A running instance of the backend server (`/server`) for the contact form to work.

## Setup

1.  **Navigate to Client Directory:**
    ```bash
    cd client
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Configure Environment:**
    * Rename `.env.development (Template)` to `.env.development`.
    * Update `VITE_API_BASE_URL` if your backend server is running on a different port than the default (5002).
    * Create a `.env.production` file for deployment, setting `VITE_API_BASE_URL` to your *deployed* backend API URL.

4.  **Add Assets:**
    * Place your profile photo (e.g., `profile.jpg`) inside the `/client/src/assets/` folder. Update the `src` attribute in `/client/src/components/About.jsx` accordingly.
    * Place your hero background image (e.g., `hero-bg.jpg`) inside the `/client/public/` folder (or host it online). Update the `background-image` URL in `/client/src/index.css` (`#home` style).
    * Create a `/client/public/images/` folder and add placeholder or actual images for projects (e.g., `project-lms.png`, `project-aws.png`, `project-agriconnect.png`). Update paths in `/client/src/data/portfolioData.js`.

## Running the Frontend

* **Development Mode:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will start the Vite development server, usually at `http://localhost:5173`.

* **Building for Production:**
    ```bash
    npm run build
    # or
    yarn build
    ```
    This creates an optimized production build in the `/client/dist` folder.

* **Previewing the Production Build Locally:**
    ```bash
    npm run preview
    # or
    yarn preview
    ```

## Linting and Formatting

* **Lint:** `npm run lint` or `yarn lint`
* **Format:** `npm run format` or `yarn format`

## Deployment (Vercel Example)

1.  Push your code (including the `client` directory) to a Git repository (GitHub, GitLab, Bitbucket).
2.  Connect your repository to Vercel.
3.  Configure the Vercel project settings:
    * **Build Command:** `npm run build` (or `yarn build`)
    * **Output Directory:** `client/dist`
    * **Install Command:** `npm install` (or `yarn install`)
    * **Root Directory:** `client` (Important!)
    * **Environment Variables:** Add `VITE_API_BASE_URL` and set its value to your *deployed backend URL*.
4.  Deploy!