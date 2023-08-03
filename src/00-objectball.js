function gameObject(){

    const gameObj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players:{
                alanAnderson: {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                reggieEvans: {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                brookLopez: {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                masonPlumlee: {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                jasonTerry: {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            }
        },
        away: {
            teamName:"Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                jeffAdrien: {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                bismakBiyombo: {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                deSagnaDiop: {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                benGordon: {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                brendanHaywood: {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        }
    }

    return gameObj;
} // end of gameObject function

function numPointsScored(playerNumber){
    let obj = gameObject();

    for(const key in obj){
        let playersObj = obj[key].players;
        
        for(const player in playersObj){
            
            if(playersObj[player].number === playerNumber){
                return playersObj[player].points;
            }
        }
    }
}

function shoeSize(playerNumber){
    let obj = gameObject();

    for(const key in obj){
        let playersObj = obj[key].players;
        
        for(const player in playersObj){
            
            if(playersObj[player].number === playerNumber){
                return playersObj[player].shoe;
            }
        }
    }
}

function teamColors(team){
    let obj = gameObject();

    for(const key in obj){
        let name = obj[key].teamName;

        if(name === team){
            return obj[key].colors;
        }
    }
}

function teamNames(){
    let obj = gameObject();
    let teamsArray = [];

    for(const key in obj){
        teamsArray.push(obj[key].teamName);
    }

    return teamsArray;
}

function playerNumbers(team){
    // return an array of the jersy numbers

    let obj = gameObject();
    let jerseyNumbersArray = [];

    for(const key in obj){
        if(obj[key].teamName === team){

            let playersObj = obj[key].players;

            for(const players in playersObj){
                jerseyNumbersArray.push(playersObj[players].number)
            }

            return jerseyNumbersArray;
        }
    }
}

function playerStats(name){
    //return an object of player stats
    const obj = gameObject();

    for(const key in obj){
        const playersObj = obj[key].players;

        for(const player in playersObj){
        
            if(player === name){
                return playersObj[player];
            }
        }
    }

}

function bigShoeRebounds(){
    const obj = gameObject();
    let biggestShoeSize = 0;
    let playerWithBiggestShoeSize;
    let numberOfRebounds = 0;

    //find player with biggest shoe size
    //1. Access the shoe size of each player
    for(const key in obj){
        
        let playersObj = obj[key].players;

        for(const player in playersObj){
            let currentPlayerShoeSize = playersObj[player].shoe;

            //2. compare shoe sizes
            if(currentPlayerShoeSize > biggestShoeSize){
                biggestShoeSize = currentPlayerShoeSize;
                playerWithBiggestShoeSize = player;
                numberOfRebounds = playersObj[player].rebounds;
            }
        }
    }
    console.log(biggestShoeSize);
    console.log(playerWithBiggestShoeSize);
    return numberOfRebounds;    
}

function mostPoints(){
    const obj = gameObject();
    let mostPointScored = 0;
    let playerWithmostPoints;
  
    //1. Access the points of each player
    for(const key in obj){
        
        let playersObj = obj[key].players;

        for(const player in playersObj){
            let currentPlayerPoints = playersObj[player].points;

            //2. compare points scored
            if(currentPlayerPoints > mostPointScored){
                mostPointScored = currentPlayerPoints;
                playerWithmostPoints = player;
            }
        }
    }
    console.log(mostPointScored)
    console.log(playerWithmostPoints)
    return playerWithmostPoints;    
}

function winningTeam(){
    const obj = gameObject();
    let homeTeamScore = 0;
    let awayTeamScore = 0;
  
    //1. Access the points of each player
    for(const key in obj){
        
        let playersObj = obj[key].players;

        for(const player in playersObj){
            let currentPlayerPoints = playersObj[player].points;

            //2. determine which team to add points to
            if(key === "home"){
                homeTeamScore += currentPlayerPoints;
            } else if (key === "away"){
                awayTeamScore += currentPlayerPoints;
            }
        }
    } 

    console.log("The home team score was " + homeTeamScore);
    console.log("The away team score was " + awayTeamScore);

    if(homeTeamScore > awayTeamScore){
        return "The home team won!! Go Brooklyn Nets"
    } else{
        return "The away team won!! Go Charlotte Hornets"
    }
}

function playerWithLongestName(){

    const obj = gameObject();
    let longestName = 0;
    let playerWithLongestName;
  
    //1. Access each player name
    for(const key in obj){
        
        let playersObj = obj[key].players;

        for(const player in playersObj){
            //2. get length of player name
            let lengthOfCurrentName = player.length;

            //3. compare the lengths of the players names
            if(lengthOfCurrentName > longestName){
                longestName = lengthOfCurrentName;
                playerWithLongestName = player;
            }
        }
    }

    console.log(longestName);
    console.log(playerWithLongestName);
    return playerWithLongestName;
}

function doesLongNameStealATon(){
    const obj = gameObject();
    let longestNamePlayer = playerWithLongestName();
    let stealsForLongestName = 0;
    let steals = 0;

    //1. Access the steals of each player
    for(const key in obj){
        
        let playersObj = obj[key].players;

        for(const player in playersObj){
            let currentPlayerSteals = playersObj[player].steals;

            //2. 
            if(player === longestNamePlayer){
                stealsForLongestName = currentPlayerSteals;
            } else if (currentPlayerSteals > steals){
                steals = currentPlayerSteals;
            }
        }
    } 

    console.log("longest name steals: " + stealsForLongestName);
    console.log("steals: " + steals);

    if(stealsForLongestName > steals){
        return true;
    }
}