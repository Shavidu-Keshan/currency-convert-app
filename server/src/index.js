const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

app.get("/getAllCurrencies" , async (req,res)=>{

   const nameURL = "https://docs.openexchangerates.org/reference/currencies-json?app_id=84013cb2f52b4c6f8717b3b20e26cd33";

   
   
   try{
    const nameRespones = await axiox.get(nameURL);
   const nameData = nameRespones.data;

   return res.json(nameData);

   }catch(err){
    console.error(err);
   }
})

//listen to a port
app.listen(5000, () => {
    console.log("SERVER STARTED");
})  ;