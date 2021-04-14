module.exports = (sequelize, DataTypes) => {

    //define (nomeModel, colunas, config)
    const Post = sequelize.define(
        'Post', {
        texto: DataTypes.STRING,
        img: DataTypes.STRING,
        usuarios_id: DataTypes.INTEGER,
        n_likes: DataTypes.INTEGER
    }, {
        tableName: 'posts',
        timestamps: false
    }
    );
    Post.associate = (models) => {
        //Relação N:1 (varios posts de 1 usuario)
        Post.belongsTo(models.Usuario, { as: "usuario", foreignKey: "usuarios_id" });
        //Relação 1:N (posts tem varios comentarios)
        Post.hasMany(models.Comentario, {as: "comentario", foreignKey: "posts_id"});
        //Relação N:M (post tem curtidas de varios usuarios)
        Post.belongsToMany(models.Usuario, {
            as:"curtiu",
            through: "curtidas", 
            foreignKey: "posts_id",
            otherKey: "usuarios_id",
            timestamps: false
        })
    }

    return Post;
}