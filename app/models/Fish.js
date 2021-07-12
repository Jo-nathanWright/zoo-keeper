class Fish {
    constructor(
        name = "",
        stripNumber = 0,
        gender = "",
        color = "",
        length = 0

    ) {
        this.name = name;
        this.stripNumber = stripNumber;
        this.gender = gender;
        this.color = color;
        this.length = length

    }
    eat(food) {
        console.log(`Gulp all the ${Fish.name} ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Fish;