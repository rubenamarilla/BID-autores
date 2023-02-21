const AuthorController = require('../controllers/authors.controller');

module.exports = function(app){
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    // app.put('/api/author/edit/:id', AuthorController.editById);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
    app.get('/api/author/back', AuthorController.buscarAlreves);
}