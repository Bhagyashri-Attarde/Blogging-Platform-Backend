# Blogging-Platform-Backend

This is the backend of the Blogging Platform built with **Node.js**, **Express**, **MySQL**, and **Sequelize ORM**.
 It handles user authentication, blog CRUD operations, and serves RESTful APIs consumed by the React frontend.

---

##  Features

- RESTful API using Express
- User registration and login with JWT
- Secure password hashing with bcrypt
- Blog post creation, update, delete (author-only)
- Sequelize ORM for MySQL database management
- CORS, Helmet for security

---

##  Approach

- Used Sequelize to model User and Post tables and handle MySQL interactions.
- Implemented JWT-based session management with middleware protection.
- Modular code structure for controllers, routes, models, and middleware.
- Role-based access control: only blog authors can modify their posts.

---

## AI Usage

- **ChatGPT**:
  - Helped create route-controller-model structure
  - Assisted in implementing auth middleware and input validation
  - Generated setup and README templates


---

## Setup Instructions

- Node.js v16 or later
- MySQL installed and running
- (Optional) Sequelize CLI installed globally

###  Clone the Repository

```bash
git clone https://github.com/yourusername/blog-platform-backend.git
cd blog-platform-backend

###Install Dependencies

npm install

### Create a .env File

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=blogdb
JWT_SECRET=your_jwt_secret


###Initialize the Database

npx sequelize-cli db:create
npx sequelize-cli db:migrate

## Run the Server

npm run dev
The API will be accessible at http://localhost:5000/api.

###Folder Structure

src/
├── config/             # DB config
├── controllers/        # Route handlers
├── middleware/         # Auth & error middleware
├── models/             # Sequelize models
├── routes/             # API route definitions
├── app.js              # Express app config
└── server.js           # Entry point

