import React from 'react'
import allCountries from './data/allCountries'
import Dropdown from './DropdownBox'
import {observer} from 'mobx-react'

class TopBar extends React.Component {

    state = {
        country: ''
    }

    static defaultProps = {
        onChange: null,
        add: null
    }

    onChange = (value) => {
        this.setState({country: value})
    }

    add = () => {
        this.props.store.data.addCountry(this.state.country)
    }

    render() {
        return <div>
            <Dropdown name="country"
                      defaultValue="Select a country"
                      value={this.state.country}
                      options={allCountries}
                      onChange={this.onChange} />
            <button onClick={this.add}>Add</button>
        </div>
    }
}

export default observer(TopBar)