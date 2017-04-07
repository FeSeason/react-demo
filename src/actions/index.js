/**
 * Created by zhenjian.hu on 2017/4/3.
 */
import {GET_USERS, SAVE_USER, DEL_USER} from '../constants/ActionTypes';
import {userList} from '../Service'

export function getUsers () {
    return dispatch => {
        userList()
            .then((res) => {
                dispatch({type: GET_USERS, data: res.users})
            })
    }
}
export function saveUser (info) {
    return dispatch => dispatch({type: SAVE_USER, data: info})
}
export function delUser (info) {
    return dispatch => dispatch({type: DEL_USER, data: info})
}
