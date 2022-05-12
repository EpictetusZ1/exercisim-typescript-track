class GradeSchool {
    private readonly allStudents: { [index: number]: string[] }
    constructor() {
        this.allStudents = {}
    }

    roster() {
        return JSON.parse(JSON.stringify(this.allStudents))
    }

    add(name: string, grade: number) {
        let keys = Object.keys(this.allStudents)

        if (!this.allStudents[grade]) this.allStudents[grade] = []

        for (const key of keys) {
            let gradeInt: number = parseInt(key)
            let isFound: number = this.allStudents[gradeInt].indexOf(name)

            if (isFound !== -1) this.allStudents[gradeInt].splice(isFound, 1)
        }

        this.allStudents[grade].push(name)
        this.allStudents[grade].sort()
    }

    grade(gradeNum: number) {
        if (!this.allStudents[gradeNum]) return []
        return JSON.parse(JSON.stringify(this.allStudents[gradeNum])) || []
    }

}