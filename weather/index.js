const request = require('request');

const config = require('../config');
const { weatherInfo } = config;

const getWeather = (lat, lng, callback) => {
    request({
        url: `${weatherInfo.baseUrl}/${weatherInfo.apiKey}/${lat},${lng}`,
        json: true
    }, (err, response, body) => {
        if (err) {
            return callback('There was an error fetching the Weather', null);
        } else if (response.statusCode === 400) {
            return callback('Bad request to fetch the Weather', null);
        } else if (response.statusCode === 404) {
            return callback('Weather information not found', null);
        }
        return callback(null, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
    });
};

module.exports = {
    getWeather
};