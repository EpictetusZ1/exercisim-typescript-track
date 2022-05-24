function convert(input: number): string {
    let output: string = ""

    if (input % 3 === 0) output += "Pling"
    if (input % 5 === 0) output += "Plang"
    if (input % 7 === 0) output += "Plong"
    else if (input % 3 !== 0 && input % 5 !== 0 && input % 7 !== 0) return input.toString()


    return output
}


convert(15)