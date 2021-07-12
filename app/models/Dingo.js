class Dingo {
    constructor(
        name = "",
        weight = 0,
        gender = "",
        color = "",
        legs = 0,
        hungur = true

    ) {
        this.name = name;
        this.weight = weight;
        this.gender = gender;
        this.color = color;
        this.legs = legs;
        this.hungur = hungur

    }
    eat(food) {
        console.log(`Chow down all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Dingo;