class Narwhal {
    constructor(
        name = "",
        hornLength = 0,
        gender = "",
        color = "",
        age = 0

    ) {
        this.name = name;
        this.hornLength = hornLength;
        this.gender = gender;
        this.color = color;
        this.age = age

    }
    eat(food) {
        console.log(`Eats all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Narwhal;