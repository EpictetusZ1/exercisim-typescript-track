function age(planet: string, seconds: number): number {
    const earthAge: number = seconds / 31557600

    const getPlanetAge = (): number => {
        switch (planet) {
            default:
            case "earth":
                return earthAge
            case "mercury":
                return earthAge / 0.2408467
            case "venus":
                return earthAge / 0.61519726
            case "mars":
                return earthAge / 1.8808158
            case "jupiter":
                return earthAge / 11.862615
            case "saturn":
                return earthAge / 29.447498
            case "uranus":
                return earthAge / 84.016846
            case "neptune":
                return earthAge / 164.79132
        }
    }

    return parseFloat(getPlanetAge().toFixed(2))
}

age("earth",1000000000)
age('mercury', 2134835688)
age('jupiter', 901876382)
