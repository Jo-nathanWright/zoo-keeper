class Vulture {
    constructor(
        name = "",
        wingWidth = 0,
        gender = "",
        color = "",
        age = 0

    ) {
        this.name = name;
        this.wingWidth = wingWidth;
        this.gender = gender;
        this.color = color;
        this.age = age

    }
    eat(food) {
        console.log(`Scavanges all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Vulture;