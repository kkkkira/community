import React, { Component } from 'react';
import { Icon } from 'antd';
import { Drawer } from 'antd-mobile';
import SideBar from 'component/side-bar/SideBar';
import PubHeader from 'component/header/Header';
import { eventProxy, cookies  } from 'src/utils/utils';
import './app.less';

const { optionCookies, delCookie } = cookies;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            isLogin: false,
            userInfo: {}
        };

        this.setHeaderHide();
    }

    setHeaderHide = ()=> {
        const { state } = this.props.history.location;
        if( state && state.isHeaderHide ){
            this.isHeaderHide = state.isHeaderHide;
        }else{
            this.isHeaderHide = false;
        }
    };
    
    login = () => {
        let userInfo = optionCookies({
            username: '',
            balance: ''
        });

        this.setState({
            isLogin: true,
            userInfo: userInfo
        })
    };

    logout = () =>{
        optionCookies({
            username: '',
            balance: ''
        }, 'del');

        this.setState({
            isLogin: false,
            userInfo: {}
        })
    };

    linkToComponent = ({pathname = '', state={}}) => {
        this.props.history.push({
            pathname,
            state
        });
        this.toggle();
    };

    toggle = () =>{
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    componentWillMount(){
        let userInfo = optionCookies({
            username: '',
            balance: ''
        }),
            user = Object.entries(userInfo),
            hasUserInfo = user.length && user.every((ele)=>{
                    return ele[1];
                });

        if( hasUserInfo ) {
            this.setState({
                userInfo: userInfo,
                isLogin: true
            })
        }
        console.log('this is componentWillMount stage');
        eventProxy.on('login',this.login);
        eventProxy.on('logout',this.logout);
        eventProxy.on('linkToComponent',this.linkToComponent);
    }

    componentWillUnmount(){
    }

    render() {
        const {userInfo, isLogin, collapsed } = this.state;

        return (
            <div>
                <Drawer
                    className = 'my-drawer'
                    style = {{ minHeight: document.documentElement.clientHeight }}
                    sidebar = {
                            <SideBar
                                userInfo={ userInfo }
                                login={ isLogin }
                                history={ this.props.history }
                                changeCollapsed={ this.toggle }
                            />
                        }
                    open = { collapsed }
                    onOpenChange = { this.toggle }
                >
                    <div className="my-drawer-content">
                        { !this.isHeaderHide ? <PubHeader changeCollapsed={ this.toggle }/> : <div />  }
                        <div className={ !this.isHeaderHide ? "container" : "full-container" }>
                            { this.props.children }
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default App;
