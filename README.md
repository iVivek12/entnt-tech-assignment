Communication Tracker
A powerful React-based Calendar Application designed for tracking and managing communications, featuring modules for Admin, User, and Reporting.

Features
Admin Module
Company Management: Add, edit, and delete companies.
Communication Methods: Manage modes like email, calls, or meetings.
Dashboard: View company-wide statistics and manage user roles.
User Module
Dashboard: Access communication history, statistics, and calendar.
Notifications: Alerts for overdue and upcoming communications.
Calendar Integration: Track communication schedules with color-coded entries.

Tech Stack
Frontend: React.js, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT-based login for admin and users
Others: Axios, bcrypt.js, dotenv

Prerequisites
Ensure the following are installed:

Node.js
MongoDB
npm

Setup
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/communication-tracker.git
cd communication-tracker
Install dependencies:
bash
Copy code
npm install

Configure environment variables:
Create a .env file in the root directory and set:
makefile
Copy code
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-admin-password
JWT_SECRET=your-secret-key
MONGO_URI=your-mongo-db-uri

Start MongoDB:
bash
Copy code
mongod
Run the development server:
bash
Copy code
npm run dev
![Screenshot 2025-01-04 150443](https://github.com/user-attachments/assets/69a6fdcf-878e-4ae6-b70f-b5ef18c0b896)

