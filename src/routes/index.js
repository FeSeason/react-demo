import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from '../component/App'
import Home from '../component/Home'
import Detail from '../component/Detail'
const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path="detail/:id" component={Detail}></Route>
        </Route>
    </Router>
);

export default routes;