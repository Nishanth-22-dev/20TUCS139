const express =require('express')
const axios=require('axios')
const router=express.Router()

const fetchtraindetails= async ()=>{
    try{


    }catch(error){
        console.error('Error at getting train scedule:',error)
    }
}

router.get('/',async(req,res)=>{
    try{
        
    }catch(error){
        console.error('error fetching on train schedules',error)
        res.status(500).json({error:'server error'})
    }
})

module.exports=router