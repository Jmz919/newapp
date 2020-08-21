import {memberReducer, MemberState} from './member';
import {connectRouter, RouterState} from 'connected-react-router';
import {combineReducers} from "redux";
import {History} from 'history';


export interface ApplicationState {
    member: MemberState;
    router: RouterState;
}

export const createRootReducer = (history: History) =>
    combineReducers({member: memberReducer, router: connectRouter(history)});