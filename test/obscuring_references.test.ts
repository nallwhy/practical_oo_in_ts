import { ObscuringReferences } from "../src/obscuring_references"

test("diameters returns cell[0] + (cell[1] * 2) of data", () => {
    const obscuring_references = new ObscuringReferences([[622, 20], [622, 23], [559, 30], [559, 40]])

    expect(obscuring_references.diameters).toEqual([662, 668, 619, 639])
})
