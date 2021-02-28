//Pas top car si on veut créer un autre objet avec des types similaires
// il va falloir refaire name: string etc.
const info: {
    name : string, 
    age: number; 
    isMajeur: boolean; 
    hobbies: string[]
} = {
    name: "Alexis",
    age: 26,
    isMajeur: true,
    hobbies: ["Basket" , "Lecture", "Mangas"]
}

// On va donc créer un type 
type Identity = {
    name : string, 
    age: number; 
    isMajeur: boolean; 
    hobbies: string[]
};
const id: Identity = {
    name: "Alexis",
    age: 26,
    isMajeur: true,
    hobbies: ["Basket" , "Lecture", "Mangas"]
}