//variabile express
const express = require('express');
const postController = require('../controllers/postController')



//variabile router
const router = express.Router();

// index 
router.get('/', postController.index);


// show 
router.get('/:id', postController.show);


// create
router.post('/', postController.create);

//update
router.put('/:id', postController.update);


//destroy
router.delete('/:id', postController.destroy);




module.exports = router;