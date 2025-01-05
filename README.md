# User Registration API Documentation

## Register User
Creates a new user account.

### Endpoint
```http
POST /users/register
```

### Request Body
| Field               | Type   | Description                           | Required |
|---------------------|--------|---------------------------------------|----------|
| email               | string | User's email address                  | Yes      |
| fullname.firstname  | string | User's first name (min 3 characters)  | Yes      |
| fullname.lastname   | string | User's last name                      | No       |
| password            | string | User's password (min 6 characters)    | Yes      |

### Example Request
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}
```

### Response Codes
| Status Code | Description               |
|-------------|---------------------------|
| 200         | User successfully registered |
| 400         | Invalid input data         |
| 409         | Email already exists       |
| 500         | Internal server error      |

### Example Success Response
```json
{
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Example Error Response
```json
{
  "error": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Validation Rules
- Email must be a valid email address.
- First name must be at least 3 characters long.
- Password must be at least 6 characters long.

## How to Use

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=3000
   DB_CONNECT=mongodb+srv://<username>:<password>@cluster0.mongodb.net/blogDB?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   ```

3. **Run the Server:**
   ```bash
   npx nodemon server.js
   ```

4. **Send a POST Request:**
   Use a tool like Postman or cURL to send a POST request to `http://localhost:3000/users/register` with the request body as shown above.

---

This documentation provides a clear overview of the registration endpoint, including request/response formats and validation rules. It also includes instructions on how to set up and run the server.

