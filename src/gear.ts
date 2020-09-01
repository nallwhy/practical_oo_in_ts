export class Gear {
    private _chainring: number
    private get chainring(): number {
        return this._chainring
    }
    private _cog: number
    private get cog(): number {
        return this._cog
    }
    // rim diameter
    private _rim: number
    private get rim(): number {
        return this._rim
    }
    // tire height
    private _tire: number
    private get tire(): number {
        return this._tire
    }

    constructor(chainring: number, cog: number, rim: number, tire: number) {
        this._chainring = chainring
        this._cog = cog
        this._rim = rim
        this._tire = tire
    }

    // ratio = chainring / cog
    public get ratio(): number {
        return this.chainring / this.cog
    }

    // gear inches = tire diameter * ratio
    // tier diameter = rim diameter + tire height * 2
    public get gearInches(): number {
        return (this.rim + (this.tire * 2)) * this.ratio
    }
}
