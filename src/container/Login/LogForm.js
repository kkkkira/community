import React, {Component} from 'react';
import { validate,eventProxy,cookies } from 'src/utils/utils';
import Input from 'component/input/Input'

const {setCookies} = cookies;
const FormType = {
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
    }]
};

class LogForm extends Component {
    constructor(props){
        super(props);
        this.inputValues = [];
    
        const { inputData } = { ...props.data };
        inputData.forEach(() => {
            this.inputValues.push('');
        });

        this.state = {
            inputValues : this.inputValues,
            submitAvailable : false
        };
    }

    componentDidMount(){
        console.log(this.props.type, this.props.data);
    }
    omponentWillUpdate(){
        console.log('this is update stage',this.props.type);
    }

    changeBtnState = ( flag ) => {
        this.setState({
            submitAvailable: flag
        });
    };

    changeInputValue = (index, value) => {
        let flag,
            { inputData } = {...this.props.data};
        
        this.inputValues.splice(index, 1, value);
        this.setState({
            inputValues: this.inputValues
        });
        
        //所有值是否通过验证
        flag = this.inputValues.every((ele, index) => {
            return validate.setOptions({
                value : ele,
                rule  : inputData[index].reg,
                msg   : inputData[index].msg
            }).validate().state;
        });

        this.changeBtnState( flag );
    };

    btnSubmit =()=>{
        this.props.submit(this.state.inputValues);
    };


    render() {
        const { inputData, btnText } = {...this.props.data },
              { submitAvailable } = {...this.state};
        return (
            <div className ="form-wrapper">
                { inputData.map((item, index)=>{
                    return (
                        <Input
                            key   = {index}
                            index = {index}
                            name  = {item.name}
                            type  = {item.type}
                            plh   = {item.plh}
                            closeSwitch = { false }
                            value = {this.state.inputValues[index]}
                            onInputValueChange = {this.changeInputValue}
                        />
                    )
                })}
                {
                    submitAvailable
                        ? <div className="submit-btn" onClick={ this.btnSubmit }>{btnText}</div>
                        : <div className="submit-btn-disabled">{btnText}</div>
                }
            </div>
        );
    }
}

export default LogForm;
