import {hello} from "../src/index"

test("hello() returns \"Hello, world!\"", () => {
    expect(hello()).toEqual("Hello, world!")
})
