import matches from '../data/matches.json' assert { type: 'json'};
import deliveries from '../data/deliveries.json' assert { type: 'json'};
import fs from 'fs';




const get_2016_match_idx = matches.reduce((acc, { id, season }) => {
    if (season === '2016') {
        acc.push(id);
    }
    return acc;
}, []);

// console.log(get_2016_match_idx);
const idx_2016 = new Set(get_2016_match_idx);

const extras_conceded_2016 = deliveries.reduce((acc, { bowling_team, match_id, extra_runs }) => {
    if (idx_2016.has(match_id)) {
        if (extra_runs !== '0') {

            if (!acc[bowling_team]) {
                acc[bowling_team] = parseInt(extra_runs)
            } else {
                acc[bowling_team] += parseInt(extra_runs);
            }
        }

    }
    return acc;
}, {});

// console.log(extras_conceded_2016);


fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL_New/src/public/output/03_extras_conceded_per_team_2016.json', JSON.stringify(extras_conceded_2016, null, 2));
