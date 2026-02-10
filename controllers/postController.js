const posts = require('../data/postsData');



// funzione per centralizzare parseInt dell'ID
const parseId = (req) => parseInt(req.params.id);


// funzione per cntralizzare il find dall' ID
const findPostByID = (id) => posts.find(post => post.id === id);


// funzione per centralizzare il messaggio d'errore

function notFound(res, message = "Risorsa non trovata") {
    return res.status(404).json({ error: "Not Found", message });
}



// logica index
function index(req, res) {

    // creo nuova var per il filtro
    let filteredPosts = posts;

    // filtro l'array
    if (req.query.tags) {
        filteredPosts = posts.filter(
            post => post.tags.includes(req.query.tags)
        );
    }


    res.json(filteredPosts)

}

// logica show
function show(req, res) {

    // prendo id dall'URL e lo trasformiamo in un numero
    const id = parseId(req);

    // trovo il post con l'id
    const post = findPostByID(id)


    // controllo se il post esiste
    if (!post) {
        return notFound(res, "Questo post non esiste")
    }

    res.json(post);
}


// logica create
function create(req, res) {

    // creo un id nuovo per ogni post che aggiungo
    const newId = Date.now();

    // creo un nuovo oggetto post
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags
    }

}


// logica update
function update(req, res) {

    // prendo id dall'URL e lo trasformiamo in un numero
    const id = parseId(req);


    // trovo il post con l'id
    const post = findPostByID(id);


    // controllo se il post esiste
    if (!post) {
        return notFound(res, "Questo post non esiste")
    }


    res.json({
        post: post,
        message: `Modifico il post con id ${id}`
    });
}



// logica destroy
function destroy(req, res) {

    // prendo id dall'URL e lo trasformiamo in un numero
    const id = parseId(req);


    // cerco il post con l'id corrispondente
    const post = findPostByID(id);

    // controllo se il post esiste

    if (!post) {
        return notFound(res)
    }

    // rimuovo il post
    posts.splice(posts.indexOf(post), 1);

    res.json(posts);



    // messaggio di status corretto
    res.sendStatus(204)
}

module.exports = { index, show, create, update, destroy }

