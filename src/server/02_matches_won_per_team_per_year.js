import matches from '../data/matches.json' assert { type: 'json'};
import fs from 'fs';



function matches_win_count_per_year() {
    const matches_count = matches.reduce((acc, { winner, season }) =>{
        if (!acc[season]) {
            acc[season] = {};
            acc[season][winner] = 1;
        } else {
            if (acc[season][winner]) {
                acc[season][winner] += 1;
            }else{
                acc[season][winner] = 1;
            }
        }
        return acc;
    },{});
    return matches_count;
}

// console.log(matches_win_count_per_year());

const winner_count = matches_win_count_per_year();

fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL_New/src/public/output/02_matches_won_per_team_per_year.json', JSON.stringify(winner_count, null, 2));
