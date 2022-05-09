function hey(message: string): string {

    let isEmptyString: boolean = false
    let isLowerCase: boolean = true // Init to true b/c condition only met if ALL letters are caps.
    let isQuestion: boolean = false
    let isNumericOnly: boolean = false

    message = message.trim()

    const checkEmptyString = () => {
        const spacesPattern = /(?<onlySpaces>\s{3,}(?!=\w))/ig

        if (message === "") isEmptyString = true
        if (spacesPattern.test(message)) isEmptyString = true
    }

    const sentenceChecker = () => {
        const pattern = /(?<noNumbers>[a-z])/ig
        if (!pattern.test(message)) isNumericOnly = true
    }

    const checkCase = () => {
        if (message === message.toUpperCase()) isLowerCase = false
    }

    const checkQuestion = () => {
        if (message.charAt(message.length - 1) === "?") isQuestion = true
    }

    checkEmptyString()
    sentenceChecker()
    checkCase()
    checkQuestion()

    const getReply = () => {
        if (isEmptyString) return "Fine. Be that way!"

        if (isQuestion) {
            if (isNumericOnly || isLowerCase) return "Sure."
            return "Calm down, I know what I'm doing!"
        }

        if (isNumericOnly) return "Whatever."
        if (!isLowerCase) return "Whoa, chill out!"

        return "Whatever."
    }


    return getReply()
}
