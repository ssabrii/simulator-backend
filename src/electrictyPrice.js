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

function electricityPrice(gradient,yIntercept){
    //x get windspeed for each houshold
    //y get electricityconsumption from each houshold
    //create array with [Y,x]
    //put array in new array

    let y = 0;
    let x = 0;
    var data = [];

    if(10/*houseHolds.length*/ > 0){
        for (i = 0; i < 10/*houseHolds.length*/; i++) {
            //let houseId = houseHolds[i].householdID;
            y = (Math.random() * (10.0 - 2.0) + 2.0);//getElectricityConsumption(houseId);
            x = (Math.random() * (10.0 - 2.0) + 2.0);//getWindSpeed(houseId);
            var tupleXY = [x,y];
            data.push(tupleXY);
        }
       let result = regression.linear(data);
       gradient = result.equation[0];
       yIntercept = result.equation[1]; // Essentially the price
    }
    if(yIntercept < 0){
        yIntercept = 0;
    }
    return yIntercept;
}




//Modules to be exported used in API
module.exports = {

    getElectricityPrice: function (){
        var gradient;
        var yIntercept;
        yIntercept = electricityPrice();
        return yIntercept;
    }
}