export class Gear {
    private chainring: number
    private cog: number

    constructor(chainring: number, cog: number) {
        this.chainring = chainring
        this.cog = cog
    }

    // ratio = chainring / cog
    public getRatio(): number {
        return this.chainring / this.cog
    }
}
