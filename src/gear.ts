export class Gear {
    private _chainring: number
    private get chainring(): number {
        return this._chainring
    }
    private _cog: number
    private get cog(): number {
        return this._cog
    }
    private _wheel: IWheel
    private get wheel(): IWheel {
        return this._wheel
    }

    constructor(args: { chainring: number, cog: number, wheel: IWheel }) {
        this._chainring = args.chainring
        this._cog = args.cog
        this._wheel = args.wheel
    }

    // ratio = chainring / cog
    public get ratio(): number {
        return this.chainring / this.cog
    }

    // gear inches = tire diameter * ratio
    public get gearInches(): number {
        return this.ratio * this.diameter
    }

    private get diameter(): number {
        return this.wheel.diameter
    }
}

interface IWheel {
    readonly diameter: number
}
