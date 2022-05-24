type myType = { [key: string]: string[] }

function transform(old: myType) {
    const improved: { [key: string]: number } = {}
    const keys = Object.keys(old)

    for (const item of keys) {
        const valueArr = old[item]

        for (let i = 0; i < valueArr.length; i++) {
            improved[valueArr[i].toLowerCase()] = parseInt(item)
        }
    }

    return improved
}

