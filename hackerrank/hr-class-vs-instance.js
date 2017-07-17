//

function Person(initialAge){
    let age = initialAge; //keep initialAge, manipulate age
    
    if (age < 0) {
        console.log("Age is not valid, setting age to 0.");
        age = 0;
    }
    
    this.amIOld=function(){
        
        switch (true) {
            case (age < 13):
                console.log("You are young.");
                break;
            case (age < 18):
                console.log("You are a teenager.");
                break;
            default:
                console.log("You are old.");
        }
    };
   
    this.yearPasses=function(){        
        return age++; 
    };
}
