# ShoppyGlobe API

## Overview

ShoppyGlobe is an e-commerce backend application built using Node.js, Express.js, and MongoDB. The application provides a RESTful API for managing products and shopping cart functionalities, complete with user authentication and error handling.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [MongoDB Structure](#mongodb-structure)
- [Error Handling](#error-handling)
- [Authentication](#authentication)
- [Testing](#testing)
- [Contributions](#contributions)
- [License](#license)

## Features

- **Product Management**: Fetch, add, update, and delete products.
- **Shopping Cart**: Add products to the cart, update quantities, and remove items.
- **User Authentication**: JWT-based user registration and login.
- **Error Handling**: Comprehensive error responses for API endpoints.
- **Data Validation**: Ensure that all data inputs meet required formats.

## Installation

1. Clone the repository:

   ```bash
   git clone <your-github-repo-url>
   cd shoppyglobe-backend
   npm install

   Create a .env file in the root directory and add your environment variables:
   ```

   DB_URL=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   PORT=3000
   npm start
