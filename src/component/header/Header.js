import React, {Component} from 'react';
import { Icon } from 'antd';
import { Flex } from 'antd-mobile';

class PubHeader extends Component {
    constructor(props){
        super(props);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }
    toggleSidebar(){
        this.props.changeCollapsed();

    }
    render() {
        return (
            <Flex className="my-header" align="center">
                <Flex.Item onClick={this.toggleSidebar}>
                    <Icon type="menu-fold" />
                </Flex.Item>
                <Flex.Item style={{textAlign:'center'}}>Anlily</Flex.Item>
                <Flex.Item><Icon type="search" /></Flex.Item>
            </Flex>
        );
    }
}

export default PubHeader;
