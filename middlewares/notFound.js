function notFound(req, res, next){
    res.status(404)
    res.json({ 
        error: "Not Found", 
        message: "stai sbagliando qualcosa"
    });
};

module.exports = notFound;