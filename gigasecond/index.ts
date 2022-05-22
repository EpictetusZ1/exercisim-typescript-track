class Gigasecond {
    currDate: Date

   constructor(myDate: Date) {
        this.currDate = myDate
   }

    public date(): Date{
        return new Date(this.currDate.getTime() + 1000000000 * 1000)
    }
}
