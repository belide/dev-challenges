// One of the challenges on Hackerrank https://www.hackerrank.com/challenges/sum-vs-xor/problem

function solve(n) {
    //converting n to binary
    const num  = n.toString(2);
    
    //setting counter of zeroes to, well, zero
    let counter = 0;
   
    let result;

    //looping over ones and zeroes, counting zeroes
    for(let i = 0; i < num.length; i++) {
        if(num[i] === '0') {
            counter++;
        }
    }
    
    //if n was a zero in the first place, returning 1 since 0 XOR 0 === 0 + 0.
    if(n === 0) {
        result = 1;
    }else if(n !== 0) {
        //the answer we are looking for is the 2 (our base) to the number-of-zeroes-th power.
        
        result = Math.pow(2, counter);
        console.log(result);
    }
    
}

solve(1399511627776);
