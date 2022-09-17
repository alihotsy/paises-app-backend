const { Router } = require('express');
const pool = require('../../database/postgres');


const router = Router();

router.post('/login/create',async(req,res) => {

    try {
        const { username, password } = req.body;
        const { rows } = await pool.query('INSERT INTO login(username,password) VALUES($1,$2) RETURNING *',[username,password]);
        console.log(rows)
        res.json(rows[0]).status(200);
        
    } catch (error) {
        res.status(403).json({error: error.message})
    }
});

router.get('/users/:username/:password', async(req,res) => {
     const  { username, password } = req.params;
     const { rows } = await pool.query('SELECT * FROM login WHERE username = $1 and password = $2',[username,password]);
     if(!rows.length) {
       return res.status(404).json({error:'account not found'});
     }
     res.status(200).json(rows[0]);
});


module.exports = router;