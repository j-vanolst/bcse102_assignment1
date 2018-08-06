var addShortNames = function (theTournament) {
  let aSport = theTournament.findSport('Netball')

  aSport.addShortName('Australia', 'AUS')
  aSport.addShortName('Jamaica', 'JAM')
  aSport.addShortName('South Africa', 'RSA')
  aSport.addShortName('Northern Ireland', 'NIR')
  aSport.addShortName('Barbados', 'BAR')
  aSport.addShortName('Fiji', 'FIJ')

  aSport.addShortName('England', 'ENG')
  aSport.addShortName('New Zealand', 'NZL')
  aSport.addShortName('Uganda', 'UGA')
  aSport.addShortName('Malawi', 'MAW')
  aSport.addShortName('Scotland', 'SCO')
  aSport.addShortName('Wales', 'WAL')
}
