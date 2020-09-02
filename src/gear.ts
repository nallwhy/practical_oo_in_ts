import { Wheel } from "./wheel"

export class Gear {
    private _chainring: number
    private get chainring(): number {
        return this._chainring
    }
    private _cog: number
    private get cog(): number {
        return this._cog
    }
    private _wheel: Wheel
    private get wheel(): Wheel {
        return this._wheel
    }

    constructor(chainring: number, cog: number, rim: number, tire: number) {
        this._chainring = chainring
        this._cog = cog
        this._wheel = new Wheel(rim, tire)
    }

    public get ratio(): number {
        return this.chainring / this.cog
    }

    public get gearInches(): number {
        return this.ratio * this.wheel.diameter
    }
}
