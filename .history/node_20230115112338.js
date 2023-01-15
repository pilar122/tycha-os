const express = require('express');
const app = express();

//set up an array to store comments 
let comments = [];

//set up routes 
app.get('/',(req,res)=> {
    res.send('Welcome to Tychaios!');
});

app.get('/comments',(req,res)=> {
    res.json(comments);
});

app.post('/comments',(req,res)=> {
    //Get comment from request body 
    const comment = req.body;

    //add comment to array
    comments.push(comment);

    //send response
    res.json({message:'Comment added!'});
});

//listen for requests
app.listen(5500,() => {
    console.log('Comment app listening on port 5500');
});