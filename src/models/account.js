module.exports = (sequelize, DataTypes) => {

    const   Account = sequelize.define('Account', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Account.prototype.toJSON = function() {
        const values = { ...this.get()};
        delete values.password;//remove o campo de senha para nao retornar no json
        return values;
    }


    return Account;
}