import React from 'react'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

const Restaurants = (props) => {
  return (
    <div style={{ height: '50vh' }}>
      <div>
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
          >
            {({ index, style }) => (
              <div style={style}>{props.restaurants[index].name}</div>
            )}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  )
}

export default Restaurants;
