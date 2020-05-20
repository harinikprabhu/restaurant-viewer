import React, { useEffect, useState } from 'react'
import * as actions from './actions/globalActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './containers/Header'
import Restaurants from './containers/Restaurants'
import SearchInput from './components/SearchInput'
import RefineSearch from './components/RefineSearch'

const filterTemplate = { name: '', address: '', area: '' }

const App = (props) => {
  const [selectedCity, setSelectedCity] = useState('')
  const [filters, setFilter] = useState(filterTemplate)

  useEffect(() => {
    props.actions.getCities()
  }, [])

  useEffect(() => {
    props.actions.getRestaurants(selectedCity)
    clearFilters();
  }, [selectedCity])

  useEffect(() => {
  }, [filters])

  const updateFilter = (property, value) => {
    setFilter({ ...filters, [property]: value })
  }

  const clearFilters = () => setFilter(filterTemplate);

  const { cities, restaurants } = props.global
  return (
    <div className="App">
      <Header />
      <SearchInput
        onSelect={(val) => setSelectedCity(val ? val.item : '')}
        items={cities}
      />
      <RefineSearch filters={filters} updateFilter={updateFilter} disable={props.global.restaurants.length === 0}/>
      <Restaurants restaurants={restaurants} filters={filters} />
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
