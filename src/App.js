import React from 'react'
import * as actions from './actions/globalActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './containers/Header'
import Restaurants from './containers/Restaurants'

// const Footer = () => <div />;
const FilterArea = () => <div />
// const Restaurants = () => <div />

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <FilterArea />
      {/*<Restaurants />*/}
      {/*<Footer />*/}
    </div>
  )
}

const mapStateToProps = (state) => ({
  global: state.global,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
