'use strict';

// exports.hello = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }, null, 2),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };

function invokeEventReader() {
  
  //the code to get the data from db will come here
  var jobsList = require('../Serverless-FileReader-Transformer/DynamoDB/jobs-configuration.json');

  invokeFileReader(jobsList);
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Event Reader executed',
    }, null, 2),
  };

}

const csvFileReader = require('./csvfileReader');
const csvFileWriter = require('./csvFileWriter');
function invokeFileReader(jobsList) {
  //fetch the location of the inputFileSchema
  //fetch the location of the outputFileSchema
  //fetch the location of the schemaMapper for that job
  //call the function to transform
  for (const jobDetail of jobsList) {
    if (jobDetail.fileType == 'csv') { 
      csvFileReader.readCsvFile(jobDetail.containsHeader, jobDetail.inputFileLocation, (error, result) => { 
				//console.log("1. invokeFileReader -> result", result)
        
        var objMapper = require(jobDetail.schemaMapperLocation);
        objMapper.transform(result, jobDetail.inputFileSchema, jobDetail.outputFileSchema, (error, result2) => {
          
          console.log("2. invokeFileReader -> result", result2)
          // csvFileWriter.writeCsvFile(result2, jobDetail.outputFileLocation, (error, result3) => {
          //   console.log("3. invokeFileReader -> result3", result3)

          // }); //end for csvFileWriter.writeCsvFile()

        }); //end for obj.transform()
        
      }); //end for csvFileReader.readCsvFile()
    }
  }

}
invokeEventReader();
module.exports = { invokeEventReader, invokeFileReader }