const express = require("express");
const cors = require("cors");
const axios = require('axios');


const app = express();

//middle wares
app.use(express.json());
app.use(cors());

app.get("/getAllCurrencies" , async (req,res)=>{

   const nameURL = 'https://openexchangerates.org/api/currencies.json?prettyprint=false&show_alternative=false&show_inactive=false&app_id=84013cb2f52b4c6f8717b3b20e26cd33';

   
   
   try{
    const nameResponse = await axios.get(nameURL);

   const nameData = nameResponse.data;

   return res.json(nameData);

   }catch(err){
    console.error(err);
   }
});
//get the target amount
app.get("/convert", async(req,res)=>{
    const{
        date,
            sourceCurrency,
            targetCureency,
            amountInSourceCurrency,
    } = req.query;
    try{
        const dataUrl = 'https://openexchangerates.org/api/historical/$(date).json?app_id=84013cb2f52b4c6f8717b3b20e26cd33';
        const dataResponse = await axios.get(dataUrl);
        const rates = dataResponse.rates;
    
        //rates
        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targetCureency];

        //final target value 
        const targetAmount =(targetRate / sourceRate) * amountInSourceCurrency;


    //calculate the target currency
    
    }catch(err){
    console.error(err);

    }
})
//listen to a port
app.listen(5000, () => {
    console.log("SERVER STARTED");
})  ;