import {ApplicationState, createRootReducer} from "./store";
import {applyMiddleware, createStore, Store} from "redux";
import {routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk";
import {History} from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {
    const composeEnhancers = composeWithDevTools(
        applyMiddleware(routerMiddleware(history), thunk),
    );


    const store = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers,
    )

    return store;
}