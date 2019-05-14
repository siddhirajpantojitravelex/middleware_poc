// include node fs module
var fs = require('fs');

var csvDelimiter = ',';
var newLine = '\r\n';
var csvString = '';


exports.writeCsvFile = (outArray, outputFilePath, callback) => {
console.log("exports.writeCsvFile -> outArray", outArray)

    //var outArray = [[1, 2, 3], [4, 5, 6]];

    outArray.forEach(elementArray => {
        elementArray.forEach(element => {
            csvString += element + csvDelimiter;
        });
        csvString += newLine;
    });
    console.log(csvString)


    // writeFile function with filename, content and callback function
    fs.writeFile('../newfile.csv', csvString, function (err) {
        if (err) throw err;

        callback(null, "File is created successfully.")
    });

};