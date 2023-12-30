const express = require('express');
const router = express.Router();
const solarModel = require('../models/Solar.js');
const db = require('../models/config.js')


router.get('/',(req,res)=>{
    res.json({"trial":"texting"});
    console.log("testing");
})

router.get('/all', async (req,res)=>{
   await solarModel.findAll()
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch(err=>console.log(err));
})

router.post('/create', async (req,res)=>{
    const {id, title, publisher} = req.body;
    await db.query('SELECT * FROM booksdata',{
        type: db.QueryTypes.SELECT
      })
    .then(res.status(200).json({'mssg':'The data successfully uploaded'}))
    .catch(err=>console.log(err))
})

router.delete('/delete:id', async (req,res)=>{
    const {id} = req.body.id;
    await solarModel.delete({id})
    .then(res.status(200).json({'mssg':'The data sucessfully deleted'}))
    .catch(err=>console.log(err))
})

router.update('/update:id'), async(req,res)=>{
    const{id}=req.body.id;
    await solarModel.update({id})
    .then(res.status(200).json({'mssg':'The data successfully updated'}))
}

module.exports = router;