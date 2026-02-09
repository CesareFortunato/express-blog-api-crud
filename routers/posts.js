//variabile express
const express = require('express');
const posts = require('../data/postsData')

//variabile router
const router = express.Router();

// index 
router.get('/', function (req, res) {
    res.send('Lista dei posts');
});

// show 
router.get('/:id', function (req, res) {
    res.json(posts[req.params.id])
});

// create
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

//update
router.put('/:id', function (req, res) {
    res.send('Modificare il post ' + req.params.id);
});


//destroy
router.delete('/:id', function (req, res) {
    res.send('Distruggere il post ' + req.params.id);
});


module.exports = router;