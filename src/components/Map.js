import React from 'react'
import ReactDOM from 'react-dom'
import Datamap from 'datamaps/dist/datamaps.world.min'
import * as d3 from 'd3'
import * as _ from "lodash";

class Map extends React.Component {

  constructor(props){
    super(props)
    this.datamap = null
  }

  countriesFormat(data) {
    let obj = {}
    _.map(data, (d) => {
      obj[d] = {fillKey: 'liked'} 
    })

    return obj
  }


  componentWillReceiveProps(props) {
    this.datamap.updateChoropleth(this.countriesFormat(props.data))
  }

  renderMap = () => {
    let {data} = this.props
    console.log('renderMap',data.countries)
    return new Datamap({
      element: ReactDOM.findDOMNode(this),
      projection: 'mercator',
      fills: {defaultFill: '#666', liked:'#0984DB'}, // data categories
      data: this.countriesFormat(data), // countries
      geographyConfig: {highlightFillColor: '#FF0000'},//mapData.geographyConfig(), // hover colour
      done: (datamap) => {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geo) {
          data.setValue(geo.id)
         })
      }
    })
  }
  
  componentDidMount(){
    const mapContainer = d3.select('#datamap-container')
    mapContainer.style({width: '100%', height:'2000px'})
    this.datamap = this.renderMap()
  }

  render() {
    return (
      <div id="datamap-container">
      </div>
    )
  }
}

export default Map