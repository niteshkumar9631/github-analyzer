# GitHub Profile Analyzer API

A backend service that analyzes GitHub user profiles and stores insights in a MySQL database.

## Tech Stack

- Node.js
- Express.js
- MySQL
- GitHub Public API

## Features

- Fetch public profile data from GitHub using username
- Store insights like public repos, followers, stars, most used language, etc.
- REST APIs to analyze and retrieve profiles

## Setup Instructions

### 1. Clone the repository

git clone <your-repo-link>
cd github-analyzer

### 2. Install dependencies

npm install

### 3. Configure environment variables

Create a `.env` file in root folder:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=github_analyzer
GITHUB_TOKEN=

### 4. Setup Database

Login to MySQL and run:

mysql -u root -p < schema.sql

### 5. Start the server

npm run dev

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/analyze/:username | Fetch and store GitHub profile |
| GET | /api/profiles | Get all analyzed profiles |
| GET | /api/profiles/:username | Get single profile |

## Example Requests

### Analyze a profile
POST http://localhost:3000/api/analyze/niteshkumar9631

### Get all profiles
GET http://localhost:3000/api/niteshkumar9631

### Get single profile
GET http://localhost:3000/api/profiles/niteshkumar9631