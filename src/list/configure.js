import connectList from "./List";
import createActions from "./actions";

export default function createList(api) {
    return connectList(createActions(api));
};
