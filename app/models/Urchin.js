class Urchin {
    constructor(
        name = "",
        size = "",
        gender = "",
        color = "",
        spikes = 0

    ) {
        this.name = name;
        this.size = size;
        this.gender = gender;
        this.color = color;
        this.spikes = spikes

    }
    eat(food) {
        console.log(`Sits near all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Urchin;