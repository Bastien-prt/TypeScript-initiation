// Video 10 -- Interfaces vs Types ----------------
// Pas besoin d'utiliser l'ensemble des types déclarés dans Person
// ici, nous utilisons seulement le firstname
// INTERFACES sont plus "puissantes" que les TYPES
interface Person {
    firstname: string,
    lastname: string,
    age: number
}

const user1: Person = {
    firstname: "bastien",
    lastname: "perrot",
    age: 23
}

function hello(pers: Person) {
    console.log(`Bonjour ${pers.firstname}`)
}

hello(user1)