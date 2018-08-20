var resultsLoadedHandler = function (event) {
  let jsonString = '{"sports":['
  let sports = event.target.result.split('SPORT')
  sports.shift()
  for (let aSport of sports) {
    let lines = aSport.split('\r\n')
    let headerLine = lines[0].split(',')
    let sportName = headerLine[1]
    jsonString += `{"name":"${sportName}","poolResults":[`
    lines.splice(0, 1)
    lines.pop()
    for (let aLine of lines) {
      let fields = aLine.split(',')
      let aPoolResult = JSON.stringify({teamA: fields[0], teamB: fields[1],
      teamAScore: fields[2], teamBScore: fields[3]})
      jsonString += aPoolResult
      jsonString += ','
    }
    jsonString = jsonString.slice(0, -1)
    jsonString += ']},'
  }
  jsonString = jsonString.slice(0, -1)
  jsonString += ']}'
  localStorage.setItem('resultInfo', jsonString)
  go()
  generateResults()
}

// define the reaction when change event happens
var resultsFileChangeHandler = function (event) {
  "use strict";
  // console.log("file has changed!")
  var reader = new FileReader();
  reader.onload = resultsLoadedHandler;

  // console.log("here 1");
  var theFile = event.target.files[0];
  reader.readAsText(theFile);
  // console.log("here 2");
}
