class Hippo {
    constructor(
        name = "",
        weight = 0,
        gender = "",
        teeth = 0

    ) {
        this.name = name;
        this.weight = weight;
        this.gender = gender;
        this.teeth = teeth

    }
    eat(food) {
        console.log(`Chomps all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Hippo;