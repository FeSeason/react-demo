/**
 * Created by zhenjian.hu on 2017/4/5.
 */
import React, {Component} from 'react';
import {Button} from 'antd'

class popInfo extends Component {
    constructor(props) {
        super(props)
    }
    close(){
        this.props.changeShow('123');
    }
    render() {
        let info = this.props.info
        return (
            <div className="popInfo">
                <div>姓名：{info.name}</div>
                <div>年龄：{info.old}</div>
                <div>性别：{info.sex}</div>
                <div>ID：{info.id}</div>
                <div><Button onClick={this.close.bind(this)} type='danger' icon="close">关闭</Button></div>
            </div>
        )
    }
}

export default popInfo;