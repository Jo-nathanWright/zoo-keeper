class Beetle {
    constructor(
        name = "",
        size = "",
        gender = "",
        color = "",

    ) {
        this.name = name;
        this.size = size;
        this.gender = gender;
        this.color = color;

    }
    eat(food) {
        console.log(`Munch all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Beetle;
