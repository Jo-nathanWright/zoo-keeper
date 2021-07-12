class Octopus {
    constructor(
        name = "",
        legs = 0,
        gender = "",
        color = "",
        camo = true

    ) {
        this.name = name;
        this.legs = legs;
        this.gender = gender;
        this.color = color;
        this.camo = camo

    }
    eat(food) {
        console.log(`Suction all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Octopus;