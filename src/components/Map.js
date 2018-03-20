import React from 'react'
import Datamap from 'datamaps/dist/datamaps.world.min'
import * as _ from "lodash"
import {observer} from "mobx-react"

class Map extends React.Component {

  constructor(props){
    super(props)
    this.datamap = null
  }

  countriesFormat(data) {
    let obj = {}
    _.map(data, (d) => {
      obj[d] = {fillKey: 'been'}
    })

    return obj
  }

  componentWillReact() {
    this.datamap.updateChoropleth(this.countriesFormat(this.props.store.countries), {reset: true})
  }

  componentWillReceiveProps(props) {
    this.datamap.updateChoropleth(this.countriesFormat(props.store.countries), {reset: true})
  }

  renderMap = () => {
    let {countries} = this.props.store
    return new Datamap({
      element: document.getElementById('datamap-container'),
      projection: 'mercator',
      fills: {defaultFill: '#666', been:'#0984DB'}, // data categories
      data: this.countriesFormat(countries), // countries
      geographyConfig: {
        highlightFillColor: '#FF0000',
      },
      done: (datamap) => {
        // do something
      }
    })
  }
  
  componentDidMount() {
    this.datamap = this.renderMap()
  }

  render() {
      return <div>
        Total <b>{this.props.store.beenTo}</b>
        <div id="datamap-container">
          </div>
      </div>
  }
}

export default observer(Map)