import { Gear } from "../src/gear"
import { Wheel } from "../src/wheel"

describe("ratio", () => {
    test("returns chainring / cog", () => {
        const gear0: Gear = new Gear(52, 11, new Wheel(0, 0))
        expect(gear0.ratio).toBeCloseTo(4.727)

        const gear1: Gear = new Gear(30, 27, new Wheel(0, 0))
        expect(gear1.ratio).toBeCloseTo(1.111)
    })
})

describe("gearInches", () => {
    test("returns tire diameter * ratio", () => {
        const gear0: Gear = new Gear(52, 11, new Wheel(26, 1.5))
        expect(gear0.gearInches).toBeCloseTo(137.09)

        const gear1: Gear = new Gear(52, 11, new Wheel(24, 1.25))
        expect(gear1.gearInches).toBeCloseTo(125.272)
    })
})
