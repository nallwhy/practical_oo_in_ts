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
    private _rim: number
    private get rim(): number {
        return this._rim
    }
    private _tire: number
    private get tire(): number {
        return this._tire
    }
    private _wheel?: Wheel
    private get wheel(): Wheel {
        return this._wheel || (this._wheel = new Wheel(this.rim, this.tire))
    }

    constructor(chainring: number, cog: number, rim: number, tire: number) {
        this._chainring = chainring
        this._cog = cog
        this._rim = rim
        this._tire = tire
    }

    public get ratio(): number {
        return this.chainring / this.cog
    }

    public get gearInches(): number {
        return this.ratio * this.wheel.diameter
    }
}
