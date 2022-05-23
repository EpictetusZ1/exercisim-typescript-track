function commands(input: number): string[] {
    // I had a very difficult time with this one.

    if (input === 0) return []
    let sequence: string[] = []

    const makeCommands = (binVal: string) => {

        switch (binVal) {
            case "1":
                sequence.push("wink")
                break
            case "10":
                 sequence.push("double blink")
                break
            case "100":
                sequence.push("close your eyes")
                break
            case "1000":
                sequence.push("jump")
                break
            case "10000":
                sequence = sequence.reverse()
                break
            default: break
        }
    }

    let binary: string[] = input.toString(2).split("")

    let chunkSize: number = 1
    const length = binary.length

    for (let i = 1; i <= length; i++) {
        let myChunk = binary.splice(-i)

        makeCommands(myChunk.join(""))

        myChunk = myChunk.map(() => "0")
        binary = binary.concat(myChunk)
        chunkSize++
    }

    return sequence
}

commands(19)

