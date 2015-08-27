var express = require('express');
var router = express.Router();

// var inputArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function shuffle(arr){
  var workArray = arr.slice(0);
  var shuffledArray = [];
  for (var i = 0; i < arr.length; i++) {
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
  res.render('home', { title: 'What would you like to do?' });
});



router.get("/shuffle", function(req, res){
  res.render("form", {title:"Shuffle"});
});
router.post('/shuffle', function(req, res, next){
  var array1 = req.body.things.split(",");
  var array2 = shuffle(array1);
  res.render("index", {
    title: "Shuffle",
    array1:req.body.things,
    array2: array2});
  });

  router.get("/chunk", function(req, res){
    res.render("form", {title:"Chunk"});
  });

  router.post("/chunk", function(req, res){
    var array1 = req.body.things.split(",");
    var group = req.body.chunks;
    res.render("index", {
      title: "Chunk",
      array1: array1,
      array2: chunk(array1, group)
    });
  });

router.get("/shuffleNChunk", function(req, res){
    res.render("form", {title:"shuffleNchunk"});
  });

  router.post("/shuffleNChunk", function(req, res){
    var array1 = req.body.things.split(",");
    var group = req.body.chunks;
    res.render("index", {
      title: "ShuffleNChunk",
      array1: array1,
      array2: chunk(shuffle(array1), group)
    });
  });
  module.exports = router;
