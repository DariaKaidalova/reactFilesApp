import React from "react";
import { Provider } from "react-redux";

export default function App({ store, List }) {
    return (
        <Provider store={ store }>
            <List />
        </Provider>
    );
}
