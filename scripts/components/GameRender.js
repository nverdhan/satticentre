import React, { Component, PropTypes, findDOMNode } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import injectTapEventPlugin from 'react-tap-event-plugin';

import addons from 'react/addons'
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class GameRender extends Component {
render() {
	return (
      <div>
        <ReactCSSTransitionGroup transitionName="example">
          
          </ReactCSSTransitionGroup>
      </div>
    )
}
}