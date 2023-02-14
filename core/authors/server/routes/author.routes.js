const AuthorsController = require('../controllers/author.controller');

module.exports = function (app) {
  app.get('/api/authors', AuthorsController.getAll);
  app.post('/api/author/new', AuthorsController.create);
  app.get('/api/author/:id', AuthorsController.getOne);
  app.put('/api/author/edit/:id', AuthorsController.update);
  app.delete('/api/author/delete/:id', AuthorsController.delete);
}