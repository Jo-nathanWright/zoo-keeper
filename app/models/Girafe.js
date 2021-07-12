class Girafe {
    constructor(
        name = "",
        height = 0,
        gender = "",
        spotNumber = 0
    ) {
        this.name = name;
        this.height = height;
        this.gender = gender;
        this.spotNumber = spotNumber

    }
    eat(food) {
        console.log(`Eats all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Girafe;