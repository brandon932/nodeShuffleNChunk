var express = require('express');
var router = express.Router();

var inputArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function shuffle(arr){
  var workArray = arr.slice(0);
  var shuffledArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    var x =   Math.floor(Math.random() * workArray.length);
    shuffledArray.push(workArray.splice(x,1));
  }
  return shuffledArray;
}

function chunk(arr, chunks){
  var chunkedArr = [];
  var i,j,temparray, n = arr.length/chunks;
  for (i=0; i < arr.length; i+=n) {
    temparray = arr.slice(i,i+n);
    chunkedArr.push(temparray);
  }
  return chunkedArr;
}

router.get('/', function(req, res, next) {
  res.render('form', { title: 'Math' });
});

router.post('/submit', function(req, res, next){
  res.send('hello');
  // res.render("index", {title: "submit"});
});

router.get("/shuffle", function(req, res){
  // res.send(shuffle(inputArray));
  res.render("index", {
    title: "Shuffle",
    array1: inputArray,
    array2: shuffle(inputArray).join(", ")});

  });
  router.get("/chunk", function(req, res){
    // res.send(chunk(inputArray, 2));
    res.render("index", {
      title: "Chunk",
      array1: inputArray,
      array2: chunk(inputArray, 5)
    });
  });

  module.exports = router;
