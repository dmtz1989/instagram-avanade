const { Comentario, sequelize } = require('../models');
const { Op } = require('sequelize');

const comentariosController = {
    index: async (req, res) => {
        let comentarios = await Comentario.findAll();
        return res.json(comentarios);
    }, create: async (req, res) =>{
        let {texto, usuarios_id, posts_id} = req.body;
        let novoComentario = await Comentario.create({
            texto, usuarios_id, posts_id
        });
        return res.json(novoComentario);
    }, update: async (req, res) => {
        let {id} = req.params;
        let {texto} = req.body;

        let atualizarComentario= await Comentario.update({
            texto
        }, {
            where: {id}
        })
        return res.send(atualizarComentario);
    }, delete: async (req, res) => {
        let { id } = req.params;

        const deletarComentario = await Comentario.destroy({
            where: {id}
        });
        return res.json(deletarComentario);

    }
}

module.exports = comentariosController;

// Comentario.findAll().then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Comentario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// // })

// Comentario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })
