# GitHub Profile Analyzer API

A backend service that analyzes GitHub user profiles and stores insights in a MySQL database.

## Live Demo

https://github-analyzer-py89.onrender.com/

## Repository

https://github.com/niteshkumar9631/github-analyzer.git

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub Public API

## Features

* Fetch public profile data from GitHub using username
* Store insights like public repositories, followers, following, stars, and most used language
* REST APIs to analyze and retrieve profiles
* MySQL database integration
* Deployed on Render

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/niteshkumar9631/github-analyzer.git
cd github-analyzer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root folder:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=github_analyzer
GITHUB_TOKEN=your_github_token
```

### 4. Setup Database

Login to MySQL and run:

```bash
mysql -u root -p < schema.sql
```

### 5. Start the Server

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint                  | Description                    |
| ------ | ------------------------- | ------------------------------ |
| POST   | `/api/analyze/:username`  | Fetch and store GitHub profile |
| GET    | `/api/profiles`           | Get all analyzed profiles      |
| GET    | `/api/profiles/:username` | Get a single profile           |

## Example Requests

### Analyze a profile
POST http://localhost:3000/api/analyze/niteshkumar9631

### Get all profiles
GET http://localhost:3000/api/niteshkumar9631

### Get single profile
GET http://localhost:3000/api/profiles/niteshkumar9631

## Author

**Nitesh Kumar**

GitHub: https://github.com/niteshkumar9631
