function translate(rna: string): string[] {
    const rnaPat = /(?<rnaGroup>\w{3}?)/gm
    const terminationPat = /(?<stop>UAA|UAG|UGA)/gmi
    const rnaArr = rna.match(rnaPat)
    let proteins: string[] = []

    for (const rnaString of rnaArr!) {
        if (terminationPat.test(rnaString)) return proteins
        switch (rnaString) {
            case "AUG":
                proteins.push("Methionine")
                break
            case "UUU":
            case "UUC":
                proteins.push("Phenylalanine")
                break
            case "UUA":
            case "UUG":
                proteins.push("Leucine")
                break
            case "UCU":
            case "UCC":
            case "UCA":
            case "UCG":
                proteins.push("Serine")
                break
            case "UAU":
            case "UAC":
                proteins.push("Tyrosine")
                break
            case "UGU":
            case "UGC":
                proteins.push("Cysteine")
                break
            case "UGG":
                proteins.push("Tryptophan")
                break
        }
    }

    return proteins
}
