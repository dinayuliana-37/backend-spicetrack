# SpiceTrack API
## API URL
# [SpiceTrack API]
# **http://localhost:8080/**

## How to run this API on your local machine

If you want to run this API Server on your local machine, you need to do this steps:

- First, clone this repository.  git clone https://github.com/SpiceTrack/backend-spicetrack.git
- Second, open terminal and go to this project's root directory.
- Third, type npm ci in your terminal and hit enter button.
- Fourth, start xampp.
- fifth, create database name ulikbatik-dev.
- sixth, type npx prisma generate in your terminal and hit enter button.
- seventh, type npx prisma migrate dev in your terminal and hit enter button.
- eighth, type npm run start-dev in your terminal and hit enter button.
- Finally, the server will run on your http://localhost:8080

## API Endpoints
## Auth Endpoints
## Register
**POST auth/register**
# Register account for user
| Parameter         | Type   | Description |
|-------------------|--------|-------------|
| `username`        | string | Required.   |
| `password`        | string | Required.   |
## Response
```bash
{
    "message": "User registered successfully!"
}


