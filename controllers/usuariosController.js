const { Usuario, sequelize } = require('../models');
const { Op } = require('sequelize');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        return res.render( 'usuarios', { listarUsuarios: usuarios });
    },
    create: async (req, res) => {
        let {nome, email, senha} = req.body;
        let novoUsuario = await Usuario.create({
           nome, email, senha
        });
        return res.json(novoUsuario);

    }, update: async (req, res) => {
        let {id} = req.params
        let {nome, email, senha} = req.body;
        
        let atualizarUsuario = await Usuario.update({
            nome, email, senha
        }, {
            where: {id} 
        });
        return res.send(atualizarUsuario);

    }, delete: async (req, res) => {
        let { id } = req.params;

        const deletarUsuario = await Usuario.destroy({
            where: {id}
        });
        return res.json(deletarUsuario);

    }
}

module.exports = usuariosController;


// Usuario.findAll().then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findByPk(1).then((resultado) => {
//     console.table(resultado.toJSON()); 
// });

// Usuario.findAll({
//     order: [
//         ['nome', 'ASC']
//     ]
// }).then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()))
// });

  // Usuario.bulkCreate([
    //     { nome: 'Amanda', email: 'amanda@digitalhouse.com' , senha: '123456'},
    //     { nome: 'Demetryus', email: 'demetryus@digitalhouse.com' , senha: 'abcde'},
    //     { nome: 'Ianna', email: 'ianna@digitalhouse.com' , senha: '010190'},
    //     { nome: 'Ronierison', email: 'ronierison@digitalhouse.com' , senha: 'admin'},
    //     { nome: 'Stefani', email: 'stefani@digitalhouse.com' , senha: '000000'},
    //     { nome: 'Heloisa', email: 'heloisa@digitalhouse.com' , senha: 'xyz123'},
    //   ],) // will return all columns for each row inserted
    //   .then((resultado) => {
    //     console.log(resultado);
    //   });

// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// // })

// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// Usuario.findAll().then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findByPk(1, {include: ["posts"]}).then((usuario) => {
//     console.log(usuario.toJSON());
//     sequelize.close();
// })