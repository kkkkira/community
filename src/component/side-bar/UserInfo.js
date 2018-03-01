import React, {Component} from 'react';
import {eventProxy} from 'src/utils/utils';
import { Icon } from 'antd';

class UserInfo extends Component {
    constructor(props){
        super(props);
        this.jumpToPages = this.jumpToPages.bind(this);
    }
    
    jumpToPages( opts, e ){
        e.stopPropagation();
        eventProxy.trigger('linkToComponent', opts);
    }
    render() {
        const { username, balance } = this.props.userInfo;
        return (
            <div>
                <div className="user-avatar"
                     onClick={(e)=>{
                        this.jumpToPages({
                            pathname: '/user'
                        },e)}}>
                    <Icon type="user" />
                </div>
                <div className="username">{username}</div>
                <div className="user-info">
                    <div className="balance">粉丝: <span>{balance}</span>人</div>
                    <div className="phone-btn">绑定手机号</div>
                </div>
            </div>
        );
    }
}

export default UserInfo;
