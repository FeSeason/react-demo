/**
 * Created by zhenjian.hu on 2017/4/3.
 */

import {GET_USERS, SAVE_USER, DEL_USER} from '../constants/ActionTypes'

let initialState = {
    list: [],
    info: {name: 'test'}
}
export default function getUsers( state=initialState, action) {
    switch (action.type) {
        case GET_USERS:
            // 【方法1】：使用ES6 Object.assign() 对象方法
            // return Object.assign({}, state, {list: action.data})
            // 【方法2】：使用ES7 对象展开运算符
            return {...state, list:action.data}
        case SAVE_USER:
            state.info = action.data;
            return Object.assign({}, state)
        case DEL_USER:
            // 注释的是我第一次写的一个错误操作方式直接操作state导致 store 内部的 state 也发生变化，最终 redux 认为dispatch 没有改变,因此不会渲染UI
            // state.list.splice(action.data, 1)
            // return Object.assign({},state)
            let d = {
                list: state.list.slice()
            }
            d.list.splice(action.data, 1)
            return Object.assign({}, state, {list: d.list});
        default:
            return state;
    }
}