import { expect } from "chai";

import reducer from "../../src/list/reducer";
import { FOLDER_INFO_FETCHED, FOLDERS_DETAILS_FETCHED, FILES_DETAILS_FETCHED } from "../../src/list/actions";

const testArray = [1,2,3];

describe("reducer", () => {
    it("returns default state", () => {
        const state = reducer(undefined, { type: "fake" });
        expect(state).to.have.deep.property("folders").that.deep.equals([]);
        expect(state).to.have.deep.property("files").that.deep.equals([]);
        expect(state).to.have.deep.property("info").that.deep.equals({});
    });

    it("adds folders from payload on FOLDERS_DETAILS_FETCHED", () => {
        expect(reducer({}, { type: FOLDERS_DETAILS_FETCHED, payload: testArray }))
            .to.be.deep.equal({ folders: testArray });
    });

    it("adds files from payload on FILES_DETAILS_FETCHED", () => {
        expect(reducer({}, { type: FILES_DETAILS_FETCHED, payload: testArray }))
            .to.be.deep.equal({ files: testArray });
    });

    it("adds info from payload on FOLDER_INFO_FETCHED", () => {
        expect(reducer({}, { type: FOLDER_INFO_FETCHED, payload: testArray }))
            .to.be.deep.equal({ info: testArray });
    });
});
