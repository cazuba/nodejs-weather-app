const request = require('request');

const config = require('../config');

const { geocodeInfo } = config;

const geocodeAddress = (address, callback) => {
    request({
        url: `${geocodeInfo.baseUrl}?location=${encodeURIComponent(address)}&key=${geocodeInfo.apiKey}`,
        json: true
    }, (err, response, body) => {
        if (err) {
            callback('Unable to connect to Mapquest API', null);
            return;
        }
        const { results } = body;
        if (results.length === 0 || !results[0].locations || results[0].locations.length === 0) {
            callback('Unable to find locations with that address', null);
            return;
        }
        callback(null, results[0]);
    });
};

module.exports = { geocodeAddress };