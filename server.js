const express = require('express');
const morgan = require('morgan');
const blogPostsRouter = require('./blogPostsRouter');
const app = express();

app.use(morgan('common'));
app.use('/blog-posts', blogPostsRouter);
