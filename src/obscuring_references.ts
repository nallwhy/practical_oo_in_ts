export class ObscuringReferences {
    private _data: number[][]
    private get data() {
        return this._data
    }

    constructor(data: number[][]) {
        this._data = data
    }

    public get diameters(): number[] {
        // 0 is rim, 1 is tire
        return this.data.map(cell => cell[0] + (cell[1] * 2))
    }
}
