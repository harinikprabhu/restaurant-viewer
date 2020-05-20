import React from 'react'

const RefineSearch = (props) => {
  const filterTemplate = { name: '', address: '', area: '' }
  return (
    <div className={'refine-container'}>
      {Object.keys(filterTemplate).map((key) => (
        <React.Fragment key={key + 'frag'}>
          <label className={'refine-label'} key={key + 'key'}>{key}</label>
          <input
            className={'refine-input'}
            placeholder={'Filter by ' + key}
            key={key}
            type="text"
            name={key}
            value={props.filters[key]}
            onChange={(event) => props.updateFilter(key, event.target.value)}
            disabled={props.disable}
            autoComplete="new-password"
          />
        </React.Fragment>
      ))}
    </div>
  )
}

export default RefineSearch
