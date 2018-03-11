import React, { Component } from 'react'
import './App.css'
import Map from './components/Map'
import TopBar from './components/TopBar'
import store from './Store';
import {observer} from 'mobx-react'
import beenTo from './components/beenTo'
import * as _ from 'lodash'

class App extends Component {

  constructor(props) {
    super(props)
    console.log(beenTo)
    this.state = {
      countries: beenTo,
      country: ''
    }
  }

  onChange = (value) => {
    this.setState({country: value})
  }

  add = () => {
    let {country} = this.state
    if (country !== '') {
      let {countries} = this.state

      let found = false
      countries.map((c) => {
        if (c === country)
          found = true
        return
      })

      if (!found)
        countries.push(country)
      this.setState({countries: countries})
    }
  }

  render() {
    // let {countries} = store.data
    let {country, countries} = this.state

    return (
      <div className="App">
        <TopBar countries={countries}
                country={country}
                add={this.add}
                onChange={this.onChange} />
        <Map data={countries} />
      </div>
    )
  }
}

export default App
