import express from "express";
import cors from 'cors'


export const app =  express();


import user_model from './models/user_master_models.js'

app.use(express.json());
app.use(cors());


app.get('/', async(req, res)=>{

  res.send('hello how are you!');
  });

app.get('/dashboard',(req,res)=>{
  res.send('dashborad');
})


app.post('/login',async(req,res)=>{
  
    const email= req.body.email;
    // const username = req.body.email
    const password =req.body.password;
    let user = await user_model.findOne({email:email}).select(-password)
    if (user) {
      if ((user.email==email && user.password==password) ) {
        res.send({
          message: 'login successful',
          status: '200'
        });
        // res.redirect('/dashboard')
      }else{
        res.send({
          message:'invalid email and password',
          status:400
        });
      }
    }else{
      res.send({
        message:"Please register",
        status:'204'
      })
    }
      

    
   
    
    
})