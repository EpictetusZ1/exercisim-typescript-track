function compute(left: string, right: string): number {
    const arr1: string[] = left.split("")
    const arr2: string[] = right.split("")
    let counter: number = 0

    if (arr1.length !== arr2.length) throw new Error('DNA strands must be of equal length.')

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] !== arr2[i]) {
          counter++
        }
    }

    return counter
}
