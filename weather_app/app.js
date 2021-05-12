const request = require('postman-request');
const fs = require('fs');
const forecast = require('./utils/forecast.js');
const geolocation = require('./utils/geolocation.js');
const chalk = require('chalk');

// const url ='http://api.weatherstack.com/current?access_key=f5613a2080db88aafc1a3328334e0c83&query=';
// const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/Montreal.json?access_token=pk.eyJ1IjoiZDRuY2VyIiwiYSI6ImNrb2t2aWlmbTAzMGsycXF2YjZiczRubDkifQ.-jXhlp4nfdMPN8M919R1Tg&limit=5';

// let res;

// request({url : url, json : true}, (error, response) => {
//     if (error) {
//         console.log("some error occured");
//     } else if (response.body.error) {
//         console.log("unable to process the request");
//     } else {
//         console.log(`It's currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike}`);
//     }
// })

// request({url : url, json : true}, (error, response) => {
//     if (error) {
//         console.log("some error occured");
//     } else if (response.body.message == 'Not Found' || response.body.features.length == 0) {
//         console.log("unable to process the request");
//     } else {
//         for (item of response.body.features) {
//             console.log(item.text);
//         }
        
//     }
    
// })
const location = process.argv[2];


// console.log(process.argv)
if (!location) {
    console.log('Please provide an address')
} else {
    geolocation(location, (error, { lat, long, loc }) => {
        if (error) {
            return console.log(error);
        } 

        forecast(lat, long, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(chalk.yellow.inverse(loc)); 
            console.log(chalk.yellow.inverse(forecastData)); 
        })
    })
}

