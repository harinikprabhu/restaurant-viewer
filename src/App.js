import React, { useEffect, useState } from 'react'
import * as actions from './actions/globalActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './containers/Header'
import Restaurants from './containers/Restaurants'
import SearchInput from './components/SearchInput'

const filterTemplate = { name: '', address: '', area: '' }

const RefineSearch = (props) => {
  return (
    <div>
      {Object.keys(filterTemplate).map((key) => (
        <input
          key={key}
          type="text"
          name={key}
          value={props.filters[key]}
          onChange={(event) => props.updateFilter(key, event.target.value)}
        />
      ))}
    </div>
  )
}

const App = (props) => {
  const [selectedCity, setSelectedCity] = useState('')
  const [filters, setFilter] = useState(filterTemplate)

  useEffect(() => {
    props.actions.getCities()
  }, [])

  useEffect(() => {
    props.actions.getRestaurants(selectedCity)
  }, [selectedCity])

  useEffect(() => {
    // console.log(filters);
  }, [filters])

  const updateFilter = (property, value) => {
    setFilter({ ...filters, [property]: value })
  }

  const { cities, restaurants } = props.global
  return (
    <div className="App">
      <Header />
      <SearchInput
        onSelect={(val) => setSelectedCity(val ? val.item : '')}
        items={cities}
      />
      <RefineSearch filters={filters} updateFilter={updateFilter} />
      <Restaurants restaurants={restaurants} filters={filters} />
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
