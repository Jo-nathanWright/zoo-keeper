class Zebra {
    constructor(
        name = "",
        strips = 0,
        gender = "",
        color = ""

    ) {
        this.name = name;
        this.strips = strips;
        this.gender = gender;
        this.color = color

    }
    eat(food) {
        console.log(`Chews all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Zebra;