import React, { Component } from 'react'
import Map from './components/Map'
import TopBar from './components/TopBar'
import store from './Store'
import './App.css'
import {observer} from 'mobx-react'

class App extends Component {

  onChange = (value) => {
    this.setState({country: value})
  }

  render() {
    return <div className="App">
        <TopBar countries={store.data.countries}
                store={store}
                onChange={this.onChange} />
        <Map store={store} countries={store.data.countries} />
      </div>
  }
}

export default observer(App)
