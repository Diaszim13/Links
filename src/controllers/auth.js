const express = require(`express`);
const bcrypt = require('bcrypt')
const {Account} = require('../models')
const {accountSignUp} = require('../validators/account');
const {getMessage} = require('../helpers/validator');
const router = express.Router();

const saltRounds = 10;
router.get('/sign-in', (req,res) => {
    return res.jsonOK(null);
});

router.get('/sign-up', accountSignUp, async (req,res) => {

   const {email, password} = req.body;

   
  const account = await Account.findOne({where: {email}});
  if(account) return res.jsonBadReq(null, getMessage('account.signup.email.exists'));

   //const salt = 'flkjslkdafjsdalk'funçao que mistura junto com a senha alguns caracteres aleatorios 
  const hash = bcrypt.hashSync(password, saltRounds); 
  const newAcc = await Account.create({email, password:hash });
   
    
    return res.jsonOK(newAcc, getMessage('account.signup.success') );
});


module.exports = router;