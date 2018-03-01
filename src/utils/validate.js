'use strict';
class Validate {
    constructor(){
        this.value = '';
        this.rule = '';
        this.msg = '';
    }

    setOptions({value = '', msg = '', rule = ''} = {}){
        this.value = value;
        this.msg = msg;
        this.rule = rule;
        return this;
    }

    validate( success = function(){}, fail = function(){}){
        let result = this.rule ? this.rule.test(this.value) : '';
        if(result){
            success();
            return {
                state: true,
                msg: ''
            }
        }else{
            fail();
            return {
                state: false,
                msg: ''
            }
        }
    }
}
const validate = new Validate();
export default validate;