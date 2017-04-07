/**
 * Created by Administrator on 2017/3/19 0019.
 */
import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {combineReducers} from 'redux';
import user from '../reducers'

// 业务逻辑复杂时采用combineReducers拆分多个reducer

const rootReducer = combineReducers({
    user,
})
export default function configureStore(initialState) {
    const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
    let store = createStoreWithMiddleware(
        rootReducer,
        initialState,
        process.env.NODE_ENV == 'development' &&
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}