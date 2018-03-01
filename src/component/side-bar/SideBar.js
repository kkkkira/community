import React, {Component} from 'react';
import {eventProxy} from 'src/utils/utils';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.less'

import UserInfo from './UserInfo';

const listLinks = [
    {
        path: '/home',
        content: '随便看看'
    }, {
        path: '/article',
        content: '找乐趣'
    }, {
        path: '/board',
        content: '找同好'
    }, {
        path: '/top',
        content: '排行榜'
    }
];
class SideBar extends Component {
    constructor(props){
        super(props);
    }
    
    jumpToPages =( opts )=>{
        console.log('jump to login page');
        eventProxy.trigger('linkToComponent', opts);
    };

    logout = () =>{
        eventProxy.trigger('logout');
    };

    render() {
        const {login, userInfo} = this.props;
        return (
            <div>
                <div className="user">
                    { login
                        ? <UserInfo userInfo={userInfo} />
                        : <div className="log-in-btn"
                               onClick={(e)=>{
                               e.stopPropagation();
                               this.jumpToPages({
                                   pathname:'/login',
                                   state:{
                                       isHeaderHide: true
                                   }
                               },e)}}>登录/注册</div>
                    }
                </div>
                <ul className="side-bar">
                    {
                        listLinks.map((item, index)=>
                            item.content ?
                                <li
                                    className="side-bar-item"
                                    key = {index}
                                    onClick = { (e)=>{this.jumpToPages({pathname:item.path})} }
                                >
                                    <div>{item.content}</div>
                                </li>
                                : ''
                        )
                    }
                </ul>
                {login ? <div className="log-out-btn" onClick={this.logout}>退出登录</div> : <div/>}
            </div>
        );
    }
}

export default SideBar;
