# Jobster API

This API is a job listing application. It allows users to register, login, and update their profiles. The user data includes email, name, last name, and location. The API also supports the creation and modification of job listings, with properties such as job type and job location. The API is designed to be consumed by a front-end client built with React. The client makes requests to the API via the /api/v1 base URL. The API serves static assets from the client/build directory, and serves an index.html file for all routes apart from the API routes.

## Table of Contents

- [Technologies and Libraries](#technologies-and-libraries)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [License](#license)

## Technologies and Libraries

The project utilizes the following technologies and libraries:

- **bcryptjs**: Encrypts passwords using the bcrypt hash algorithm for secure password storage.
- **cors**: Configures Cross-Origin Resource Sharing policies in web applications for sharing resources across different origins.
- **express**: A Node.js web framework that simplifies API and web application development by managing routes, middlewares, and other functionalities.
- **helmet**: Enhances Express application security by setting various HTTP headers, providing protection against known vulnerabilities.
- **joi**: A data validation library for JavaScript that streamlines input data validation, such as HTTP requests.
- **jsonwebtoken**: Enables the generation and verification of JSON Web Tokens (JWT) for authentication and authorization in web applications.
- **mongoose**: An object modeling library for MongoDB in Node.js that simplifies interactions with MongoDB databases.
- **swagger-ui-express**: Creates an interactive web interface for API documentation using the OpenAPI (formerly Swagger) standard in Express applications.
- **yamljs**: Converts YAML files into JavaScript objects and vice versa, allowing manipulation of YAML-formatted data in Node.js applications.
- **xss-clean**: A middleware function to sanitize user input coming from POST body, GET queries, and url params. This can help prevent XSS attacks.
- **express-rate-limit**: A middleware for Express applications that can be used to limit repeated requests to APIs and thereby prevent brute-force attacks.
- **moment**: A JavaScript date library for parsing, validating, manipulating, and formatting dates.

## Installation

To run the Jobster API locally, follow these steps:

1. **Clone the project**:
    ```bash
    git clone https://github.com/DevShiba/jobster-api-node
    ```

2. **Navigate to the project directory**:
    ```bash
    cd jobster-api-node
    ```

3. **Install the dependencies**:
    ```bash
    npm install
    ```

4. **Start the server**:
    ```bash
    npm start
    ```

## Running Locally

Ensure you have MongoDB installed and running locally or provide a MongoDB URI in your environment variables. You can start the server with the command provided above, and it will be available at `http://localhost:3000`.

## Usage

To use the API, you need to:

1. **Register a new account** or **log in** with an existing account.
    - To register a new account, use the registerUser function in userSlice.js by providing the user's name, email, and password.
    - To log in with an existing account, use the loginUser function in the same file by providing the user's email and password.
2. Perform CRUD operations on job entries:
    - **Create** a new job entry: Use the createJob function in controllers/jobs.js. This function takes a request object that includes the user's ID and the job details, and returns a response with the created job.
    - **Read** one or multiple job entries: Use the getJob or getJobs functions in the same file. These functions take a request object that includes the user's ID and optionally a job ID, and return a response with the requested job(s).
    - **Update** an existing job entry: Use the updateJob function in the same file. This function takes a request object that includes the user's ID, the job ID, and the updated job details, and returns a response with the updated job.
    - **Delete** a job entry: Use the deleteJob function in the same file. This function takes a request object that includes the user's ID and the job ID, and deletes the specified job.

## API Documentation

The API is documented using Swagger. You can access the interactive API documentation at:

[API](https://jobster-api-node-j2gq.onrender.com)

![Swagger UI](https://i.imgur.com/JG6Dmjc.png)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
