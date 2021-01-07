import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ListProvider } from './context/ListContextV2'
import { Provider, provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <ListProvider>
        <App />
      </ListProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
