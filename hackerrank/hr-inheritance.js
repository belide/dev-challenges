'use strict';

var _input = 'Heraldo Memelli 8135627\n2\n10 80 66 90 20 11';
var _index = 0;
_input = _input.split(new RegExp('[ \n]+'));

function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}


class Student extends Person {

    constructor (firstName, lastName, id, scores) {
        super(firstName, lastName, id, scores);
        this.scores = scores;
    }

    calculate() {
        let score = this.scores;
        let len = score.length;
        score = score.reduce((a, b) => a + b, 0)/len;
        
        let grade;
        switch (true){
            case score < 40:
            grade = "T";
            break;

            case (score >= 40 && score < 55):
             grade = "D";
            break;

            case (score >= 55 && score < 70):
             grade = "P";
            break;
            
            case (score >= 70 && score < 80):
             grade = "A";
            break;

            case (score >= 80 && score < 90):
             grade = "E";
            break;

            case (score >= 90 && score <= 100):
             grade = "O";
            break;

            default:
            grade = "Out of range";
        }
            
        return grade; 
    }
    
}




function main() {
    let firstName = read();
    let lastName = read();
    let id = +read();
    let numScores = +read();
    let testScores = new Array(numScores);

    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read();
    }

    let s = new Student(firstName, lastName, id, testScores);
    s.printPerson();
    s.calculate();
    console.log('Grade: ' + s.calculate());
}

main(_input);