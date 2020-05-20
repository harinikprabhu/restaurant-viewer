import React from 'react'
import SearchInput from '../../components/SearchInput'
import { shallow, mount } from 'enzyme'

const mockCities = ['Toronto', 'Ottawa'];

describe('should render search input', function() {
  it(' smoke test render', function() {
    shallow(<SearchInput onSelect={() => {}} items={mockCities}/>)
  })

  it(' should render options', () => {
    const onChange = jest.fn()
    const wrapper = mount(<SearchInput onSelect={onChange} items={mockCities} />)
    const input = wrapper.find('input')
    input.simulate('change', {target: {value: 'To'}})
    input.simulate('keydown', {key: 'ArrowDown'})
    input.simulate('keydown', {key: 'Enter'})
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(input.instance().value).toBe('Toronto')
  })
})