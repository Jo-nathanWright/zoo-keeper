class Snake {
    constructor(
        name = "",
        length = 0,
        gender = "",
        color = "",
        age = 0

    ) {
        this.name = name;
        this.length = length;
        this.gender = gender;
        this.color = color;
        this.age = age

    }
    eat(food) {
        console.log(`Slowly eats all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Snake;