import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router';

import { addons } from 'react/addons'
const ReactCSSTransitionGroup = addons.CSSTransitionGroup

import App from './App';
// import RepoPage from './pages/RepoPage';
// import UserPage from './pages/UserPage';
// import AddBookToLibrary from './pages/AddBookToLibrary';
// import AddBook from './pages/AddBook';
// import NearBy from './pages/NearBy';
// import Inbox from './pages/Inbox';
// import Message from './pages/Message';
// import Library from './pages/Library';
// import User from './pages/User';
// import Book from './pages/Book';



// import About from './pages/About';

export default class Root extends Component{
  static propTypes = {
    history: PropTypes.object.isRequired
  }
  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Route name='/' path='/' component={App}>
        </Route>
      </Router>
    );
  }
}
