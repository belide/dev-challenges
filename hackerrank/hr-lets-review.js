//Hacker rank 30 days of code, Day 6

function processData(input) {
    let inputData = input.split("\n");
    let len = inputData[0];

    for (let i = 1; i <= len; i++){
        let word = inputData[i];
        let wordEven = "";
        let wordOdd = "";
        for(let j = 0; j<word.length; j++){
            if (j % 2 === 0 || j === 0){ 
                wordEven = wordEven + word[j];
            }else if(j % 2 !== 0){
                wordOdd = wordOdd + word[j];
            }
        }
        console.log(`${wordEven} ${wordOdd}`);
    } 
}

input = "2\nHacker\nRank";
processData(input);