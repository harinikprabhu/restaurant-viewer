import { appName } from '../utils/generalConstants'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => (
  <div className={'header'}>
    <h1 className={'app-title'}>{appName}</h1>
    <FontAwesomeIcon
      className={'github-icon'}
      icon={faGithub}
      onClick={() =>
        window.open(
          'https://github.com/harinikprabhu/restaurant-viewer',
          '_blank'
        )
      }
    />
  </div>
)

export default Header
