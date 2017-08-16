
function main(arr) {
    let result = Number.MIN_SAFE_INTEGER;
    let sizeX = arr.length;
    let sizeY = arr[0].length;
    let sum = 0;
        for (let i = 0; i < sizeX - 2; i++){
            for (let j = 0; j < sizeY - 2; j++){
                let sum = [arr[i][j], arr[i][j+1], arr[i][j+2], arr[i+1][j+1], arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2]].reduce((a, b) => a + b, 0);
                
                if(sum >= result) {
                    result = sum;
                }
           }
    
    }
    console.log(result);
}

arr=[ [ 9, -9, -9, -9, -2, -2 ],
[ -2, -9, -6, -8, -2, -5 ],
[ -9, -9, -9, 2, -3, -4 ],
[ -1, -9, 2, -4, -4, -5 ],
[ -7, -3, -3, -2, -9, -9 ],
[ -1, -3, 1, -2, -4, -5 ] ]

main(arr);

