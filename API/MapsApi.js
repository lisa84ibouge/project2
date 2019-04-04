var gMapClient = require('@google/maps').createClient({
    key: "",
    Promise: Promise
});

gMapClient.geocode({ address: "1201 Amgen CT W, Seattle, WA" }).asPromise().then((res) => {
    console.log(res.json.results);
}).catch((err) => {
    console.log(err);
});
