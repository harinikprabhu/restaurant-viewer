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
    <div style={{ height: '65vh' }} className={'restaurant-item-container'}>
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            className={'list'}
            height={height}
            itemCount={filteredItems.length}
            itemSize={80}
            width={width}
          >
            {({ index, style }) => (
              <div style={style}>
                <div style={{ color: 'black' }} className={'restaurant-item'}>
                  <span className={'restaurant-detail'}>
                    <p className={'restaurant-name'}>{filteredItems[index].name}</p>
                    <p className={'restaurant-address'}>{filteredItems[index].address}</p>
                  </span>
                  <span className={'restaurant-price-range'}>
                    {filteredItems[index].price === 1 ? (
                      <p>$</p>
                    ) : filteredItems[index].price === 2 ? (
                      <p>$$</p>
                    ) : filteredItems[index].price === 3 ? (
                      <p>$$$</p>
                    ) : filteredItems[index].price === 4 ? (
                      <p>$$$$</p>
                    ) : (
                      filteredItems[index].price
                    )}
                  </span>
                </div>
              </div>
            )}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  )
}

export default Restaurants
