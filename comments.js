// Create web server
// Create a new Express server
const express = require('express');
const app = express();
// Create a new router
const commentsRouter = express.Router();
// Add the router to the app
app.use('/comments', commentsRouter);
// Add a new route to the router
commentsRouter.get('/', (req, res) => {
  res.send('You are on the comments page');
});
// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});

