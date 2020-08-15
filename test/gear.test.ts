import { Gear } from "../src/gear"

describe("getRatio()", () => {
    test("returns chainring / cog", () => {
        const gear0: Gear = new Gear(52, 11)
        expect(gear0.getRatio()).toBeCloseTo(52 / 11)

        const gear1: Gear = new Gear(30, 27)
        expect(gear1.getRatio()).toBeCloseTo(30 / 27)
    })
})
