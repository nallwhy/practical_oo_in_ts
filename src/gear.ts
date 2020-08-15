export class Gear {
    private chainring: number
    private cog: number
    // rim diameter
    private rim: number
    // tire height
    private tire: number

    constructor(chainring: number, cog: number, rim: number, tire: number) {
        this.chainring = chainring
        this.cog = cog
        this.rim = rim
        this.tire = tire
    }

    // ratio = chainring / cog
    public getRatio(): number {
        return this.chainring / this.cog
    }

    // gear inches = tire diameter * ratio
    // tier diameter = rim diameter + tire height * 2
    public getGearInches(): number {
        return (this.rim + (this.tire * 2)) * this.getRatio()
    }
}
