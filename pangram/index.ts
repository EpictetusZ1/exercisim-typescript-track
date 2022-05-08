function isPangram(sentence: string): boolean {
    const alphabet: string[] = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"
    ]
    const checker = new Map()

    for (let i = 0; i < alphabet.length; i++) {
        checker.set(alphabet[i], false)
    }

    const initPass = () => {
        if (sentence === "") return false
        const lower = sentence.replace(/['"]+/g, '').toLowerCase()
        for (let i = 0; i < sentence.length; i++) {
            checkString(lower.charAt(i))
        }
    }

    const checkString = (letter: string) => {
        if (checker.get(letter) === false) {
            checker.set(letter, true)
        }
    }

    initPass()

    let result: boolean = true

    for (const [key, value] of checker) {
        if (value === false) {
            result = false
        }
    }

    return result
}

isPangram("no")
isPangram('the quick brown fox jumps over the lazy dog')
isPangram('"Five quacking Zephyrs jolt my wax bed."')
