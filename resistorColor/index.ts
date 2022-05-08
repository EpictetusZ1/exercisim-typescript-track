function resistorColor(color: string): number {
    const COLORS = [ "black", "brown", "red", "orange", "yellow",
        "green", "blue", "violet", "grey", "white" ]

    const numValue = (): number => COLORS.indexOf(color.toLowerCase())

    return numValue()
}

console.log(resistorColor("black")); // 0
console.log(resistorColor("white")); // 9
