class Xantus {
    constructor(
        name = "",
        animal = "",
        gender = "",
        color = "",
        weight = 0

    ) {
        this.name = name;
        this.animal = animal;
        this.gender = gender;
        this.color = color;
        this.weight = weight

    }
    eat(food) {
        console.log(`Flys all over the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Xantus