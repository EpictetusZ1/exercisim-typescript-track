function decodedResistorValue(colors: Array<string>): string {

    const getNumVal = (color: string): number => {
        switch (color) {
            default:
            case "black": return 0
            case "brown": return 1
            case "red": return 2
            case "orange": return 3
            case "yellow": return 4
            case "green": return 5
            case "blue": return 6
            case "violet": return 7
            case "grey": return 8
            case "white": return 9
        }
    }

    const getOhms = (): string => {
        const baseVal: Array<number> = [getNumVal(colors[0]), getNumVal(colors[1])]
        const numOfZ: number = getNumVal(colors[2])

        for (let i = 0; i < numOfZ; i++) {
            baseVal.push(0)
        }

        const result: number = parseInt(baseVal.join(""))

        if (result > 1000) return `${result / 1000} kiloohms`
        else return `${result} ohms`
    }

    return getOhms()
}

decodedResistorValue(["orange", "orange", "orange"])
decodedResistorValue(["yellow", "violet", "yellow"]) // 470 kiloohms
decodedResistorValue(["orange", "orange", "black"])