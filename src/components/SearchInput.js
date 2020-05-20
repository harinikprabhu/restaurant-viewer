import React from 'react'
import Downshift from 'downshift'
import Fuse from 'fuse.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

const SearchInput = (props) => {
  const fuse = new Fuse(props.items, { minMatchCharLength: 2, threshold: 0.3 })
  const [filteredItems, setFilteredItems] = React.useState([])
  const onInputChange = (change) => {
    if (!change) {
      setFilteredItems([])
      return
    }
    setFilteredItems(fuse.search(change, { limit: 10 }))
  }
  return (
    <Downshift
      onInputValueChange={(change) => onInputChange(change)}
      itemToString={(item) => (item ? item.item : null)}
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
        <div className={'search-container'}>
          <label {...getLabelProps()} className={'search-label'}>
            Pick a city
          </label>
          <div className={'input-container'}>
            <FontAwesomeIcon icon={faSearch} />
            <input
              {...getInputProps()}
              className={'search-input'}
              placeholder="Pick a city"
              autoComplete="new-password"
            />
            <FontAwesomeIcon
              onClick={clearSelection}
              className={'clear-icon'}
              icon={faTimes}
            />
          </div>
          {isOpen ? (
            <div className={'search-result-container'}>
              <ul {...getMenuProps()}>
                {filteredItems.map((item, index) => {
                  return (
                    <li
                      className={'search-result'}
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
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  )
}

export default SearchInput
