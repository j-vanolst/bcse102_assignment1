var loadedHandler = function (event) {
  let matches = '{"matches":['
  var lines = event.target.result.split('\r\n')
  for (let aLine of lines) {
    let fields = aLine.split(',')
    let aMatch = JSON.stringify({year: fields[0], month: fields[1], day: fields[2],
    hour: fields[3], minute: fields[4], pool: fields[5], teamA: fields[6], teamB: fields[7]})
    matches += aMatch
    matches += ','
  }
  matches = matches.slice(0, -1)
  matches += ']}'
  localStorage.setItem('matches', matches)
}

// define the reaction when change event happens
var fileChangeHandler = function (event) {
  "use strict";
  // console.log("file has changed!")
  var reader = new FileReader();
  reader.onload = loadedHandler;

  // console.log("here 1");
  var theFile = event.target.files[0];
  reader.readAsText(theFile);
  // console.log("here 2");
}
