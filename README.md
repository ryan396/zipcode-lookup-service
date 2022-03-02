# zipcode-lookup-service
simple service to query http://www.zippopotam.us/ to obtain information about a location from country code and zipcode.

to be used with https://github.com/ryan396/zipcode-lookup-ui

## run locally
must have node.js installed: https://nodejs.org/en/
clone repo
npm install
npm start
npm test for testing

### endpoints
/health to check if server is running
/zipcode/:countryCode/:zipCode queries the zippotam api for information on locations based on country code and zipcode.
