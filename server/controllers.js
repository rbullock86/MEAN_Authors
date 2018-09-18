const {Author} = require("./models.js")

module.exports = {
    getAuthors : (req,res) => Author.find({})
                                    .then(data => console.log("controllers.getAuthors", data) || res.json(data))
                                    .catch(errs => console.log("controllers.getAuthors had errors", errs) || res.json(errs)),
    getAuthor : (req,res) => Author.findById(req.params.id)
                                   .then(data => console.log("controllers.getAuthor", data) || res.json(data))
                                   .catch(errs => console.log("controllers.getAuthor had errors", errs) || res.json(data)),
    createAuthor : (req,res) => Author.create(req.body)
                                      .then(data => console.log("controllers.createAuthor", data) || res.json(data))
                                      .catch(errs => console.log("controllers.createAuthor had errors", errs) || res.json(errs)),
    editAuthor : (req,res) => Author.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true })
                                    .then(data => console.log("controllers.editAuthor", data) || res.json(data))
                                    .catch(errs => console.log("controllers.editAuthor had errors", errs) || res.json(errs)),
    deleteAuthor : (req,res) => Author.findByIdAndRemove(req.params.id)
                                      .then(data => console.log("controllers.deleteAuthor", data) || res.json(data))
                                      .catch(errs => console.log("controllers.deleteAuthor had errors", errs) || res.json(errs))
}