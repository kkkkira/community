import Home from 'src/container/Home';
import Top from 'src/container/Top';
import Article from 'src/container/Article';
import Board from 'src/container/Board';
import Search from 'src/container/Search';
import User from 'src/container/User';
import Login from 'src/container/Login/Login';
import ArticleDetail from 'src/component/ArticleDetail';


const routes ={
    main:[
        {
            path: '/article',
            exact: true,
            component: Article
        }, {
            path: '/board',
            exact: true,
            component: Board
        }, {
            path: '/top',
            exact: true,
            component: Top
        }, {
            path: '/home',
            exact: true,
            component: Home
        }
    ],
    other: [
        {
            path: '/search',
            exact: true,
            component: Search
        }, {
            path: '/user',
            exact: true,
            component: User
        }, {
            path: '/login',
            content: '登录',
            exact: true,
            component: Login
        },{
            path: '/article/:type',
            exact: true,
            component: ArticleDetail
        }
    ]
};

export { routes }
