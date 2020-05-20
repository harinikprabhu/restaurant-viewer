import React from 'react'
import Downshift from 'downshift'
import Fuse from 'fuse.js'

const SearchInput = (props) => {
  const fuse = new Fuse(props.items, { minMatchCharLength: 2, threshold: 0.3 })
  const [filteredItems, setFilteredItems] = React.useState([])
  const onInputChange = (change) => {
    if (!change) {
      setFilteredItems([])
      return
    }
    setFilteredItems(fuse.search(change))
  }
  return (
    <Downshift
      onInputValueChange={(change) => onInputChange(change)}
      itemToString={(item) => item ? item.item : null}
      onSelect={(selectedItem) => props.onSelect(selectedItem)}
    >
      {({
        getInputProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        getItemProps,
        highlightedIndex,
        selectedItem,
        clearSelection,
      }) => (
        <div>
          <label {...getLabelProps()}>Pick a city</label>
          <div>
            <i>X</i>
            <input {...getInputProps()} />
            <i onClick={clearSelection}>X</i>
          </div>
          {isOpen ? (
            <ul {...getMenuProps()}>
              {filteredItems.map((item, index) => {
                return (
                  <li
                    {...getItemProps({
                      key: index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.item}
                  </li>
                )
              })}
            </ul>
          ) : null}
        </div>
      )}
    </Downshift>
  )
}

export default SearchInput
