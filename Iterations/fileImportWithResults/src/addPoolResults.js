var addPoolResults = function (theTournament) {
  let resultInfo = JSON.parse(localStorage.getItem('resultInfo')).sports
  for (let aSport of resultInfo) {
    let theSport = theTournament.findSport(aSport.name)
    for (let aPoolResult of aSport.poolResults) {
      console.log(aPoolResult)
      theSport.addPoolResult(aPoolResult.teamA, aPoolResult.teamB, aPoolResult.teamAScore, aPoolResult.teamBScore)
    }
  }
}
