export class RevealingReferences {
    private _wheels: Wheel[]
    private get wheels(): Wheel[] {
        return this._wheels
    }

    constructor(data: number[][]) {
        this._wheels = this.wheelify(data)
    }

    public get diameters(): number[] {
        return this.wheels.map(wheel => wheel.rim + (wheel.tire * 2))
    }

    private wheelify(data: number[][]): Wheel[] {
        return data.map(cell => {
            return { rim: cell[0], tire: cell[1] }
        })
    }
}

interface Wheel {
    rim: number
    tire: number
}
