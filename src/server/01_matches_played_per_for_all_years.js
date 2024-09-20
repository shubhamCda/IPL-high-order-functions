import matches from '../data/matches.json' assert { type: 'json'};

function matches_played_per_team_each_season() {
    const played_teams = matches.reduce((acc, {  season }) => {
        // const season = match['season'];
        if (!acc[season]) {
            acc[season] = 1;
        }else{
            acc[season] += 1; 
        }
        return acc;
    },{});
    return played_teams;
}

console.log(matches_played_per_team_each_season());
