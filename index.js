require('./models/db')
const express = require('express');
const app = express();

const mongoose=require('mongoose')
const driver=mongoose.model('drivers')
app.set('view engine','ejs')
app.use(express.static('public'));



app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/driver',(req,res)=>{
  driver.find()
  .then((result)=>{
    console.log(result)
    res.render('driver',{data:result})
})
  
})



// app.post('/search',async(req,res)=>{
//     let display=await driver.insertMany(data)
//     res.send(display)

// })

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
