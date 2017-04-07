/**
 * Created by zhenjian.hu on 2017/4/3.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Row, Col, Table, Icon, Button, Modal} from 'antd'
import {Link} from 'react-router'
import {getUsers, saveUser, delUser} from '../actions'
import Pop from './PopInfo.js'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            topInfo: {}
        }
    }
    // 模态框控制
    showModal() {
        this.setState({visible: true});
    }
    // 模态框确认控制
    handleOk(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    // 模态框取消控制
    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    componentDidMount() {
        this.props.actions.getUsers();
    }
    // 写入数据到 redux
    saveInfo(info){
        this.props.actions.saveUser(info)
    }
    // 设置状态
    showTop(info){
        this.setState({topInfo: info})
    }
    // 传入子组件的方法用于改变父组件的状态
    changeShow(){
        this.setState({topInfo: {}})
    }
    // 删除用户信息
    delUser(user){
        this.props.actions.delUser(user)
    }
    render() {
        const columns =
            [{
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: (text, record) =>(
                    // 点击姓名列显示顶部
                    <a href="javascript:;" onClick={()=>this.showTop(record)}>{text}</a>
                ),
            }, {
                title: 'Age',
                dataIndex: 'old',
                key: 'old',
            }, {
                title: 'Sex',
                dataIndex: 'sex',
                key: 'sex',
            }, {
                title: 'Action',
                key: 'action',
                render: (text, record, index) => (
                    <span>
                    <Link to={`/detail/${record.uid}`} onClick={ () => this.saveInfo(record)}>
                        <Button size="small"  type="primary">{record.name}</Button>
                    </Link>
                    <span className="ant-divider"/>
                    <a href="javascript:;" onClick={()=> this.delUser(index)}>Delete</a>
                </span>
                ),
            }];
        let userList = this.props.userList;
        return (
            <div>
                <Row>
                    <Col span={10} offset={6}>
                        {
                            this.state.topInfo.id ? <Pop info={this.state.topInfo} changeShow={this.changeShow.bind(this)} /> : null
                        }
                        <h3 className="title">用户列表
                            <Button
                                onClick={ () => this.showModal()} size="small"
                                type="primary">模态框</Button>
                        </h3>
                        <Table columns={columns} rowKey='uid' dataSource={userList}/>
                    </Col>
                </Row>
                <Modal title="Basic Modal" visible={this.state.visible}
                       onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userList: state.user.list
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getUsers,saveUser,delUser
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)