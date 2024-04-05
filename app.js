// Module imports
require("express-async-errors");
const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");


// Local imports
const connectDB = require("./db/connectDB");
const authenticateUser = require("./middleware/authentication");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

// Initialize express app
const app = express();

// Set trust proxy
app.set("trust proxy", 1);

// Middleware
app.use(express.json());
app.use(xss());
app.use(helmet());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

// Error handling middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Server configuration
const port = process.env.PORT || 5000;

// Start server function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Start the server
start();
