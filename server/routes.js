const api = require("./controllers.js");
const bp = require("body-parser");
const path = require("path");

module.exports = function(app){
    app.use(bp.json());
    // routes

    // get all authors
    app.get("/api/authors", api.getAuthors);
    // get one author
    app.get("/api/authors/:id", api.getAuthor);
    // edit author
    app.put("/api/authors/:id", api.editAuthor);
    // create author
    app.post("/api/authors", api.createAuthor);
    // delete author
    app.delete("/api/authors/:id", api.deleteAuthor);
    // add quote
    // app.put("/api/authors/:id/quotes", api.createQuote);
    // delete quote??
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}