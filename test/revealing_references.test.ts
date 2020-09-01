import { RevealingReferences } from "../src/revealing_references"

test("diameters returns cell[0] + (cell[1] * 2) of data", () => {
    const revealing_references = new RevealingReferences([[622, 20], [622, 23], [559, 30], [559, 40]])

    expect(revealing_references.diameters).toEqual([662, 668, 619, 639])
})
