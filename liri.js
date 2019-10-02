//read and set environmental variables
require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");

//spotify//
var Spotify = require("node-spotify-api")
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
})
    spotify.search({ type: 'track', query: input }, function (err, data) {
    
        if (err) {
            return console.log('Error Occured' + err);
        }
            var spotifyArr = data.tracks.items;

            for (i = 0; i < spotifyArr.length; i++) {
                console.log("song: " + spotifydata.Title)
                console.log("year: " + spotifydata.Year)
                console.log("realsed: " + spotifydata.Released)
                console.log("director: " + spotifydata.Director)
                console.log("artist: " + spotifydata.Artists)
            }
        }) 



//for concerts
var omdb = (keys.omdb);
var bandsintown = (keys.bansintown);

//for doThis
var fs = require("fs");
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

    return console.log('Error occurred: ' + err);
    {
        console.log(`------------------`);
        console.log(`This is what I found`);
        


        function showConcert(input) {
            // console.log("inside concert-this")
            var concerts= response.data    
            axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + process.env.BANDS_ID).then(function(response) {
                console.log ("Venue Name: " + concerts.data[0].venue.name); 
                console.log ("Venue Location: " + response.data[0].veue.city)
                console.log ("Date of Event: " + response.data[0].datetime)    
                }
            );

            }


        

        function doThis() {
            fs.readFile("random.txt", "utfs", function(error , data){
                if(error) {
                    return console.log (err);
                            }
                        var dataArr = data.split(", ");
                    if (dataArr[0]=== "spotify"){
                        var lookFor = dataArr[1].slice(1, -1); 
                               }

            })
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
        startProg(command, input)
    
