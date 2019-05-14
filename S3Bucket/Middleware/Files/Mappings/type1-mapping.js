//var inSchema = require('../CSV/Schema/type1-in-schema');
//var outSchema = new require('../Out/type1-out-schema')();

//var objectMapper = require('object-mapper');
var outSchema1 = require('../OutputSchema/type1-out-schema');

module.exports.transform = (dataArray, inSchema, outSchema, callback) => { 

    const mainArray = [];
    
    dataArray.forEach(elementArray => {
		//console.log("module.exports.transform -> elementArray", elementArray)
        
        const lineArray = [];
        elementArray.forEach(element => {
			console.log("module.exports.transform -> element", element)
            
        });
        
    });
    
    // objOutSchema.indexNumber = 1;
    // objOutSchema.fullName = result[0] + ' ' + result[1];
    // objOutSchema.age = 26;
    // objOutSchema.dob = result[2];

    callback(null, null);

}