import { Wheel } from "../src/wheel"

test("diameter returns rim diameter + tire height * 2", () => {
    const wheel = new Wheel(26, 1.5)

    expect(wheel.diameter).toEqual(29)
})

test("circumference returns tire diameter * PI", () => {
    const wheel = new Wheel(26, 1.5)

    expect(wheel.circumference).toBeCloseTo(91.1061859)
})
