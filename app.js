const yargs = require('yargs');

const geocode = require('./geocode');
const weather = require('./weather');

const { argv } = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h');

const { address } = argv;

geocode.geocodeAddress(address, (err, results) => {
    if (err) {
        console.log(err);
        return;
    }
    const { locations, providedLocation } = results;
    const { latLng, mapUrl } = locations[0];
    console.log(`Address: ${providedLocation.location}`);
    console.log(`Lat: ${latLng.lat} | Long: ${latLng.lng}`);
    console.log(`MAP URL: ${mapUrl}`);

    weather.getWeather(latLng.lat, latLng.lng, (errWeather, weatherResults) => {
        if (errWeather) {
            console.log(errWeather);
        } else {
            console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
        }
    });
});