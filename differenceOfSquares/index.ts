class Squares {
    limit: number

    constructor(count: number) {
        this.limit = count
    }

    get sumOfSquares(): number {
        let acc: number = 0
        for (let i = 1; i <= this.limit; i++) acc += Math.pow(i, 2)

        return acc
    }

    get squareOfSum(): number {
        let acc: number = 0
        for (let i = 1; i <= this.limit; i++) acc +=  i

        return Math.pow(acc, 2)
    }

    get difference(): number {
        return (this.squareOfSum - this.sumOfSquares)
    }
}