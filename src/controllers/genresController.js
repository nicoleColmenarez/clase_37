require('dotenv').config();
const db = require('../database/models')

module.exports = {
    list: (req, res) => {
        db.Genre.findAll()
            .then((genres) => {
                return res.render('genresList', { genres });
            })
            .catch(error => console.log(error));
    },

    detail: (req, res) => {
        const { id } = req.params;
        db.Genre.findByPk(id)
            .then((genre) => {
                return res.render('genresDetail', { genre });
            })
            .catch(error => console.log(error));
    }
};