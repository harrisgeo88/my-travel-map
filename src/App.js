import React, { Component } from 'react'
import Map from './components/Map'
import TopBar from './components/TopBar'
import store from './Store'
import './App.css'
import {observer} from 'mobx-react'

class App extends Component {

  render() {
    return <div className="App">
        <TopBar countries={store.countries}
                store={store}
                onChange={this.onChange} />
        <Map store={store} />
      </div>
  }
}

export default observer(App)