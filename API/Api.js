let axios = require("axios");


class API {
    constructor(apikey) {
        this.API_KEY = apikey;
    }

    /**
     * 
     * @param {*} params
     *  
     */
    async MakeAPICall(params) {
        try {
            let airport = await axios.get(" http://aviation-edge.com/v2/public/autocomplete?key=" + this.API_KEY + "&city=" + params);
            let flights = await axios.get(" http://aviation-edge.com/v2/public/timetable?key=" + this.API_KEY + "&iataCode=" + airport.data.cities[0].codeIataCity + "&type=departure");
            return flights.data;
        } catch (err) {
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



module.exports = CreateAPI; 