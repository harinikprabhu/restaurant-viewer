import React, { useEffect } from 'react'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

const Restaurants = (props) => {
  const [filteredItems, setFilteredItems] = React.useState(props.restaurants)
  useEffect(() => {
    const { filters } = props
    let filteredItems = props.restaurants
    filteredItems = filteredItems.filter((f) =>
      filters.name
        ? f.name.toLowerCase().includes(filters.name.toLowerCase())
        : true
    )
    filteredItems = filteredItems.filter((f) =>
      filters.address
        ? f.address.toLowerCase().includes(filters.address.toLowerCase())
        : true
    )
    filteredItems = filteredItems.filter((f) =>
      filters.area
        ? f.area.toLowerCase().includes(filters.area.toLowerCase())
        : true
    )
    setFilteredItems(filteredItems)
  }, [props.filters, props.restaurants])
  return (
    <div style={{ height: '50vh' }}>
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            className={'list'}
            height={height}
            itemCount={filteredItems.length}
            itemSize={70}
            width={width}
          >
            {({ index, style }) => (
              <ul style={style}>
                <li>{filteredItems[index].name}</li>
                <li>{filteredItems[index].address}</li>
                <li>{filteredItems[index].price}</li>
              </ul>
            )}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  )
}

export default Restaurants
