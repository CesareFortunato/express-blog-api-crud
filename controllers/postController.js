const posts = require('../data/postsData');


// logica index
function index(req, res) {
    res.json(posts)

}

// logica show
function show(req, res) {

    // prendo id dall'URL e lo trasformiamo in un numero
    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Questo post non esiste"
        })
    }

    res.json(post);
}


// logica create
function create(req, res) {
    res.send("creo cose")
}


// logica update
function update(req, res) {

    // prendo id dall'URL e lo trasformiamo in un numero
    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({ message: "Post non trovato" });
    }


    res.json({
        post: post,
        message: `Modifico il post con id ${id}`
    });
}



// logica destroy
function destroy(req, res) {

    // prendo id dall'URL e lo trasformiamo in un numero
    const id = parseInt(req.params.id)


    // cerchiamo il post con l'id corrispondente
    const post = posts.find(post => post.id === id);

    // controllo se l'id non è valido

    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Questo post non esiste"
        })
    }

    // rimuovo il post
    posts.splice(posts.indexOf(post), 1);

    console.log(posts);



    // messaggio di status corretto
    res.sendStatus(204)
}

module.exports = { index, show, create, update, destroy }

