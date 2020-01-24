import React from 'react';
import {Provider} from "react-redux"
import './App.css';
import Game, {} from "./letter-split"
import store from "./letter-split/store"

// @ts-ignore
store.subscribe((o,i) => {
    console.log(store.getState(), o,i)
})
const App: React.FC = () =>
    (
        <Provider store={store}>
            <Game consonants={"йцкнгшщзхфвпрлджчсмтб"} vowels={"уеёыаоэяию"}/>
        </Provider>
        // <Menu/>
        // <Dialogs/>
    );

export default App;
