const axios = require("axios");


class API {
    constructor (apikey){
        this.API_KEY = apikey;
    }

    async getFlights(city){
        let airport = await axios.get(" http://aviation-edge.com/v2/public/autocomplete?key="+this.API_KEY+"&city="+city);
        let flights = await axios.get(" http://aviation-edge.com/v2/public/timetable?key="+this.API_KEY+"&iataCode="+airport.data.cities[0].codeIataCity+"&type=departure");
        return flights.data;
    }
    
    
}

function CreateAPI(apikey){
    return new API(apikey);
}


module.exports = CreateAPI;