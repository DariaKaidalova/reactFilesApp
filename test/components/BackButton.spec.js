import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { spy } from "sinon";

import BackButton from "../../src/components/BackButton";

describe("BackButton component", () => {
    it("triggers action on click", () => {
        const action = spy();

        shallow(<BackButton parentId="i1" goBack={ action } />).simulate("click");
        expect(action.called).to.be.true;
    });

    it("doesn't trigger action on click when no parentId", () => {
        const action = spy();

        shallow(<BackButton goBack={ action } />).simulate("click");
        expect(action.called).to.be.false;
    });
});
