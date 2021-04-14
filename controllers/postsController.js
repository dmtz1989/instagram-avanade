const { Post, sequelize } = require('../models');
const { Op } = require('sequelize');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll();
        return res.json(posts);
    },  create: async (req, res) => {
        let {texto, img, usuario_id, n_likes} = req.body;
        let novoPost = await Post.create({
            texto, img, usuario_id, n_likes
        });
        return res.json(novoPost);

    }, update: async (req, res) => {
        let {id} = req.params
        let {texto} = req.body;
        
        let atualizarPost = await Post.update({
            texto
        }, {
            where: {id} 
        });
        return res.send(atualizarPost);

    }, delete: async (req, res) => {
        let { id } = req.params;

        const deletarPost = await Post.destroy({
            where: {id}
        });
        return res.json(deletarPost);

    }
}



module.exports = postsController;


// Post.findAll().then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// // })

// Post.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })