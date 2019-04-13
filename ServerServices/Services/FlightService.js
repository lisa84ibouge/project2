var axios = require("axios");
var moment = require("moment");



class FlightsService {
    constructor(apikey) {
        this.API_KEY = apikey;
    }

    /**
     * Pre-Condition: params must be an object.
     * 
     * @param {Object} params {dest , home} where dest and home are cities
     *  Accepts an objects two properties, dest and home
     * @returns An Array of objects. Returns an empty array if there are no results.
     */
    async MakeAPICall(params) {
        try {
            if (typeof (params) !== "object") throw "Invaild params. Input must be an object";
            console.log(params);
            console.log(this.API_KEY);
            //get iataCode for city

            let arrivalAirport = await axios.get("http://aviation-edge.com/v2/public/autocomplete?key=" + this.API_KEY + "&city=" + params.dest);

            let departureAirport = await axios.get("http://aviation-edge.com/v2/public/autocomplete?key=" + this.API_KEY + "&city=" + params.home);

            //get timetable for flights
            let flights = await axios.get(" http://aviation-edge.com/v2/public/timetable?key=" + this.API_KEY + "&iataCode=" + departureAirport.data.cities[0].codeIataCity + "&type=departure");

            let requestedFlights = [];

            for (let i = 0; i < flights.data.length; i++) {
                let arrival = flights.data[i].arrival;
                //filter departures for destination 
                console.log("departcle" + arrival.iataCode);
                console.log("arrival" + departureAirport.data.cities[0].codeIataCity);
                if (arrival.iataCode === arrivalAirport.data.cities[0].codeIataCity && flights.data[i].status === "scheduled") {
                    flights.data[i].arrival.scheduledTime = moment(flights.data[i].arrival.scheduledTime).format("MM-DD-YY HH:mm");
                    flights.data[i].departure.scheduledTime = moment(flights.data[i].arrival.scheduledTime).format("MM-DD-YY HH:MM");

                    requestedFlights.push(flights.data[i]);
                }
            }

            console.log(requestedFlights.length);
            return requestedFlights;
        } catch (err) {
            console.log("error");
            console.log(err);

        }
    }
}

/**
 * Creates the api object.
 * @param {String} apikey 
 * 
 */
function CreateAPI(apikey) {
    return new FlightsService(apikey);
}
// var d = CreateAPI("87b37c-5803db");
// console.log(d.MakeAPICall({ dest: "Portland", home: "Boston" }));

module.exports = CreateAPI; 