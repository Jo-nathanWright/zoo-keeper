class Tiger {
    constructor(
        name = "",
        age = 0,
        gender = "",
        color = ""
    ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.color = color
    }
    eat(food) {
        console.log(`Destroys all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Tiger;