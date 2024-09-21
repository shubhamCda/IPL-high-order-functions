import matches from '../data/matches.json' assert { type: 'json'};
import deliveries from '../data/deliveries.json' assert { type: 'json'};
import fs from 'fs';


const match_idx_2015 = matches.reduce((IDX, { id, season }) => {
    if (season === '2015') {
        IDX.push(id);
    }
    return IDX;
}, []);

// console.log(match_idx_2015);

const idx_2015 = new Set(match_idx_2015);

const bowlers_runs_and_balls = deliveries.reduce((data, { match_id, bowler, wide_runs, noball_runs, total_runs }) => {
    if (idx_2015.has(match_id)) {
        if (!data[bowler]) {
            data[bowler] = {
                totalRuns: 0,
                balls: 0
            }
        } else {
            data[bowler]['totalRuns'] += parseInt(total_runs);
            if (wide_runs === '0' && noball_runs === '0') {
                data[bowler]['balls'] += 1
            }
        }
        let economy = data[bowler].totalRuns / (data[bowler].balls / 6);
        data[bowler]['economy'] = economy.toFixed(2);
    }
    return data;
}, {});

// console.log(bowlers_runs_and_balls);

const top_10_economy_bowlers = Object.entries(bowlers_runs_and_balls).sort(([, a], [, b]) => {
    return a.economy - b.economy;
}).slice(0, 10).map(([bowler, stat]) => ({ bowler, economy: stat.economy }));

// console.log(top_10_economy_bowlers);

fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL_New/src/public/output/04_top_10_economical_bowlers.json', JSON.stringify(top_10_economy_bowlers, null, 2));






