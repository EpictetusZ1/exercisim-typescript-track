const INVALID_DIGIT_LENGTH = new Error('Incorrect number of digits')
const INVALID_COUNTRY_CODE = new Error('11 digits must start with 1')
const EXCEEDS_MAX_DIGIT_LENGTH = new Error('More than 11 digits')
const LETTERS_NOT_ALLOWED = new Error('Letters not permitted')
const NO_PUNCTUATION =  new Error('Punctuations not permitted')
const ZERO_AREA_CODE = new Error('Area code cannot start with zero')
const ONE_AREA_CODE = new Error('Area code cannot start with one')
const EXCHANGE_CODE_ZERO = new Error('Exchange code cannot start with zero')
const EXCHANGE_CODE_ONE = new Error('Exchange code cannot start with one')


function clean(phoneNum: string): string {
    const punctuationPat = /(?<invalidChars>[!"#$%&'*=,\/:;|<>?@\[\]^_`{}~])/g
    const letterPat = /([a-z])/gi
    const numPattern = /(?<phoneNum>\d{3,4})/gmi
    const phoneArr = phoneNum.match(numPattern)
    const baseNum = phoneArr!.join("")
    let cleanNum: string = baseNum

    const checkValidNums = () => {
        if (punctuationPat.test(phoneNum)) throw NO_PUNCTUATION
        if (letterPat.test(phoneNum)) throw LETTERS_NOT_ALLOWED
    }

    const checkLength = () => {
        if (baseNum.length < 10) throw INVALID_DIGIT_LENGTH
        else if (baseNum.length === 11) {
            if (baseNum.charAt(0) !== "1") throw INVALID_COUNTRY_CODE
            else cleanNum = baseNum.substring(1)
        } else if (baseNum.length >= 12) throw EXCEEDS_MAX_DIGIT_LENGTH
    }

    const checkAreaCode = () => {
        if (cleanNum.charAt(0) === "0") throw ZERO_AREA_CODE
        else if (cleanNum.charAt(0) === "1") throw ONE_AREA_CODE
    }

    const checkExchangeCode = () => {
        if (cleanNum.charAt(3) === "0") throw EXCHANGE_CODE_ZERO
        else if (cleanNum.charAt(3) === "1") throw EXCHANGE_CODE_ONE
    }

    checkValidNums()
    checkLength()
    checkAreaCode()
    checkExchangeCode()

    return cleanNum
}

