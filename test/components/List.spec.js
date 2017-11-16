import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { spy } from "sinon";

import { List } from "../../src/list/List";

describe("List component", () => {
    const actions = {
        loadFolderDetails: () => {
        },
        fetchRootData: () => {
        }
    };
    const requiredProps = {
        files: [],
        folders: [],
        info: []
    };

    it("renders list of folders", () => {
        const ListComponent = shallow(<List { ...actions } { ...requiredProps } folders={ [1, 2, 3] } />);

        expect(ListComponent).to.have.exactly(3).descendants('Folder');
    });

    it("renders list of files", () => {
        const ListComponent = shallow(<List { ...actions } { ...requiredProps } files={ [1, 2, 3] } />);
        expect(ListComponent).to.have.exactly(3).descendants('File');
    });

    it("triggers action on folder click", () => {
        const action = spy();
        const ListComponent = shallow(
            <List {...actions} { ...requiredProps } folders={ [1] } loadFolderDetails={ action } />
        );

        ListComponent.find("Folder").simulate("click");
        expect(action.called).to.be.true;
    });
});
