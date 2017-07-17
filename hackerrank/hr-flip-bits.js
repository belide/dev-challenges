//HackeRank flipping bits challenge https://www.hackerrank.com/challenges/flipping-bits

function processData(input) {
    input = input.split("\n");
    let size = input[0];

    for(i = 1; i <= size; i++){
        let binary = (input[i] >>>0).toString(2);
        binary = '0b' + binary;
        let xor = 0b11111111111111111111111111111111;
        binary = xor - binary;
        console.log(binary);
    } 
}

let input = "3\n2147483647\n1\n0";

processData(input);
