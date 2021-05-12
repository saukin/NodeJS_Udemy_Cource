const https = require('https');
const http = require('http');
const chalk = require('chalk');

const url ='http://api.weatherstack.com/current?access_key=f5613a2080db88aafc1a3328334e0c83&query=Montreal';

const request = http.request(url, (response) => {
    
    let data = ''
    
    response.on('data', (chunk) => {
        data += chunk.toString();
    })

    response.on('end', () => {
        console.log(JSON.parse(data))
    })
})

request.on('error', (error) => {
    console.log('An error', error);
})

request.end();