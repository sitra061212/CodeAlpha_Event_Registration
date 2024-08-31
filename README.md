# Event Registration System

This is a Node.js-based event registration system with JWT-based authentication and MongoDB as the database. The application allows users to register, log in, create events, register for events, and view their registered events.


## Features
- User registration and authentication using JWT
- Event creation and management
- User registration for events
- Viewing registered events
- Secure routes with middleware authentication

## Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/sitra061212/CodeAlpha_Event_Registration.git
   cd event-registration
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up your environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGO_URI=mongodb://localhost/eventregistration
     JWT_SECRET=your_jwt_secret
     ```

## Project Structure
```
event-registration/
├── config/
│   └── db.js
├── models/
│   ├── Event.js
│   └── User.js
├── routes/
│   ├── auth.js
│   ├── events.js
│   └── registration.js
├── middleware/
│   └── auth.js
├── .gitignore
├── package.json
├── app.js
└── README.md
```

## API Routes

- **Authentication Routes (`routes/auth.js`)**:
  - **POST /api/auth/register**: Register a new user.
  - **POST /api/auth/login**: Login a user.

- **Event Routes (`routes/events.js`)**:
  - **POST /api/events/**: Create a new event.
  - **GET /api/events/**: Get all events.
  - **GET /api/events/:id**: Get an event by ID.

- **Registration Routes (`routes/registration.js`)**:
  - **POST /api/registration/:id/register**: Register for an event.
  - **POST /api/registration/:id/unregister**: Unregister from an event.
  - **GET /api/registration/my-events**: View registered events.

## Running the Server

Start the server with the following command:

```
npm run dev
```

The server will run on `http://localhost:5000`.

## Testing the API

Use tools like Postman to test the API endpoints:

1. **Register a user**: `POST http://localhost:5000/api/auth/register`
2. **Login a user**: `POST http://localhost:5000/api/auth/login`
3. **Create an event**: `POST http://localhost:5000/api/events/`
4. **Register for an event**: `POST http://localhost:5000/api/registration/:id/register`
