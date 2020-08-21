import {MemberActionTypes, MemberState} from "./types";
import {Reducer} from "redux";
import MemberModel from "./model/MemberModel";

export const initialState: MemberState = {
    data: [] as MemberModel[],
    loading: false,
    error: undefined
};

const reducer: Reducer<MemberState> = (state = initialState, action) => {
    switch(action.type) {
        case MemberActionTypes.FETCH_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case MemberActionTypes.FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        }
        case MemberActionTypes.FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export { reducer as memberReducer };
export { initialState as MemberInitState };