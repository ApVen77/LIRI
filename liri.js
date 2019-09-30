require("dotenv").config();
var keys = require("./keys.js");

//spotify//
var Spotify = require(`spotify-this-song`)
var spotify = new Spotify(keys.spotify);

//concerts//
var Concerts = require(`concert-this`);
var concerts = new Concerts(keys.concerts)

//movie//
var Movie = require(`movie-this`)
var movie = new Concerts(keys.movie)

//do what it says//
var doSay = require(`do-what-it-says`)

//user input//

var command= process.argv[2]
var input= process.argv[3]

//
function getMovie() {

}

function findSong() {

}

function showConcert() {

}

function doThis () {

}

switch()