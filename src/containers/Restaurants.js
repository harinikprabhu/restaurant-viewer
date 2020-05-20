import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/globalActions'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'


const Restaurants = (props) => {
  return (
    <div style={{height: '50vh'}}>
      <div onClick={() => props.actions.getRestaurants('toronto')}>
        Get Restaurants
      </div>
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            className={'list'}
            height={height}
            itemCount={props.restaurants.length}
            itemSize={35}
            width={width}
          >{({ index, style }) => (
            <div style={style}>
              {props.restaurants[index].name}
            </div>
          )}</FixedSizeList>
        )}
      </AutoSizer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  restaurants: state.global.restaurants,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
