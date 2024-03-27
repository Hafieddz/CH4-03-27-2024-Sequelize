require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const router = require('./routes')
const PORT = process.env.PORT || 8000 ;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended : false
}));


app.set("views", __dirname+"/views");
app.set("view engine", "ejs");

app.use(morgan('dev'));
app.use(router);

app.get('/', (req,res) => {
    res.render("index", {name : 'Hafiedz'});
})

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})