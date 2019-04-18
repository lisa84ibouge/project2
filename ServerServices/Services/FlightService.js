var axios = require("axios");
var moment = require("moment");
var util = require("util");



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
        console.log("before try catch");
        var p = params;
        console.log(params);
        try {
            if (typeof (params) !== "object") throw "Invaild params. Input must be an object";

            var str_dest = p.dest.replace(/"+/g, "")
            var str_home = p.home.replace(/"+/g, "");

            let qString = "http://aviation-edge.com/v2/public/autocomplete?key=" + this.API_KEY + "&city=" + str_dest;
            console.log(qString);
            let arrivalAirport = await axios.get(qString);
            console.log(arrivalAirport);
            console.log(p.home);
            let departureAirport = await axios.get("http://aviation-edge.com/v2/public/autocomplete?key=" + this.API_KEY + "&city=" + str_home);
            console.log(departureAirport.data);
            //get timetable for flights
            let flights = await axios.get(" http://aviation-edge.com/v2/public/timetable?key=" + this.API_KEY + "&iataCode=" + departureAirport.data.cities[0].codeIataCity + "&type=departure");

            let requestedFlights = [];

            for (let i = 0; i < flights.data.length; i++) {
                let arrival = flights.data[i].arrival;
                //filter departures for destination 

                if (arrival.iataCode === arrivalAirport.data.cities[0].codeIataCity && flights.data[i].status === "scheduled") {
                    //flights.data[i].arrival.scheduledTime = moment(flights.data[i].arrival.scheduledTime).format("MM-DD-YY HH:mm");
                    //flights.data[i].departure.scheduledTime = moment(flights.data[i].arrival.scheduledTime).format("MM-DD-YY HH:MM");

                    requestedFlights.push(flights.data[i]);
                }
            }
            console.log(requestedFlights);

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

module.exports = CreateAPI; 