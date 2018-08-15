var loadedHandler = function (event) {
  let jsonString = '{"sports":['
  let sports = event.target.result.split('SPORT')
  sports.splice(0,1)
  for (let aSport of sports) {
	  let lines = aSport.split('\r\n')
	  let headerLine = lines[0].split(',')
	  let sportName = headerLine[1]
	  let sportVenue = headerLine[2]
	  lines.splice(0,1)
    lines.pop()
    jsonString += `{"name":"${sportName}","venue":"${sportVenue}","matches":[`
	  for (let aLine of lines) {
		  let fields = aLine.split(',')
		  let aMatch = JSON.stringify({year: fields[0], month: fields[1], day: fields[2],
		  hour: fields[3], minute: fields[4], pool: fields[5], teamA: fields[6], teamB: fields[7]})
		  jsonString += aMatch
		  jsonString += ','
	  }
    jsonString = jsonString.slice(0, -1)
    jsonString += ']},'
  }
  jsonString = jsonString.slice(0,-1)
  jsonString += ']}'
  localStorage.setItem('matchInfo', jsonString)
  go()
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
