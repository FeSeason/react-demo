/**
 * Created by Administrator on 2017/3/12 0012.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import routes from './routes'

import '../config/dev.js'

import 'antd/dist/antd.less';
import '../assets/main.scss';

let store = configureStore()
let rootElement = document.getElementById('app')

render(
    <Provider store={store}>
        {routes}
    </Provider>,
    rootElement
)