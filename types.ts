let myVariable; 
myVariable = "Alex";
myVariable= 27;
myVariable= true;

let age = 27;
age = 28;
// age = "iiiii";

let myName =  "Alex"; 
myName = "Justine";
// myName = true; 


// ---- déclaration explicite de variables ----- 
let a: any;
let x: number;
let y: string;
let z: boolean;

a = 27; 
a= true;
a= "string";

x = 27; 
// x= true;
// x= "string";


// Video 04 -- Les structures de données et types ----------------

// ARRAYS
    let potes = ["Alexis", "Justine", "Sophie", 29];
    potes =[25, 22, "loic"]

    // Que pour des nombres
    let friends: number[] = [];
    friends =  [ 23, 37]

    // pour nombres et string
    let amis: (number | string )[] = [];
    amis = [22, 34, "Jeremy"]

// OBJETS
    let userData = {
        name: "Alexis",
        age: 23,
        isMajeur: true
    }
    let userDatas: {name: string; age: number; isMajeur: boolean} = {
        name: "Alexis",
        age: 23,
        isMajeur: true
    }

  