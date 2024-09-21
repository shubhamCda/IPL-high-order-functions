import matches from '../data/matches.json' assert { type: 'json'};
import fs from 'fs';

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

// console.log(matches_played_per_team_each_season());

const count_for_matches_per_season = matches_played_per_team_each_season();

fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL_New/src/public/output/1_matches_per_year.json', JSON.stringify(count_for_matches_per_season, null, 2));