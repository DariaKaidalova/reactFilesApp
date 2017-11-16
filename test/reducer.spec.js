import { expect } from "chai";

import reducer from "../src/reducer";

const fakeAction = { type: "fake" };

describe("reducer", () => {
    it("list field exists", () => {
        expect(reducer(undefined, fakeAction))
            .to.have.property("list");
    });
});
