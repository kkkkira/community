import React, {Component} from 'react';
import Bundle from './bundle'

export function bundleComponent(Component, props) {
    return (
        <Bundle load={Component}>
            { (Component) => Component ?  <Component {...props}/> : <div></div> }
        </Bundle>
    )
}
