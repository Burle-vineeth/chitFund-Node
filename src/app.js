const express = require('express');
const app = express();
const port = 3100;
const cors = require('cors');
const db = require('./db/index');
const signup = require('./routes/userRegistraion/creatingUser');
const login = require('./routes/userLogin/userlogin');
const chits = require('./routes/gettingbisicchits/gettingChits');
const chit = require('./routes/gettingChit/gettingChit');
const forgot = require('./routes/forgotPassword/forgotPassword');
const reset = require('./routes/resetPassword/resetPassword');

app.use(express.json());
app.use(cors());
app.use('/signup',signup);
app.use('/login', login);
app.use('/chits', chits);
app.use('/chit/:id', chit);
app.use('/forgot', forgot);
app.use('/reset', reset);

app.listen( port, () => {
    console.log(`Server is on port no : ${port}`);
});