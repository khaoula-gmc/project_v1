const express=require("express")

const router=express.Router()


const moe=require("../models/moe")

//@Api:http:localhost:5000/api/moe
// @desc add new MOE 
// access public

router.post('/',async(req,res)=>{
    const {login,pwd,email,nom,prenom,date_inscription,nom_societe,adresse,desription}=req.body;
    const newMoe=new moe({login,pwd,email,nom,prenom,date_inscription,nom_societe,adresse,desription})

    try {
        const addResult=await newMoe.save()
        res.status(200).json('moe added'+addResult)
    } catch (error) {
        res.status(500).json({errors:error})
    }
})

module.exports=router;
