class Matrix {
    rowContainer: number[][]
    singleRow: number[]
    columnContainer: number[][]
    singleColumn: number[]
    data: string
    constructor(mockMatrix: string) {
        this.rowContainer = []
        this.singleRow = []
        this.columnContainer = []
        this.singleColumn = []
        this.data = mockMatrix
    }


    get rows(): number[][] {
        const newLinePat = /\n/
        const digitPat = /\d+[\s\n]?/g
        const rowsArr = this.data.split(newLinePat)

        for (let i = 0; i < rowsArr.length; i++) {
            let matches = rowsArr[i].match(digitPat)

            for (let j = 0; j < matches!.length; j++) {
                this.singleRow.push( parseInt(matches![j]) )
            }

            this.rowContainer.push(this.singleRow)
            this.singleRow = []
        }
        return this.rowContainer
    }


    get columns(): number[][] {
        const newLinePat = /\n/
        const digitPat = /\d+[\s\n]?/g
        const rowsArr = this.data.split(newLinePat)
        const width = rowsArr[0].split(" ").length

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < rowsArr.length; j++) {
                let matches = rowsArr[j].match(digitPat)
                this.singleColumn.push(parseInt(matches![i]))
            }

            this.columnContainer.push(this.singleColumn)
            this.singleColumn = []
        }
       return this.columnContainer
    }
}


const matrix4 = new Matrix('89 1903 3\n18 3 1\n9 4 800')

