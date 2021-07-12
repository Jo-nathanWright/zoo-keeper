class Cat {
    constructor(
        name = "",
        type = "",
        gender = "",
        color = "",
        lives = 0,
        whiskers = 0

    ) {
        this.name = name;
        this.type = type;
        this.gender = gender;
        this.color = color;
        this.lives = lives;
        this.whiskers = whiskers

    }
    eat(food) {
        console.log(`Chew all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Cat;