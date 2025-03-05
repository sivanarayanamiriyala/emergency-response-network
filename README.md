# Emergency Response Network (ERN)

The Emergency Response Network (ERN) is a backend system that handles emergency reports, responder assignments, and user management. It is designed to aid in real-time emergency responses.

## Features

- User authentication (Users, Volunteers, Admins)
- Reporting emergencies (location, type, description)
- Assigning volunteers to emergencies based on location
- Managing emergency reports and incident data
- Admin control for user and responder management

## Project Structure

```
emergency-response-network/
│
├── backend/
│   ├── config/
│   │   └── db.js                   # MongoDB connection configuration
│   ├── controllers/
│   │   ├── authController.js        # Handles user authentication (login/register)
│   │   ├── emergencyController.js   # Handles emergency report logic
│   │   ├── reportController.js      # Handles incident report logic
│   │   └── userController.js        # Handles user-related operations (profile management)
│   ├── middlewares/
│   │   ├── authMiddleware.js        # JWT token validation and user authorization
│   │   └── errorMiddleware.js       # Global error handling middleware
│   ├── models/
│   │   ├── User.js                  # User schema (for Users, Volunteers, Admins)
│   │   ├── Emergency.js             # Emergency schema (for emergencies reported)
│   │   └── Report.js                # Report schema (for detailed incident reports)
│   ├── routes/
│   │   ├── authRoutes.js            # Routes for login/register
│   │   ├── emergencyRoutes.js       # Routes for emergency operations (reporting, fetching)
│   │   ├── reportRoutes.js          # Routes for report management (create, get)
│   │   └── userRoutes.js            # Routes for user operations (profile, volunteer list)
│   ├── utils/
│   │   └── generateToken.js         # Utility for generating JWT tokens
│   ├── .env                         # Environment variables (JWT_SECRET, MongoDB URI, etc.)
│   ├── index.js                     # Entry point to the application (Express app setup)
│   ├── package.json                 # Dependencies and scripts
│   └── README.md                    # Project documentation
│
├── .gitignore                       # Git ignore file
└── README.md                        # Overall project documentation
```

## Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sivanarayanamiriyala/emergency-response-network
   cd backend
   ```

2. **Create the `.env` file and add the following environment variables:**
   ```bash
   PORT=5000
   MONGO_URI=mongodb://<your-url>
   JWT_SECRET=mySuperSecretKey123
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Run the server in development mode:**
   ```bash
   npm run dev
   ```

5. **Testing with Postman:**
   Use [Postman](https://www.postman.com/) or a similar tool to test the API endpoints.

## API Routes

### 1. **User Registration**
   - **Endpoint:** `POST /api/users/register`
   - **Request Body:**
     ```json
     {
       "name": "John Doe",
       "email": "johndoe@example.com",
       "password": "password123"
     }
     ```
   - **Expected Output:**
     ```json
     {
       "message": "User registered successfully",
       "user": {
         "_id": "60d0fe4f5311236168a109ca",
         "name": "John Doe",
         "email": "johndoe@example.com",
         "token": "<jwt-token>"
       }
     }
     ```

### 2. **User Login**
   - **Endpoint:** `POST /api/users/login`
   - **Request Body:**
     ```json
     {
       "email": "johndoe@example.com",
       "password": "password123"
     }
     ```
   - **Expected Output:**
     ```json
     {
       "token": "<jwt-token>"
     }
     ```

### 3. **Report an Emergency**
   - **Endpoint:** `POST /api/emergencies/report`
   - **Request Body:**
     ```json
     {
       "type": "Fire",
       "location": "123 Main St",
       "description": "Fire in the building"
     }
     ```
   - **Expected Output:**
     ```json
     {
       "message": "Emergency reported successfully",
       "emergency": {
         "_id": "60d0fe4f5311236168a109d4",
         "type": "Fire",
         "location": "123 Main St",
         "description": "Fire in the building"
       }
     }
     ```

### 4. **Get All Emergencies**
   - **Endpoint:** `GET /api/emergencies`
   - **Headers:** Add Authorization token.
   - **Expected Output:**
     ```json
     [
       {
         "_id": "60d0fe4f5311236168a109d4",
         "type": "Fire",
         "location": "123 Main St",
         "description": "Fire in the building"
       }
     ]
     ```

### 5. **Get All Reports**
   - **Endpoint:** `GET /api/reports`
   - **Headers:** Add Authorization token.
   - **Expected Output:**
     ```json
     [
       {
         "_id": "60d0fe4f5311236168a109e0",
         "type": "Incident",
         "location": "456 Elm St",
         "description": "Car accident"
       }
     ]
     ```

### 6. **Create a New Report**
   - **Endpoint:** `POST /api/reports/create`
   - **Request Body:**
     ```json
     {
       "type": "Incident",
       "location": "456 Elm St",
       "description": "Car accident"
     }
     ```
   - **Expected Output:**
     ```json
     {
       "message": "Report created successfully",
       "report": {
         "_id": "60d0fe4f5311236168a109e0",
         "type": "Incident",
         "location": "456 Elm St",
         "description": "Car accident"
       }
     }
     ```

