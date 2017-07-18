//HackeRank flipping bits challenge https://www.hackerrank.com/challenges/flipping-bits

function processData(input) {
    input = input.split("\n");
    let size = input[0];
    let result;
    
    for(i = 1; i <= size; i++){
        let binary = new Number(input[i]);
        result = (binary ^ 0xffffffff) >>> 0;
        console.log(result);
    } 
}

let input = "3\n2147483647\n1\n0";

processData(input);
