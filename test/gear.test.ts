import { Gear } from "../src/gear"

describe("getRatio()", () => {
    test("returns chainring / cog", () => {
        const gear0: Gear = new Gear(52, 11, 0, 0)
        expect(gear0.getRatio()).toBeCloseTo(4.727)

        const gear1: Gear = new Gear(30, 27, 0, 0)
        expect(gear1.getRatio()).toBeCloseTo(1.111)
    })
})

describe("getGearInches()", () => {
    test("returns tire diameter * ratio", () => {
        const gear0: Gear = new Gear(52, 11, 26, 1.5)
        expect(gear0.getGearInches()).toBeCloseTo(137.09)

        const gear1: Gear = new Gear(52, 11, 24, 1.25)
        expect(gear1.getGearInches()).toBeCloseTo(125.272)
    })
})
