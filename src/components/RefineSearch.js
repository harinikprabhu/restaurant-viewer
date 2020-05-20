import React from 'react'

const RefineSearch = (props) => {
  const filterTemplate = { name: '', address: '', area: '' }
  return (
    <div className={'refine-container'}>
      {Object.keys(filterTemplate).map((key) => (
        <React.Fragment>
          <label className={'refine-label'}>{key}</label>
          <input
            className={'refine-input'}
            placeholder={'Filter by ' + key}
            key={key}
            type="text"
            name={key}
            value={props.filters[key]}
            onChange={(event) => props.updateFilter(key, event.target.value)}
            disabled={props.disable}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

export default RefineSearch
