# Portfolio Backend Server (R Mohamed Nishan)

Handles contact form submissions for the portfolio website.

## Setup

1.  **Navigate to Server Directory:**
    ```bash
    cd server
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment:**
    * Rename `.env (Template)` to `.env`.
    * Fill in your SMTP details (`EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS`), the email address to receive messages (`EMAIL_RECEIVER`), and your frontend URL (`FRONTEND_URL`). **Crucially, set `FRONTEND_URL` to your deployed frontend address for production.**

## Running

* **Development:**
    ```bash
    npm run dev
    ```
    (Listens on port specified in `.env` or default 5002)
* **Production:**
    ```bash
    npm start
    ```

## API

* `POST /api/contact`: Accepts form data (`name`, `email`, `message`, `honeypot`). Validates input and sends an email.

## Deployment Notes (Render/Heroku)

* Set `NODE_ENV=production` in your deployment environment variables.
* Set all `.env` variables (like `EMAIL_USER`, `FRONTEND_URL`, etc.) in your hosting provider's dashboard (e.g., Render Environment Variables, Heroku Config Vars).
* Ensure your hosting provider's build command is `npm install` (or `yarn install`).
* Ensure your hosting provider's start command is `npm start` (or `yarn start`).
