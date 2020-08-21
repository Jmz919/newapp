import {memberFetchError, memberFetchRequest, memberFetchSuccess} from "./actions";
import {callApi} from "../../utils/api";

export const getMembers = () => {
    return (dispatch: any) => {
        dispatch(memberFetchRequest())
        callApi('GET', 'api/members')
            .then(response => dispatch(memberFetchSuccess(response)))
            .catch(error => dispatch(memberFetchError(error)))
    }
}