import React from 'react';
import * as actions from "./actions/globalActions";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function App(props) {
  return (
    <div className="App">
      <p onClick={() => props.actions.getRestaurants('toronto')}>Hello</p>
      {props.global.restaurants.map((c, i) => <li key={i}>{c.name}</li>)}
    </div>
  );
}

const mapStateToProps = state => ({
  global: state.global
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
