class Warthog {
    constructor(
        name = "",
        height = 0,
        gender = "",
        color = "",
        weight = 0

    ) {
        this.name = name;
        this.height = height;
        this.gender = gender;
        this.color = color;
        this.weight = weight

    }
    eat(food) {
        console.log(`Likes eating the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Warthog;