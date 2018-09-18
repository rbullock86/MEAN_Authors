const api = require("./controllers.js");
const bp = require("body-parser");

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
    app.delete("/api/author/:id", api.deleteAuthor);
    // add quote
    // app.put("/api/authors/:id/quotes", api.createQuote);
    // delete quote??
}