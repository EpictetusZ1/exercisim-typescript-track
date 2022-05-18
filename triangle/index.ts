class Triangle {
    s1: number
    s2: number
    s3: number
    constructor(s1: number, s2: number, s3: number) {
        this.s1 = s1
        this.s2 = s2
        this.s3 = s3
    }

    badTriangle() {
        return this.s1 + this.s2 <= this.s3
            || this.s2 + this.s3 <= this.s1
            || this.s3 + this.s1 <= this.s2
    }

    get isEquilateral(): boolean {
        if (this.badTriangle()) return false
        else return this.s1 === this.s2 && this.s2 === this.s3
    }

    get isIsosceles(): boolean {
        if (this.badTriangle()) return false
        if (this.isEquilateral) return true
        return this.s1 === this.s2 || this.s2 === this.s3 || this.s3 === this.s1
    }

    get isScalene(): boolean {
        if (this.badTriangle()) return false
        if (this.isIsosceles) return false
        return this.s1 !== this.s2 || this.s2 !== this.s3 || this.s3 !== this.s1
    }
}

const triangle = new Triangle(0, 0, 0)
