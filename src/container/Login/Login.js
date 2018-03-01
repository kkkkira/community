import React, {Component} from 'react';
import { Icon } from 'antd';
import { validate,eventProxy,cookies } from 'src/utils/utils';
import LogForm from './LogForm';
import './login.less'

const {setCookies} = cookies;

// 表单数据
const FormType = {
    signIn: {
        inputData: [{
            name: 'username',
            type: 'text',
            plh: '请输入手机号',
            msg: '请输入正确的11位手机号',
            reg: /^\d{11}$/i
        },{
            name: 'password',
            type: 'password',
            plh: '请输入密码',
            msg: '请输入6-15位密码',
            reg: /^.{6,15}$/i
        }],
        btnText: '登录',
        fetchObj:{
            url: 'https://easy-mock.com/mock/5a716919bb0e7828e0066a4d/api/login',
            method: 'POST',
            callResolve: (data)=>{
                if( data.success ){
                    setCookies([{
                        name: 'username',
                        value: this.state.inputValues[0]
                    },{
                        name: 'balance',
                        value: '3000'
                    }]);
                    eventProxy.trigger('login');
                    this.props.history.goBack();
                }
            }
        }
    },
    signUp:{
        inputData: [{
            name: 'username',
            type: 'text',
            plh: '请输入手机号注册',
            msg: '请输入正确的11位手机号',
            reg: /^\d{11}$/i
        },{
            name: 'password',
            type: 'password',
            plh: '请输入密码',
            msg: '请输入6-15位密码',
            reg: /^.{6,15}$/i
        },{
            name: 'password',
            type: 'password',
            plh: '请再次输入密码',
            msg: '请输入6-15位密码',
            reg: /^.{6,15}$/i
        }],
        btnText: '注册',
        fetchObj:{
            url: 'https://easy-mock.com/mock/5a716919bb0e7828e0066a4d/api/login',
            method: 'POST',
            callResolve: (data)=>{
                if( data.success ){
                    setCookies([{
                        name: 'username',
                        value: this.state.inputValues[0]
                    },{
                        name: 'balance',
                        value: '3000'
                    }]);
                    eventProxy.trigger('login');
                    this.props.history.goBack();
                }
            }
        }
    }
};
//高阶组件，传递表单数据
function WithLogForm(Component, data){
    return function (props) {
            return(
                <Component data={data} {...props}/>
            )
        }
}
const SignIn = WithLogForm(LogForm, FormType.signIn);
const SignUp = WithLogForm(LogForm, FormType.signUp);

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoginForm : true
        };
        console.log(this.props.history)
    }


    toggleFormType =() =>{
        this.setState({
            isLoginForm: !this.state.isLoginForm
        })
    };
    
    login =(values) =>{
        fetch('https://easy-mock.com/mock/5a716919bb0e7828e0066a4d/api/login',{
            method: 'POST'
        })
            .then((res)=>{
                if(res.ok){return res.json()}
            })
            .then((data)=>{
                if( data.success ){
                    setCookies([{
                        name: 'username',
                        value: values[0]
                    },{
                        name: 'balance',
                        value: '3000'
                    }]);
                    eventProxy.trigger('login');
                    this.props.history.goBack();
                }
            })  
    };


    render() {
        const { history } = this.props;
        return (
            <div className="login-container">
                <Icon
                    className="close-btn"
                    type="left"
                    onClick={ ()=>{ history.goBack(); console.log(history) } }
                />
                <div></div>
                <h3>Anlily</h3>
                { this.state.isLoginForm ? <SignIn submit={this.login} history={history}/> : <SignUp history={history} />}
                <div className="change-btn" onClick={this.toggleFormType}>{ this.state.isLoginForm ? '没有账号 注册' : '已有账号 登录'}</div>
            </div>
        );
    }
}

export default Login;
