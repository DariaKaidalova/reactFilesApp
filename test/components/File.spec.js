import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";

import File from "../../src/components/File";

describe("File component", () => {
    it("renders provided filename", () => {
        const filename = "test-name.jpg";

        expect(shallow(<File name={ filename } />)).to.contain.text(filename);
    });
});
