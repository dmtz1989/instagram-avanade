const {Usuario} = require('../models');


module.exports = async (request, response, next) => {
    let {email, nome, senha} = request.body;
    let usuarios = await Usuario.findAll({ where: {email} });
    if (usuarios.length) {
        response.status(400).json({ erro: "Email já cadastrado" })
        return;
    } else {
        let nomeUsuario = await Usuario.findAll({ where: {nome} });
             if (nomeUsuario.length){
                 response.status(400).json({ erro: "Nome já existe" });
                 return;
    } else {
        let senhaUsuario =  await Usuario.findAll({ where: {senha} })
        if (senhaUsuario.length < 6 || senhaUsuario.length > 12){
            response.status(400).json({ erro: "Senha não pode ser menor que 6 ou maior que 12 caracteres" });
        } else {
            next();
        }
        }
   }
}
