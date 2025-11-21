# Smart LMS (Fullstack)

Small Learning Management System with Express + MongoDB backend and React + Vite frontend.

## Repo layout
- [backend/app.js](backend/app.js) — Express server entry  
- [backend/routes](backend/routes) — API routes (e.g. [backend/routes/courseRoutes.js](backend/routes/courseRoutes.js))  
- [backend/controllers](backend/controllers) — Request handlers (examples below)  
- [backend/models](backend/models) — Mongoose models  
- [frontend/src](frontend/src) — React app (Vite)

## Key backend symbols & files
- [`registerUser`](backend/controllers/authController.js) — POST /api/auth/register ([routes](backend/routes/authRoutes.js))  
- [`loginUser`](backend/controllers/authController.js) — POST /api/auth/login ([routes](backend/routes/authRoutes.js))  
- [`getCategory`](backend/controllers/categoryController.js) — GET /api/category ([routes](backend/routes/categoryRoutes.js))  
- [`getCourse`, `getCourseById`, `enrollStudentInCourse`, `myCourses`](backend/controllers/courseController.js) — course endpoints ([routes](backend/routes/courseRoutes.js))  
- [`getUserProfile`, `updateUserProfile`](backend/controllers/userController.js) — user profile endpoints ([routes](backend/routes/userRoutes.js))  
- [`createPaymentIntent`](backend/controllers/paymentController.js) — POST /api/payment/create-payment-intent ([routes](backend/routes/paymentRoutes.js))  
- [`authProtect`](backend/middlewares/authMiddleware.js) — protects routes using JWT  
- Models: [backend/models/UserModel.js](backend/models/UserModel.js), [backend/models/CourseModel.js](backend/models/CourseModel.js), [backend/models/CategoryModel.js](backend/models/CategoryModel.js)

## Prerequisites
- Node.js (16+)
- npm
- MongoDB instance (Atlas or local)
- Stripe account (for payments) — secret & publishable keys

## Backend — setup & run
1. Open a terminal in `backend/`
2. Install deps:
   npm install
3. Create `.env` in `backend/` with at least:
   - MONGO_URI (MongoDB connection string)
   - JWT_SECRET (JWT signing secret)
   - STRIPE_SECRET_KEY (Stripe secret key)
   - PORT (optional)
4. (Optional) Seed sample data:
   npm run data:import
5. Start dev server:
   npm run start:dev
6. Server listens at the port in [backend/app.js](backend/app.js) (default 3003)

## Frontend — setup & run
1. Open a terminal in `frontend/`
2. Install deps:
   npm install
3. Configure `frontend/.env` (example already present):
   - VITE_BACKEND_URL (e.g. https://smart-lms-pcx0.onrender.com/)
   - VITE_STRIPE_PUBLISH_KEY
4. Start dev server:
   npm run dev
5. App entry: [frontend/src/main.jsx](frontend/src/main.jsx)

## Important API endpoints
- Auth
  - POST /api/auth/register -> [`registerUser`](backend/controllers/authController.js)
  - POST /api/auth/login -> [`loginUser`](backend/controllers/authController.js)
- Categories
  - GET /api/category -> [`getCategory`](backend/controllers/categoryController.js)
- Courses
  - GET /api/courses -> [`getCourse`](backend/controllers/courseController.js)
  - GET /api/courses/:id -> [`getCourseById`](backend/controllers/courseController.js)
  - POST /api/courses/:id/enroll -> [`enrollStudentInCourse`](backend/controllers/courseController.js) (protected by [`authProtect`](backend/middlewares/authMiddleware.js))
  - GET /api/courses/my-courses -> [`myCourses`](backend/controllers/courseController.js) (protected)
- User
  - GET /api/user -> [`getUserProfile`](backend/controllers/userController.js) (protected)
  - PUT /api/user/profile -> [`updateUserProfile`](backend/controllers/userController.js) (protected)
- Payment
  - POST /api/payment/create-payment-intent -> [`createPaymentIntent`](backend/controllers/paymentController.js) (protected)

## Notes & troubleshooting
- Ensure `MONGO_URI` is valid; connection code is in [backend/config/db.js](backend/config/db.js).  
- JWT token returned by login is stored by frontend in `AuthContext` ([frontend/src/context/AuthContext.jsx](frontend/src/context/AuthContext.jsx)). Frontend attaches `Authorization: Bearer <token>` for protected calls.  
- Seeder uses [backend/data/seeder.js](backend/data/seeder.js). Run `npm run data:import` from `backend/`.  
- If CORS or env issues occur, verify `VITE_BACKEND_URL` in `frontend/.env` and restart Vite.

## Contributing
- Follow existing patterns in [backend/controllers](backend/controllers) and [frontend/src/pages](frontend/src/pages).  
- Run backend and frontend locally while developing.

## License
MIT
