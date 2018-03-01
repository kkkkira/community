import React, {Component} from 'react';


class ArticleDetail extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.match.params.type}
            </div>
        );
    }
}

export default ArticleDetail;
