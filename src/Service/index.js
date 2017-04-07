/**
 * Created by zhenjian.hu on 2017/4/3.
 */
import {setPromise} from '../utility'

import * as Users from './Data/users'

let userList = () => setPromise(Users);

let getUser = Id => {
    let d;
    Users.users.concat().map((item, index) => {
        if (item.id == Id) d = item
    })
    return setPromise(d)
}

export {userList, getUser}
