
function decodedValue(colors: Array<string>): number {

    const getNumVal = (color: string): string => {
        switch (color) {
            default:
            case "black": return "0"
            case "brown": return "1"
            case "red": return "2"
            case "orange": return "3"
            case "yellow": return "4"
            case "green": return "5"
            case "blue": return "6"
            case "violet": return "7"
            case "grey": return "8"
            case "white": return "9"
        }
    }

    return parseInt(getNumVal(colors[0]) + getNumVal(colors[1]))
}

decodedValue(["brown", "black"])