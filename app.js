const request = require('request');
const yargs = require('yargs');

const { argv } = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .alias('help', 'h')
    .help();
const mapsApiKey = 'm79cyxCHr70h9wAJk1zKweDUkRxmgUgD';
const baseUrl = 'http://www.mapquestapi.com/geocoding/v1/address?'
console.log(argv.address);
const { address } = argv;
console.log(`${baseUrl}location=${encodeURIComponent(address)}&key=${mapsApiKey}`, "\n");
request({
    url: `${baseUrl}location=${encodeURIComponent(address)}&key=${mapsApiKey}`,
    json: true
}, (err, response, body) => {
    const data = response.body;
    const { results } = data;
    const { locations, providedLocation } = results[0];
    const { latLng, mapUrl } = locations[0];
    console.log(`Address: ${providedLocation.location}`);
    console.log(`Lat: ${latLng.lat} | Long: ${latLng.lng}`);
    console.log(`MAP URL: ${mapUrl}`);
});