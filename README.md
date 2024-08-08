[![Build Status](https://img.shields.io/github/workflow/status/Khanyie1/practical-test-ass/CI)](https://github.com/Khanyie1/practical-test-ass/actions)

# Car Management API
This project is a Car Management API built using Node.js, Express, and CORS. 
It provides endpoints to add, delete, update, and fetch the most popular car from an array of car objects.

# Prerequisites
- Node.js
- npm

# Running the Application
To start the server in development mode, run:
- npm run dev

# Running the test
- npm test

# API Endpoints
### To get the most popular car
GET http://localhost:3011/api/Khanyie/mostPopularCar

### To add a new car
POST http://localhost:3011/api/Khanyie/car
Content-Type: application/json

{
    "color": "white",
    "make": "Benz",
    "model": "AMG",
    "reg_number": "CY 16875"
}

### To delete by sending the reg number
POST http://localhost:3011/api/Khanyie/car/delete
content-type: application/json

{
    "reg_number": "CY 16875"
}

### To update the car
POST http://localhost:3011/api/Khanyie/car/update
content-type: application/json

{
    "color": "blue",
    "make": "Benz",
    "model": "Tazz",
    "reg_number": "CY 16875"
}

# Project Structure
- express.js: Main server file.
- cars.js: Module containing the array of car objects.
- functions/mostPopularCar.js: Module to determine the most popular car.
- functions/addCar.js: Module to add a new car.
- functions/deleteCar.js: Module to delete a car.
- functions/updateCar.js: Module to update a car.
  
# Dependencies
- express: ^4.19.2
- cors: ^2.8.5
- nodemon: ^3.1.4

# Dev-Dependencies
- chai: ^5.1.1,
- mocha: ^10.7.0
