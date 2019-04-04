var axios = require('axios');


class API {
    constructor(apikey) {
        this.API_KEY = apikey;
    }

    /**
     * Pre-Condition: params must be an array.
     * 
     * @param {Array} params
     *  
     */
    async MakeAPICall(params) {
        try {
            if (!Array.isArray(params)) throw "Invaild params";

            let airport = await axios.get(" http://aviation-edge.com/v2/public/autocomplete?key=" + this.API_KEY + "&city=" + params[0]);
            console.log(airport.data);
            let flights = await axios.get(" http://aviation-edge.com/v2/public/timetable?key=" + this.API_KEY + "&iataCode=" + airport.data.cities[0].codeIataCity + "&type=departure");

            let requestedFlights = [];
            for (let i = 0; i < flights.data.length; i++) {
                if (flights.data[i].arrival === params[0] && flights.data[i].status === "scheduled") {
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
    return new API(apikey);
}

var a = CreateAPI("87b37c-5803db");
var b = a.MakeAPICall(["Paris", "SEA"]);
console.log(b);



module.exports = CreateAPI; 