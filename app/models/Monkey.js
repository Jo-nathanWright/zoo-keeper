class Monkey {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        height = 0,
        tailLength = '',
    ) {
        this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.tailLength = tailLength;
    }
    eat(food) {
        console.log(`Enjoys all the ${food}ies.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Monkey;