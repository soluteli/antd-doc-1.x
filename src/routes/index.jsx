import React from 'react'
import { Router, Route, IndexRedirect, Link } from 'react-router'

import './layout.css'

function importAll (r) {
  const cache = {}
  r.keys().forEach(key => {
    cache[key] = { ...(cache[key] || {}), ...r(key) }
  })

  const routes = []

  for (const _name in cache) {
    let item = {}
    if (Object.hasOwnProperty.call(cache, _name)) {
      const demos = cache[_name]
      const [_m, name] = _name.match(/\.\/([a-zA-Z]+)\//)
      item.name = name
      item.children = Object.keys(demos)
        .map(k => {
          if (k !== '__esModule') {
            return {
              name: k,
              component: demos[k]
            }
          }
        })
        .filter(Boolean)
    }
    routes.push(item)
  }
  return routes
}
const routes = importAll(require.context('../components/', true, /\.jsx?$/))

const Layout = props => {
  return (
    <div className='layout'>
      <div className='layout-sidebar'>
        {routes.map(item => {
          return (
            <div key={item.name}>
              {item.name}
              {item.children.map(c => {
                return (
                  <li key={c.name}>
                    <Link to={`/${item.name}/${c.name}`} activeClassName="active">{c.name}</Link>
                  </li>
                )
              })}
            </div>
          )
        })}
      </div>
      <div className='layout-content'>
        {props.children}
      </div>
    </div>
  )
}

const AppRouter = function () {
  return (
    <Router>
      <Route path='/' component={Layout}>
        {routes.map(item => {
          return (
            <Route path={item.name} key={item.name}>
              {item.children.map(c => {
                return (
                  <Route path={c.name} key={c.name} component={c.component} />
                )
              })}
            </Route>
          )
        })}
      </Route>
    </Router>
  )
}

AppRouter.displayName = 'AppRouter'

export default AppRouter
