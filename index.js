const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello');
})


app.post('/',(req,res)=>{
    const {email,password} = req.body;

    if(!email){
        return res.status(404).json({
            message:"Email cannot be empty"
        })
    };

    if(!password){
        return res.status(404).json({
            message:"Password cannot be empty"
        })
    }
    res.status(201).json({
        message:"Data added successfully!",
        data:req.body
    });
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});