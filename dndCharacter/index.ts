class DnDCharacter {
    strength: number
    dexterity: number
    constitution:  number
    intelligence: number
    wisdom: number
    charisma: number
    hitpoints: number
     constructor() {
         this.strength = DnDCharacter.generateAbilityScore()
         this.dexterity = DnDCharacter.generateAbilityScore()
         this.constitution = DnDCharacter.generateAbilityScore()
         this.intelligence = DnDCharacter.generateAbilityScore()
         this.wisdom = DnDCharacter.generateAbilityScore()
         this.charisma = DnDCharacter.generateAbilityScore()
         this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
     }

    public static generateAbilityScore(): number {
        const getNum = (): number => Math.floor(Math.random() * 6) + 1
        const values: number[] = [getNum(), getNum(), getNum(), getNum()]
        const min: number = Math.min(...values)

        values.splice(values.indexOf(min), 1)

        return values.reduce( (prev, curr) => prev + curr)
    }

    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2)
    }
}

const myChar = new DnDCharacter()
console.log(myChar)