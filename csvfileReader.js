const csv = require('csv-parser');
const fs = require('fs');


exports.readCsvFile = (hasHeader, inputFilePath, callback) => {

    const results = []; //this will hold the whole csv data

    fs.createReadStream(inputFilePath)
        .pipe(csv({ headers: false}))
        .on('data', (data) => { 

            const line = [] //this will hold the line wise data
            
            let arrayLength = (Object.keys(data)).length; // we know how many columns are there
            
            //for loop to push the data into line array
            for (let index = 0; index < arrayLength; index++) {
                line.push(data[index])
            }

            //after the line array is ready push it to the main array.
            results.push(line)
        })
        .on('end', () => {
            //console.log("Data : ", results);
            callback(null, results);
        });
};



//readCsvFile(false, '../Serverless-FileReader-Transformer/S3Bucket/Middleware/Files/CSV/DataFile/job1/SampleInputFile.csv');

