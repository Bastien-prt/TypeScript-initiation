// Video 16 - Les classes 
// Structure qui permet de définir un objet; ressemble aux interfaces mais différent !

 class UserProfile {
     firstname: string;
     lastname: string;
     age: number;
     // video 18
     private _password: string = "testpassword" ;

     constructor( firstname: string, lastname: string,age: number)
     {
         this.firstname = firstname;
         this.lastname = lastname;
         this.age = age   
      }

    // Video 17 - Ajouter une fonction à notre classe
    displayInfo() {
        let keys= Object.keys(this);
        for (let value of keys) console.log(this[value])
    }

    // Video 18 - Propriétés Private vs Public
    // on get le password
    get password(): string {
        return this._password
    }
    // on modifie le password
    set password(newPw: string) {
        this._password = newPw
    }
 }

 const user = new UserProfile("Lydia", "Perrot" , 35)
 user.displayInfo()
 console.log(user.password)
 user.password = "modifpassword"
 console.log(user.password)

 console.log("---------------")

 const userX = new UserProfile("Justine", "Bree" , 25)
 userX.displayInfo()

 console.log(user)


//  Video 19 - Le mot clé "static" pour les classes

class People {
    firstname: string = "kati";
    static nickname: string =  "kat";

   static sayHello() {
        console.log("hello")
    }

}

const myClass = new People()

console.log(People.nickname)
// console.log(People.firstname) --> ne fonctionne pas car firstname n'est pas en static
People.sayHello()
