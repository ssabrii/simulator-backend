var regression = require('regression')

//const consumption = require('./simulation/electricityConsumption')
//const { Household } = require('/dbModels')

//The current electricity price can 
//then be derived using the electricity consumption (demand)
//and wind speed (supply of cheaper power) 
// using for example a simple linear function.
//linear regression
//Y = electricalConsumption
//x = windspeed
//Y = ax + b
//Find a and b 

function electricityPrice(){
    //x get windspeed for each houshold
    //y get electricityconsumption from each houshold
    //create array with [Y,x]
    //put array in new array

    var yIntercept = 0;
    var gradient = 0;
    var y = 0;
    var x = 0;
    var tupleXY = new Array();
    var data = new Array();
    if(10/*houseHolds.length*/ > 0){
        for (i = 0; i < 10/*houseHolds.length*/; i++) {
            //let houseId = houseHolds[i].householdID;
            y = (Math.random() * (10.0 - 2.0) + 2.0).toFixed(2);//getElectricityConsumption(houseId);
            x = (Math.random() * (10.0 - 2.0) + 2.0).toFixed(2);//getWindSpeed(houseId);
            var tupleXY = [y,x];
            data.push(tupleXY);
        }
      var result = regression.linear(data);
       gradient = result.equation[0];
       yIntercept = result.equation[1]; // Essentially the price
    }
    return gradient;
}




//Modules to be exported used in API
module.exports = {

    getElectricityPrice: function (){
        var price = electricityPrice();
        return price;
    }
}