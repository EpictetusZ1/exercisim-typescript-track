class Series {
    series: string[]
    input: string
    constructor(input: string) {
        this.input = input
        this.series = input.split("")
    }

    slices(sliceLength: number): number[][] {
        if (this.input === "") throw new Error('series cannot be empty')
        else if (sliceLength === 0) throw new Error('slice length cannot be zero')
        else if (sliceLength < 0) throw new Error('slice length cannot be negative')
        else if (sliceLength > this.series.length) throw new Error('slice length cannot be greater than series length')

        const limit = this.series.length - sliceLength + 1
        let mySlices: number[][] = []

        for (let i = 0; i < limit; i++) {
            let single: number[] = []

            for (let j = 0; j < sliceLength; j++) {
                single.push(parseInt(this.series[j]))
            }

            mySlices.push(single)
            this.series.shift()
        }
        return mySlices
    }
}
