function leapYear(year:  number): boolean {
    // CODE FROM The Odin Project Exercises
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)
}