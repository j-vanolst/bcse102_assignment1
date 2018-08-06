class Controller {
  static setup () {
    const APRIL = 3 // JAN = 0!
    let the2018Games = new Tournament('Gold Coast 2018 Commonwealth Games')
    let aSport = the2018Games.addSport('Netball', 'Gold Coast Convention and Exhibition Centre')
    let matches = JSON.parse(localStorage.getItem('matches')).matches
    for (let aMatch of matches) {
      //NOTICE the 3 represents APRIL. A better way of this would probably be to use a dictionary
      aSport.addMatch(aMatch.year, 3, aMatch.day, aMatch.hour, aMatch.minute,
      aMatch.pool, aMatch.teamA, aMatch.teamB)
    }
    return the2018Games
  }
}
