import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { AnimatedSwitch, AnimatedRoute } from 'react-router-transition';
import App from 'src/container/App/App';
import { routes } from './routes';

const RouterApp = withRouter(App);
const { main, other } = { ...routes };
class PublicRouter extends Component {
    render(){
        return (
            <Router >
                <AnimatedSwitch
                    className="route-wrapper"
                    atEnter={{ offset: 100, opacity: 0 }}
                    atLeave={{ offset: -100, opacity: 0 }}
                    atActive={{ offset: 0, opacity: 1 }}
                    mapStyles={(styles) => ({
                        opacity: `${styles.opacity}`,
                        transform: `translateX(${styles.offset}%)`
                    })}
                >
                    { other.map((route, index)=>(
                        <Route
                            key={index}
                            path={route.path}
                            exact
                            component={route.component}
                        />
                    ))}
                    <RouterApp>
                            { main.map((route, index)=>(
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact
                                    component={route.component}
                                />
                            ))}
                    </RouterApp>
                    <Redirect from="/" to="/home" />
                </AnimatedSwitch>
            </Router>
        )
    }
}

export default PublicRouter;






