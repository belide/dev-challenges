// quick and dirty

function graph(carsData) {
    let graphData = "";
    for(let i = 0; i<carsData.length; i++){
        for(let j = 0; j<carsData[i]; j++){
            graphData = graphData + "⭐️";
        }
        graphData = graphData + "\n";
    }
    console.log(graphData);
}


let carsData = [1,2,1,1,0,4,11,13,12,9,6,6,5,7,7,8,11,10,9,8,5,3,1,1,0];

graph(carsData);