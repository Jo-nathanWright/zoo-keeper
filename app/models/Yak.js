class Yak {
    constructor(
        name = "",
        horns = true,
        gender = "",
        color = ""

    ) {
        this.name = name;
        this.horns = horns;
        this.gender = gender;
        this.color = color

    }
    eat(food) {
        console.log(`Disliikes the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Yak;