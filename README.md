It seems you are working on documentation for a User Management API, covering endpoints for registration, login, retrieving user profiles, and logging out. Here's how the full documentation could be organized and refined for better clarity and consistency. Let me know if you'd like assistance formatting or expanding this further:

---

# User Management API Documentation

## 1. Register User
Creates a new user account.

### Endpoint
```http
POST /users/register
```

#### Request Body
| Field               | Type   | Description                           | Required |
|---------------------|--------|---------------------------------------|----------|
| email               | string | User's email address                  | Yes      |
| fullname.firstname  | string | User's first name (min 3 characters)  | Yes      |
| fullname.lastname   | string | User's last name                      | No       |
| password            | string | User's password (min 6 characters)    | Yes      |

#### Example Request
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

#### Response Codes
| Status Code | Description               |
|-------------|---------------------------|
| 200         | User successfully registered |
| 400         | Invalid input data         |
| 409         | Email already exists       |
| 500         | Internal server error      |

#### Example Responses
**Success**
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

**Error**
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

---

## 2. Login User
Authenticates a user and returns a JWT token.

### Endpoint
```http
POST /users/login
```

#### Request Body
| Field    | Type   | Description                        | Required |
|----------|--------|------------------------------------|----------|
| email    | string | User's registered email address    | Yes      |
| password | string | User's password                    | Yes      |

#### Example Request
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Response Codes
| Status Code | Description               |
|-------------|---------------------------|
| 200         | Login successful          |
| 400         | Invalid input data        |
| 401         | Invalid email or password |
| 500         | Internal server error     |

#### Example Responses
**Success**
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

**Error**
```json
{
  "error": "Invalid email or password"
}
```

#### Notes
- Include the JWT token in the Authorization header for authenticated requests:
  ```http
  Authorization: Bearer <token>
  ```

---

## 3. Get User Profile
Retrieves the authenticated user's profile information.

### Endpoint
```http
GET /users/profile
```

#### Headers
| Field           | Value           | Required |
|------------------|-----------------|----------|
| Authorization    | Bearer `<token>` | Yes      |

#### Response Codes
| Status Code | Description                      |
|-------------|----------------------------------|
| 200         | Profile retrieved successfully  |
| 401         | Unauthorized - Invalid or missing token |
| 500         | Internal server error           |

#### Example Responses
**Success**
```json
{
  "_id": "60d0fe4f5311236168a109ca",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "user@example.com",
  "socketId": null
}
```

**Error**
```json
{
  "error": "Unauthorized"
}
```

---

## 4. Logout User
Logs out the user by blacklisting the current JWT token.

### Endpoint
```http
GET /users/logout
```

#### Headers
| Field           | Value           | Required |
|------------------|-----------------|----------|
| Authorization    | Bearer `<token>` | Yes      |

#### Response Codes
| Status Code | Description                      |
|-------------|----------------------------------|
| 200         | Logout successful               |
| 401         | Unauthorized - Invalid or missing token |
| 500         | Internal server error           |

#### Example Responses
**Success**
```json
{
  "message": "Logged out successfully"
}
```

**Error**
```json
{
  "error": "Unauthorized"
}
```

#### Notes
- The token used for authentication will be blacklisted.
- Subsequent requests with the same token will be rejected.
- The cookie containing the token will be cleared.

---

