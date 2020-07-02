const express = require(`express`);
const db = require('./models/index');
const response = require('./middlewares/response');
const authController = require('./controllers/auth');


const app = express();

app.use(response);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/auth', authController);

app.get('/', (req,res) => {
    return res.json('');
});


db.sequelize.sync().then(() => {
    app.listen(3333, () => {
        console.log('Listen on port: 3333');
    });
});