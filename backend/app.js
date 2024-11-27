const dotenv = require("dotenv");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require("./db/mongoConnect");
const teacherRoutes = require("./routes/teacherRoutes");
const webhookRoutes = require("./routes/webhookRoutes");
const errorHandler = require("./middleware/errorHandler");
dotenv.config();
connectDB();

const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));



app.use(bodyParser.json());
app.use(teacherRoutes);
app.use(webhookRoutes);
app.use(errorHandler);

module.exports = app;

