class Racoon {
    constructor(
        name = "",
        type = "",
        gender = "",
        age = 0,
        inGarbage = true

    ) {
        this.name = name;
        this.type = type;
        this.gender = gender;
        this.age = age;
        this.inGarbage = inGarbage

    }
    eat(food) {
        console.log(`Finds all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Racoon;