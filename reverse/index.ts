function reverse(input: string): string {

    const inputArr = input.split("")
    const length = inputArr.length
    let revArr = []

    for (let i = 0; i < length; i++) {
        revArr.push(inputArr.pop())
    }

    return revArr.join("")
}
