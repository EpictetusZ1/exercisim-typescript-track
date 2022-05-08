function toRna(dna: string): string {
    return dna.split("").map((item) => {
        switch (item) {
            case "G":
                return "C"
            case "C":
                return "G"
            case "T":
                return "A"
            case "A":
                return "U"
            default:
                throw Error("Invalid input DNA.")
        }
    })
        .join("")
}

console.log(toRna("CC"));

console.log(toRna("ACGTGGTCTTAA"));

// ACGTGGTCTTAA
// TO Equal:
//UGCACCAGAAUU
