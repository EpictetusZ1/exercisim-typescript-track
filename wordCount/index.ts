function count(sentence: string): object {
    const words = new Map()
    const pattern = /(\S*)/gmi
    const wordArr = sentence.toLowerCase().match(pattern)

    for (let i = 0; i < wordArr!.length; i++) {
        if (words.has(wordArr![i])) {
            words.set(wordArr![i], words.get(wordArr![i]) + 1)
        } else {
            words.set(wordArr![i], 1)
        }
    }

    return words
}
