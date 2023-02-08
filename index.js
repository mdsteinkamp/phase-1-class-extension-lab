class Polygon {

    constructor(side) {
        this.side = side
    }

    get countSides() {
        return this.side.length
    }

    get perimeter() {
        return this.side.reduce((a, c) => a + c, 0)
    }
}

class Triangle extends Polygon {

    get isValid() {
        const sides = this.side.map(num =>num).sort((a, b) => a - b)
        return sides[0] + sides[1] > sides[2] ? true : false
    }

}

class Square extends Polygon {

    get isValid() {
        return new Set(this.side).size === 1
    }

    get area() {
        return this.side[0] * this.side[0]
    }

}