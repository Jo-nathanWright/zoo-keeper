class Kangaroo {
    constructor(
        name = "",
        pouchSize = 0,
        gender = "",
        color = "",
        kids = 0

    ) {
        this.name = name;
        this.pouchSize = pouchSize;
        this.gender = gender;
        this.color = color;
        this.kids = kids

    }
    eat(food) {
        console.log(`Hops on all the ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}!`)
    }
}
export default Kangaroo;