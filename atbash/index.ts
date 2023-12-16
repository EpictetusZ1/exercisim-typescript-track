
// oof that was difficult, gotta keep practicing so I can get better at these coding challenges
export function encode(plainText: string): string {
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
    let textArr = plainText.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s/g, "").split("")

    for (let i = 0; i < textArr.length; i++) {
        const curr = textArr[i]
        const currIndex = alphabetArr.indexOf(curr)
        if (currIndex !== -1) {
            textArr[i] = alphabetArr[alphabetArr.length - 1 - currIndex]
        }
    }

    // Add a space every 5 characters
    let result = []
    for (let i = 0; i < textArr.length; i++) {
        if (i > 0 && i % 5 === 0) {
            result.push(" ")
        }
        result.push(textArr[i])
    }

    return result.join("")
}


export function decode(cipherText: string): string {
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
    let textArr = cipherText.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s/g, "").split("")
    for (let i = 0; i < textArr.length; i++) {
        const curr = textArr[i]
        const currIndex: any = alphabetArr.indexOf(curr)
        if (currIndex !== -1) {
            textArr[i] = alphabetArr[alphabetArr.length - 1 - currIndex]
        }
    }
    return textArr.join("")
}
// const data= decode('vcvix rhn')
// // "Testing,1 2 3, testing.")
// // expect(cipherText).toEqual("gvhgr mt123 gvhgr mt")
// console.log(data)
// console.log("exercism")