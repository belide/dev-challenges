/* jshint esversion: 6 */

function processData(input) {
    let data = input.split("\n");
    let numberOfContacts = data[0];
    let totalItems = data.length - 1;
    data.shift();
    let map = new Map();

    for (let i = 0; i < numberOfContacts; i++){
        let contacts = data[i].split(" ");
        map.set(contacts[0], contacts[1]);
    }
    
    for (let i = numberOfContacts; i < totalItems; i++){
        let keyword = data[i];
        let result = map.get(keyword); 
        if(!result){
            console.log("Not found");
        }else{
            console.log(`${keyword}=${result}`);
        }     
    }
}

input = "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry";

processData(input);