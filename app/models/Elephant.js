class Elephant {
    constructor(
        name = "",
        trunkLength = 0,
        gender = "",
        age = 0

    ) {
        this.name = name;
        this.trunkLength = trunkLength;
        this.gender = gender;
        this.age = age

    }
    eat(food) {
        console.log(`Eat all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Elephant;