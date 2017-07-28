//The application acceps a string and returns OK if this string is valid JSON or ERROR if the string is not a valid JSON

/* jshint esversion: 6 */

function validator(jsonString){
    const len = jsonString.length;
    let index = 0;

    if(jsonString[index] == '{'){
        index++;
        lookingForQuotes(jsonString[index], index);
    }else{
        error();
    }
        
    function lookingForQuotes(currentCharacter, index){
        if(currentCharacter === ' ' ){
            index++;
            lookingForQuotes(jsonString[index], index);
        }else if(currentCharacter === '"'){
            index++;
            lookingForLetters(jsonString[index], index);
        }else if(currentCharacter === "}"){
            valid();
        }else{
            error();
        }
    }

    function lookingForLetters(currentCharacter, index){
        const keyValues = new RegExp(/\w+/);
        if(currentCharacter === '"'){
            index++;
            lookingForColon(jsonString[index], index);
        }else if(keyValues.test(currentCharacter)){
            index++;
            lookingForLetters(jsonString[index], index);
        }else{
            error(); 
        }
    }

    function lookingForColon(currentCharacter, index){
        if(currentCharacter === ' '){
            index++;
            lookingForColon(jsonString[index], index);
        }else if(currentCharacter === ':'){
            index++;
            lookingForNumbers(jsonString[index], index);
        }else{
            error();
        }
    }

    function lookingForNumbers(currentCharacter, index){
        const valueValues = new RegExp(/\d/);
        if(currentCharacter === ' '){
            index++;
            lookingForNumbers(jsonString[index], index);
        }else if(currentCharacter === ','){
            index++;
            lookingForQuotes(jsonString[index], index);
        }else if(currentCharacter === '}'){
            valid();
        }else if(valueValues.test(currentCharacter)){
            index++;
            lookingForNumbers(jsonString[index], index);
        }else{
            error(); 
        }
    }

    function error(){
        console.log("🚫 This JSON sucks!");
    }   

    function valid(){
        console.log("🔥 This JSON fucks!");
    }
}

//Test values
var test0 = '{}';
var test1 = '{ "foo": 3 }';
var test2 = '{ "foo": 3, "bar": 723 }';

var fail0 = '{';
var fail1 = '{ "foo: 3 }';
var fail2 = '{ "foo": 3; "bar": 723 }';

validator(test0);
validator(test1);
validator(test2);

validator(fail0);
validator(fail1);
validator(fail2);