class Jaguar {
    constructor(
        name = "",
        gender = "",
        color = "",
        whiskers = 0

    ) {
        this.name = name;
        this.gender = gender;
        this.color = color;
        this.whiskers = whiskers

    }
    eat(food) {
        console.log(`Devours all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Jaguar;