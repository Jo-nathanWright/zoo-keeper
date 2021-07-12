class Iguana {
    constructor(
        name = "",
        tailLength = 0,
        gender = "",
        color = "",
        spikes = 0

    ) {
        this.name = name;
        this.tailLength = tailLength;
        this.gender = gender;
        this.color = color;
        this.spikes = spikes

    }
    eat(food) {
        console.log(`Munches on all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Iguana;