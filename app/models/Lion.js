class Lion {
    constructor(
        name = "",
        weight = 0,
        gender = "",
        color = "",
        maneColor = ""

    ) {
        this.name = name;
        this.weight = weight;
        this.gender = gender;
        this.color = color;
        this.maneColor = maneColor

    }
    eat(food) {
        console.log(`Consumes all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Lion;