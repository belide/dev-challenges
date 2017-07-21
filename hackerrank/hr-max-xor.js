///// O(n2). Must imporve to 0(n)

function maxXor(l, r) {
    console.log(l,r);
    collection = [];
    for (let i = l; i <= r; i++) {
        for (let j = l; j <= r; j++){
            let temp = i^j;
            collection.push(temp);
        }
    }
    let result = collection.reduce(function(a, b) {
        return Math.max(a, b);
    });
    console.log(result);

}

maxXor(1,6000);