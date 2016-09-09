import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import routes from './routes'

Meteor.startup(init)

function init () {
  const app = document.createElement('div')
  document.body.appendChild(app)
  Render(<Router history={browserHistory} routes={routes()} />, app)
}
