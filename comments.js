// Create web server 
// 1. Install express
// 2. Create express server
// 3. Create a route for /comments
// 4. Send a response with a message
// 5. Listen on port 3000

// 1. Install express
// npm install express

// 2. Create express server
const express = require('express')
const app = express()

// 3. Create a route for /comments
app.get('/comments', (req, res) => {
    res.send('You are on comments page')
})

// 4. Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})