export class Wheel {
    private _rim: number
    private get rim(): number {
        return this._rim
    }

    private _tire: number
    private get tire(): number {
        return this._tire
    }

    constructor(rim: number, tire: number) {
        this._rim = rim
        this._tire = tire
    }

    // tier diameter = rim diameter + tire height * 2
    public get diameter(): number {
        return this.rim + (this.tire * 2)
    }

    // circumference = tier diameter * PI
    public get circumference(): number {
        return this.diameter * Math.PI
    }
}
