class Panther {
    constructor(
        name = "",
        weight = "",
        gender = "",
        color = "",
        whiskers = 0

    ) {
        this.name = name;
        this.weight = weight;
        this.gender = gender;
        this.color = color;
        this.whiskers = whiskers

    }
    eat(food) {
        console.log(`Eats all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Panther;