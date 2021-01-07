import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ListProvider } from './context/ListContextV2'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)
const MyApp = () => (
  <React.StrictMode>
    <Provider store={store}>
      <ListProvider>
        <App />
      </ListProvider>
    </Provider>
  </React.StrictMode>
)
ReactDOM.render(<MyApp />,document.getElementById('root'))
