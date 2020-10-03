import { Gear } from "../src/gear"
import { Wheel } from "../src/wheel"

describe("constructor", () => {
    test("returns new Gear with default chainring value 40", () => {
        const gear: Gear = new Gear({ cog: 10, wheel: new Wheel(0, 0) })
        expect(gear.ratio).toBeCloseTo(4)
    })

    test("returns new Gear with default cog value", () => {
        const gear: Gear = new Gear({ chainring: 36, wheel: new Wheel(0, 0) })
        expect(gear.ratio).toBeCloseTo(2)
    })
})

describe("ratio", () => {
    test("returns chainring / cog", () => {
        const gear0: Gear = new Gear({ chainring: 52, cog: 11, wheel: new Wheel(0, 0) })
        expect(gear0.ratio).toBeCloseTo(4.727)

        const gear1: Gear = new Gear({ chainring: 30, cog: 27, wheel: new Wheel(0, 0) })
        expect(gear1.ratio).toBeCloseTo(1.111)
    })
})

describe("gearInches", () => {
    test("returns tire diameter * ratio", () => {
        const gear0: Gear = new Gear({ chainring: 52, cog: 11, wheel: new Wheel(26, 1.5) })
        expect(gear0.gearInches).toBeCloseTo(137.09)

        const gear1: Gear = new Gear({ chainring: 52, cog: 11, wheel: new Wheel(24, 1.25) })
        expect(gear1.gearInches).toBeCloseTo(125.272)
    })
})
