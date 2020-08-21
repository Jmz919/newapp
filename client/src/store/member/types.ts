import MemberModel from "./model/MemberModel";


export enum MemberActionTypes {
    FETCH_REQUEST = "@@members/FETCH_REQUEST",
    FETCH_SUCCESS = "@@members/FETCH_SUCCESS",
    FETCH_ERROR = "@@members/FETCH_ERROR"
}

export interface MemberState {
    readonly loading: boolean;
    readonly data: MemberModel[];
    readonly error?: string;
}