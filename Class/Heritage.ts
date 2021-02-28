// Video 22 - Héritage avec les classes
// Video 20 - Mot clé Abstract pour les classes
// Video 23 - Implémenter une interface dans une classe


class ProfileUser {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class ProfilAdvancedUser extends ProfileUser { // on utilisera IMPLEMENTS et non EXTENDS si ProfileUser est une interface
    hobbies: string[];
    color: string;

    constructor(name: string, age: number, hobbies: string[], color: string){
        super(name, age); // Doit être déclaré pour pouvoir "récupérer" les champs de la classe ProfileUser
        this.hobbies = hobbies;
        this.color = color;
    }
}

const utilisateur = new ProfilAdvancedUser("alex", 22, ["lire" , "basekt"], "blue")



// ECRITURE PLUS SIMPLE POUR CLASSES !!! On delete les this.xxx 

// Video 20 - Mot clé Abstract pour les classes

// Abstract va faire en sorte qu'on ne puisse pas créer d'instance (nv utilisateur) avec la classe "visée". 
// ici, ProfileUserr
abstract class ProfileUserr {
    constructor( public name: string, public age: number){
    }
}

class ProfilAdvancedUserr extends ProfileUserr {
    constructor(name: string, age: number, public hobbies: string[], public color: string){
        super(name, age); // Doit être déclaré pour pouvoir "récupérer" les champs de la classe ProfileUser
    }
}

const utilisateur2 = new ProfilAdvancedUser("Jerem", 22, ["lire" , "basekt"], "blue")
// const utilisateur3 = new ProfileUserr ("Jerem", 22) // Il n'est donc pas possible de faire ça avec abstract déclaré devant ProfilUserr

