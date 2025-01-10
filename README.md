# User Registration API Documentation

## 1. Register User
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

## 2. Login User
Authenticates a user and returns a JWT token.

### Endpoint
```http
POST /users/login
```

### Request Body
| Field   | Type   | Description                        | Required |
|---------|--------|------------------------------------|----------|
| email   | string | User's registered email address    | Yes      |
| password| string | User's password                    | Yes      |

### Example Request
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Response Codes
| Status Code | Description               |
|-------------|---------------------------|
| 200         | Login successful          |
| 400         | Invalid input data        |
| 401         | Invalid email or password |
| 500         | Internal server error     |

### Example Success Response
```json
{
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com",
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Example Error Response
```json
{
  "error": "Invalid email or password"
}
```

### Validation Rules
- Email must be a valid email address.
- Password must be at least 6 characters long.

### Authentication
The response includes a JWT token that should be included in subsequent requests in the Authorization header:
```http
Authorization: Bearer <token>
```

---

This documentation provides a clear overview of the `/users/register` and `/users/login` endpoints, including request/response formats, validation rules, and authentication details. It also includes instructions on how to set up and run the server.

