import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Router from './src/config/Router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import storage from './src/redux/store'

const { store, persistor } = storage()


class App extends Component {

  render() {
    return (
      
      <Provider store = {store}>
        <PersistGate persistor = {persistor}>
          <>
            <Router/>
         </>
        </PersistGate>
      </Provider>       
    )
  }
}
export default App