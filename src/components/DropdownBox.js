import * as React from 'react';
import * as BS from 'react-bootstrap';
import * as _ from 'lodash';

export default class DropdownBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    componentWillMount() {
        this.propsToState(this.props)
    }

    componentWillReceiveProps(props) {
        this.propsToState(props)
    }

    propsToState = props => {
        this.setState({ value: props.value })
    }

    static defaultProps = {
        defaultValue: '',
        optionValue: { option: '', value: '' },
        label: '',
        name: '',
        onChange: null,
        options: {},
        placeholder: '',
        rowClassName: 'col-md-12',
        value: ''
    };

    renderOptions(options = [], optionValue = {}) {
        if (options) {
            return _.map(options, ((option, value) => {
                value = optionValue['value'] !== '' ? option[optionValue['value']] : value
                option = optionValue['option'] !== '' ? option[optionValue['option']] : option
                return <option key={value} value={value}>{option}</option>
            }))
        }
    }

    renderDefault = value => {
        if (value !== '') {
            return <option value="">{value}</option>
        }
    }

    onChange = (input) => {
        let { onChange } = this.props;
        let { value, name } = input.target
        if (onChange)
            onChange(value, name);
    }

    render() {
        let { defaultValue, options, name, placeholder, label, optionValue } = this.props;
        let { value } = this.state
        return (
            <span>
                <BS.FormGroup controlId={name} style={{display:'inline'}}>
                    <label>{label}</label>
                    <BS.FormControl
                        componentClass='select'
                        name={name}
                        value={value || ''}
                        placeholder={placeholder}
                        onChange={this.onChange}>
                        {this.renderDefault(defaultValue)}
                        {this.renderOptions(options, optionValue)}
                    </BS.FormControl>
                </BS.FormGroup>
            </span>
        )
    }
}
