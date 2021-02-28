// Video 12 - propriété optionnelle ou immuable dans une interface
// Video 13 - héritage avec interface

// - ? -> pour rendre le champs optionnel (exemple avec age)
// - Readonly -> la valeur peut-être lu, mais pas modifié (PAS TOP)

interface IUserProfile {
    readonly firstname: string,
    nickname: string,
    age?: number,
    password: string
}

interface IAdvancedUserProfile extends IUserProfile {
    hobbies: string[],
    color: string,
    isMajeur: boolean
}

const user2: IAdvancedUserProfile = {
    firstname: "Alexandre",
    nickname: "Alex",
    // age: 29,
    password: "idk",
    hobbies: ["surf", "read", "chess"],
    color: "blue",
    isMajeur: true,
}
// Objet vide avec des champs undefined
const user3 = <IAdvancedUserProfile>{}

console.log(user2)

// video 14 - Fonctionnement des fonctions avec les interfaces

interface IHello {
    (name: string,
    age?: number)
    :void
}

const sayHello: IHello = (name, age) => {
    console.log(`hello ${name}, tu as ${age} ans`)
}
sayHello("alexis", 22)

const bestFriend: IHello = (name) => {
    return name
}
console.log(`l'ami de alex est ${bestFriend("jeje")}`)