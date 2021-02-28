// Video 15 -- Arrays associatifs 

// extends Array <number> ou <string> obligatoire pour faire des .push etc

interface IRepertory extends Array <number> {
    [index: number]: number;
}

const days: IRepertory = [1, 2, 3, 4, 5]

days.push(6)
console.log(days)

// Propriétés illimités (objets)

interface IObjet {
    [index: string]: any;
    sayHello: { (name: string): void}
}

const myObject: IObjet = {
    title: "Laure",
    age: 32,
    color: "blue",
    sayHello(name: string): void{
        console.log(`Bonjour à toi ${name}`)
    }
}

console.log(myObject.title)
myObject.sayHello("Laure")