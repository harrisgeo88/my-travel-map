import {observable, action, autorun} from 'mobx'
import beenTo from './components/beenTo'
import * as _ from 'lodash'

class CountriesStore {
    data = observable({
        countries: [],
        setValue: action((value) => {
            this.data.countries.push(value)
        })
    })


}
let store = new CountriesStore()

autorun(() => {
    _.map(beenTo, (val) => {
        store.data.setValue(val)
    })
})


export default store