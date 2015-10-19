import React, { PropTypes } from 'react';
import GameRender from './components/GameRender';
import DocumentTitle from 'react-document-title';

import addons from 'react/addons'
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

export default class App {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <DocumentTitle title='Sample App'>
        <div className='App'>
          <GameRender {...this.props} />
              {this.props.children}
        </div>
      </DocumentTitle>
    );
  }
}
