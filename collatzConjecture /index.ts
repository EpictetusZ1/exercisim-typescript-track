function steps(limit: number): number {
    let curr: number = limit
    let counter: number = 0

    if (limit <= 0) throw new Error('Only positive numbers are allowed')

    while (curr !== 1) {
        if (curr % 2 === 0) curr = curr / 2
        else curr = curr * 3 + 1
        counter++
    }

    return counter
}

steps(12)
