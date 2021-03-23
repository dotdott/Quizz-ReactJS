const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const pool = require('./auth/auth');

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(cors());


app.get('/quizz/get', (req, res) => {
    const SELECT = `SELECT *
    FROM leaderboard
    ORDER BY score desc;`

    pool.query(SELECT, (err, result) => {
        if(err) return console.log(err);
        
        res.send(result);
    })
});

app.post('/quizz/insert', (req, res) => {
    const name = req.body.name;
    const score = req.body.score;

    const INSERT = `INSERT INTO leaderboard(name, score)
    VALUES(?,?);`

    pool.query(INSERT, [name, score], (err, result) => {
        if(err) return console.log(err);
    })
})

app.listen(PORT, () => {
    console.log('server running on ' + PORT)
})