import {shallow} from 'enzyme';
import Header from '../../containers/Header'
import {appName} from '../../utils/generalConstants'
import React from 'react'

describe('renders header ', function() {
  it(' with appName', function() {
    const wrapper = shallow(<Header />);
    wrapper.contains(appName);
  })
})