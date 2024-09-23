import matches from '../data/matches.json' assert { type: 'json'};
import fs from 'fs';

const player_of_the_match_count = matches.reduce((player, { season, player_of_match }) =>{
    if (!player[season]) {
        player[season] = {};
    }else{
        if (!player[season][player_of_match]) {
            
            player[season][player_of_match] = 1
        }else{

            player[season][player_of_match] += 1;
        }

    }
    return player;
},{});

// console.log(player_of_the_match_count);


const player_of_match_per_season =  Object.entries(player_of_the_match_count).reduce((data, [ season, player_data ]) =>{
    data[season] = {};
    let player_name = Object.keys(player_data).reduce((max_player, player) => player_data[max_player] > player_data[player] ? max_player : player, Object.keys(player_data)[0]);
    
    data[season][player_name] = player_data[player_name];
    return data;
},{});

// console.log(Object.entries(player_of_the_match_count));
// console.log(player_of_match_per_season);

fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL_New/src/public/output/06_highest_times_player_of_match.json', JSON.stringify(player_of_match_per_season, null, 2));