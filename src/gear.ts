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

    constructor(args: { chainring?: number, cog?: number, wheel: IWheel }) {
        const argsWithDefaults = { ...this.defaults(), ...args }

        this._chainring = argsWithDefaults.chainring
        this._cog = argsWithDefaults.cog
        this._wheel = argsWithDefaults.wheel
    }

    private defaults(): { chainring: number, cog: number } {
        return { chainring: 40, cog: 18 }
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
