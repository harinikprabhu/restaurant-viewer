import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import { Provider } from 'react-redux'
import store from '../store'

describe('Smoke test app', function () {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
})
