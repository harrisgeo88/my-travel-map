import {observable, action, autorun} from 'mobx'
import beenTo from './components/data/beenTo'
import * as _ from 'lodash'

class CountriesStore {
    data = observable({
        countries: [],
        addCountry: action((value) => {
            let canAdd = true
            this.data.countries.forEach((country) => {
                if (country === value)
                    canAdd = false
            })

            if (canAdd)
                this.data.countries.push(value)
        }),
        get beenTo() {
            return this.countries.length
        }
    })
}


let store = new CountriesStore()

autorun(() => {
    _.map(beenTo, (val) => {
        store.data.addCountry(val)
    })
})


export default store