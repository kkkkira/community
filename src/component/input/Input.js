import React, {Component} from 'react';
import './input.less'

class Input extends Component {
    constructor(props){
        super(props);
    }

    handleChange = ( event ) =>{
        this.props.onInputValueChange(this.props.index, event.target.value);
    };

    resetValue = () => {
        this.props.onInputValueChange(this.props.index,'');
    };


    render() {
        const { name, type, plh, value, closeSwitch } = this.props;
        return (
            <div className="input-wrapper">
                <input name={ name }
                       type={ type }
                       placeholder={ plh }
                       defaultValue={ value }
                       onChange={ this.handleChange } />
                { closeSwitch && value ? <div className="input-close-btn" onClick={ this.resetValue }></div> : <div /> }
            </div>
        );
    }
}

export default Input;
