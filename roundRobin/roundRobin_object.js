function recursiveArray(array, round) {
  if (round === 1) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (i === 0)
      array[i] = array[i]
    else if (array[i] + (array.length -2) <= array.length)
      array[i] = array[i] + (array.length -2)
    else
      array[i] = array[i] -1
  }
  return recursiveArray(array, round-1);
}

function bracket(teams) {
  evenTeams(teams);
  var pairings = [];
  var pairingIndex = 0;
  var numOfTeams = Object.keys(teams).length
  for (var i = 0; i < numOfTeams/2; i++) {
    var highSeedTeamRank = i + 1;
    var lowSeedTeamRank = numOfTeams - i;
    pairings[pairingIndex] = [teams[highSeedTeamRank], teams[lowSeedTeamRank]];
    pairingIndex++;
  }
  return pairings;
}

function evenTeams(teams) {
  if (((Object.keys(teams).length) % 2 === 0) === false)
    teams[Object.keys(teams).length + 1] = "Bye"
}


module.exports = {
  bracket: bracket,
  recursiveArray: recursiveArray
};
