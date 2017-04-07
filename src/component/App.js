/**
 * Created by zhenjian.hu on 2017/4/5.
 */
import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
})