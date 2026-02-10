const express = require('express');
const app = express();
const port = 3000;

//importo router
const postsRouter = require ('./routers/posts');

//importo i posts
const posts = require('./data/postsData');

app.use(express.static('public'));

// body-parser
app.use(express.json());

app.use("/posts", postsRouter)


app.get('/', (req, res) => {
    res.json(posts)
    
})



app.listen(port, () => {
    console.log(`Esempio ${port}`)
})