import {action} from 'typesafe-actions';
import {MemberActionTypes} from "./types";
import MemberModel from "./model/MemberModel";

export const memberFetchRequest = () => action(MemberActionTypes.FETCH_REQUEST);
export const memberFetchSuccess = (payload: MemberModel[]) => action(MemberActionTypes.FETCH_SUCCESS, payload);
export const memberFetchError = (error: string) => action(MemberActionTypes.FETCH_ERROR, error);
