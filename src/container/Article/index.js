import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectedSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from 'src/actions'
import ListController from '../../component/list-controller/ListController';
import Slide from '../../component/slide';
import './index.less'

class Article extends Component {
    static propTypes = {
        selectedSubreddit: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    };

    componentDidMount(){
        console.log('Article Component is in componentDidMount lifeCircle')
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentWillReceiveProps(nextProps){
        console.log('this stage is componentWillReceiveProps');
        if( nextProps.selectedSubreddit !== this.props.selectedSubreddit ){
            const { dispatch } = nextProps;
            dispatch( fetchPostsIfNeeded(nextProps.selectedSubreddit) );
        }
    }

    handleChange = nextSubreddit => {
        this.props.dispatch(selectedSubreddit(nextSubreddit));
    };


    render() {
        const { posts, isFetching } = this.props;
        const isEmpty = posts.length === 0;

        const tabs = [{
            title: '新鲜事',
            type: 'evaluation'
        },{
            title: '头条',
            type: 'news'
        },{
            title: '视频',
            type: 'video'
        }];

        return ([
            <Slide />,
            <div className="tabs">
                <ul>
                    {
                        tabs.map((item, index) =>
                            <li key={index} onClick={()=>{this.handleChange(item.type)}}>{item.title}</li>)
                    }
                </ul>
            </div>,
            isEmpty
                ? isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>
                : <div className="container-main">
                     <ListController listType="Card" listData={posts} />
                  </div>
        ]);
    }
}

const mapStateToProps = state => {
    const { selectedSubreddit, postsBySubreddit } = state;
    const {
        isFetching,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    };
    return {
      selectedSubreddit,
      posts,
      isFetching
  }
};

export default connect(mapStateToProps)(Article);

