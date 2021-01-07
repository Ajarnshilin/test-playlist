import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './configs/routes'
import { Reset } from 'styled-reset'
import Modal from 'react-modal'
import { connect } from 'react-redux'
Modal.setAppElement('#root')
function App ({ message, state }) {
  console.log(state)
  return (
    <>
      <Reset />
      <Router>
        <Suspense fallback='...loading'>
          <Switch>
            {/* <Popup /> */}
            {Object.keys(routes).map(routeKey => (
              <Route Key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </>
  )
}
// export default Apps

const mapStateToProps = state => ({
  message: 'Hello Doge',
  state
})

const AppWithConnect = connect(mapStateToProps)(App)

export default AppWithConnect