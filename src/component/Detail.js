/**
 * Created by zhenjian.hu on 2017/4/5.
 */
import React, {Component} from 'react'
import {Row, Col, Button} from 'antd'
import {Link, hashHistory} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getUser} from '../Service'

class Detail extends Component {
    constructor() {
        super();
    }
    change() {
        hashHistory.push('/')
    }
    componentWillMount() {

        // 注释的方法1是通过id取模拟数据中的数据，方法2（当前方法）是通过父组件点击改变路由,同时写入状态中，进入当前组件中读取
        // getUser(this.props.params.id)
        //     .then((res) => {
        //         this.setState({info: res})
        //     })
    }
    render() {
        let info = this.props.info;
        return (
            <div>
                <Row>
                    <Col span={12} offset={6}>
                        <Row>
                            <Col span={6}>{info.name}</Col>
                            <Col span={6}>{info.old}</Col>
                            <Col span={6}>{info.sex}</Col>
                        </Row>
                        <div>
                            <Button onClick={this.change.bind(this)} type='primary'>返回</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        info: state.user.info
    }

}
export default connect(mapStateToProps, null)(Detail)