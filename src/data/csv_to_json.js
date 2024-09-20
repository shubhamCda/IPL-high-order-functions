import csvtojson from 'csvtojson';

import fs from 'fs';

const deliveries = '/home/shubham/Desktop/Projetc/IPL_New/src/data/deliveries.csv';
const matches = '/home/shubham/Desktop/Projetc/IPL_New/src/data/matches.csv';

csvtojson().fromFile(matches).then((jsonData) =>{
    try {
        fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL_New/src/data/matches.json', JSON.stringify(jsonData), "utf-8");
        console.log("matches.csv to matches.json conversion successfull....");
        
    } catch (err) {
        console.error("Error writing matches.json file", err);
        
    }
})

csvtojson().fromFile(deliveries).then((jsonData) =>{
    try {
        fs.writeFileSync('/home/shubham/Desktop/Projetc/IPL_New/src/data/deliveries.json', JSON.stringify(jsonData), "utf-8");
        console.log("deliveries.csv to deliveries.json conversion successfull....");
        
    } catch (err) {
        console.error("Error writing deliveries.json file", err);
        
    }
})