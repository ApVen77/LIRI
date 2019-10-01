//read and set environmental variables
require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");

//spotify//
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify)
    // id: f3567dbd9cc34c03adb013fb590d56ce,
    // secret: 15dc33dbbe32430fa48192333cb9e8fe 


//user input//

var command = process.argv[2]
var input = process.argv[3]

//
function getMovie(input) {
    console.log("inside movie-this")
    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=full&tomatoes=true&apikey=30b2a6af").then(function (response) {
        //console.log(response.data);
        var moviedata = response.data;
        //console.log(moviedata)
        console.log("title: " + moviedata.Title)
        console.log("year: " + moviedata.Year)
        console.log("rated: " + moviedata.Rated)
        console.log("realsed: " + moviedata.Released)
        console.log("director: " + moviedata.Director)
        console.log("Writer: " + moviedata.Writer)
        console.log("Actors: " + moviedata.Actors)
        console.log("Plot: " + moviedata.Plot)
    })
}

//launch spotify// 
//key: 15dc33dbbe32430fa48192333cb9e8fe//
function findSong(input) { 
    console.log("inside spotify-this-song")
//launch spotify// 
    axios.get("https://api.spotify.com/v1/tracks/15dc33dbbe32430fa48192333cb9e8fe")
    spotify.search({ type: 'track', query: input }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     
    console.log(data); 
    });
}

function showConcert() {
console.log("inside concert-this") 
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")


}

function doThis() {

}


function startProg(command, input) {
    switch (command) {
        case "concert-this": showConcert(input);
            break;
        case "spotify-this-song": findSong(input);
            break;
        case "movie-this": getMovie(input);
            break;
        case "do-what-it-says": doThis(input);
            break;
        default:
            console.log("LIRI doesn't know what you are talking about");
    }
}
startProg(command, input);

// node liri.js movie-this "wonder women"