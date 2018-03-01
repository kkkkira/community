export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';



/**
 * 通过用户操作触发的action，包括：
 * 选择分区：SELECT_SUBREDDIT
 * 重置： INVALIDATA_SUBREDDIT
 * 请求发送“请求”命令
 * */
export const selectedSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
});

/**
 * loadMore:
 * 发送请求,修改state中的items,将新请求到的数据push到items
 * */
export const invalidateSubreddit = subreddit => ({
    type: INVALIDATE_SUBREDDIT,
    subreddit
});

/**
 *  请求发送“请求”命令：非直接型action 属于控制性action，为加载分区列表服务
 *  可以写在组件里，也可以抽离到redux里统一管理。
 *  可单独调用，也可以通过其他组合调用，例如在loadMore命令的reducer中调用
 *  控制请求发送，当满足条件时，才发送请求
 */
export const fetchPostsIfNeeded = subreddit => ( dispatch, getState ) =>{
    console.log('this is fetchPostsIfNeed');
    const state = getState();
    if( shouldFetchPosts( state, state.postsBySubreddit[subreddit] ) ){
        console.log('request has sent');
        return dispatch(fetchPosts(subreddit, 0))
    }
}

/**
 *  满足发送请求的条件（满足其一）：
 *  1、当前分区第一次发送请求（posts empty）
 *  2、当前分区不处于【请求发送中】的状态
 */
const shouldFetchPosts = (state, posts) => {
    if( !posts ){
        return true
    }
    if( posts.isFetching ){
        return false
    }
    return posts.didInvalidate
};
const fetchPosts = ( subreddit, page ) => dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(`https://www.easy-mock.com/mock/5a716919bb0e7828e0066a4d/api/article/${subreddit}`,{
        method: 'POST'
    })
        .then( response => {
            if(response.ok){
                response.json().then(json =>{
                    dispatch(receivePosts(subreddit, json));
                })
            }
        })
};

export const requestPosts = subreddit => ({
    type: REQUEST_POSTS,
    subreddit
});

export const receivePosts = ( subreddit, json ) => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.list
});


export const jumpLink = () => ({
    type: JUMP_LINK
});


