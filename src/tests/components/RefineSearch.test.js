import React from 'react'
import RefineSearch from '../../components/RefineSearch'
import { shallow } from 'enzyme'

describe('Refining restaurant search with more filters ', function() {
  it('should render filters', function() {
    const wrapper = shallow(<RefineSearch filters={{name: 'to', address: '', area: ''}}/>);
    expect(wrapper.find('input').length).toBe(3);
  })

  it('should render filter values', function() {
    const wrapper = shallow(<RefineSearch filters={{name: 'to', address: '', area: ''}}/>);
    expect(wrapper.find('input').first().props().value).toBe('to');
  })
})