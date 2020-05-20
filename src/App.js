import React, { useEffect, useState } from 'react'
import * as actions from './actions/globalActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './containers/Header'
import Restaurants from './containers/Restaurants'
import SearchInput from './components/SearchInput'

// const Footer = () => <div />;
// const FilterArea = () => <div />
// const Restaurants = () => <div />

const App = (props) => {
  useEffect(() => {
    props.actions.getCities()
  }, [])
  const [selectedCity, setSelectedCity] = useState('')
  useEffect(() => {
    props.actions.getRestaurants(selectedCity)
  }, [selectedCity])
  const { cities, restaurants } = props.global
  return (
    <div className="App">
      <Header />
      <SearchInput
        onSelect={(val) => setSelectedCity(val ? val.item : '')}
        items={cities}
      />
      <Restaurants restaurants={restaurants} />
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
