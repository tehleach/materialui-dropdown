import 'babel-core/polyfill'
import React from 'react' //eslint-disable-line
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Main from './containers/Main'

injectTapEventPlugin()

render(
  <Main />,
  document.getElementById('root')
)
