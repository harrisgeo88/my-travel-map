import React from 'react'
import countries from './countries'
import Dropdown from './DropdownBox'
import * as _ from 'lodash'

class TopBar extends React.Component {

    static defaultProps = {
        onChange: null,
        add: null
    }

    state = {
        country: 'BRA'
    }

    onChange = (value) => {
        let {onChange} = this.props
        if (onChange)
            onChange(value)
        this.setState({country: value})
    }

    render() {
        return <div>
            <Dropdown value={this.state.country} name="country" options={countries} onChange={this.onChange} />
            <button onClick={this.props.add}>Add</button>
            <br/>
            Total <b>{_.size(this.props.countries)}</b>
        </div>
    }
}

export default TopBar