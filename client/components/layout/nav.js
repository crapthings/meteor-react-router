import { Link } from 'react-router'

import routes from '../../routes'

const index = {
  name: 'home'
}

const links = _(routes().childRoutes)
  .unshift(index)
  .map(mapRoute)
  .value()

const nav = () => <ul>
  {links.map((link, index) => <li key={index}>
    <Link to={link.path}>{link.name}</Link>
  </li>)}
</ul>

function mapRoute (route) {
  return {
    name: route.name || route.path,
    path: route.path ? `/${route.path}` : '/'
  }
}

export default nav
