
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {BlogPosts} = require('./models');


const blogText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo '


BlogPosts.create('Title 1', blogText, 'Ykat N');
BlogPosts.create('Title 2', blogText, 'Ryan Renolds');


//get 
router.get('/', (req, res) => {
  res.json(BlogPosts.get());
});

//post
router.post('/', jsonParser, (request, resolution) => {
  const requiredFields = ['title', 'content', 'author'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
  }
  const item = BlogPosts.create(
  request.body.title, request.body.content, request.body.author);
});

//update
router.put('/:id', jsonParser, (request, resolution) => {
  const requiredFields = [
  	'id', 'title', 'content', 'author', 'publishDate'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      console.log(`Not Found`);
    }
  }
  const updatedItem = BlogPosts.update({
    id: request.params.id,
    title: request.body.title,
    content: request.body.content,
    author: request.body.author,
  });
});

//delete
router.delete('/:id', (request, resolution) => {
  BlogPosts.delete(request.params.id);
});


module.exports = router;


