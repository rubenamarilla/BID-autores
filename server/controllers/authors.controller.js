const Author = require("../models/authors.model");

module.exports.createAuthor = (request, response) => {
    Author.create(request.body)
    .then(createdAuthor => response.json(createdAuthor))
    .catch(err => response.status(400).json(err));
}

module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err))
}

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new: true, runValidators: true})
        .then(updated => response.json({updated}))
        .catch(err => {response.json(err)})
}

// module.exports.editById = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

//       if (!updatedAuthor) {
//         return res.status(404).json({ error: 'Author not found' });
//       }
//       res.status(200).json(updatedAuthor);
      
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'There has been an error when updating' });
//     }
// }

module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.buscarAlreves = (request, response) => {
    Author.find().sort({createdAt: -1})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}