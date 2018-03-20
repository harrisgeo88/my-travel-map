import {decorate, computed, observable, action, autorun} from 'mobx'
import beenTo from './components/data/beenTo'
import * as _ from 'lodash'

class CountriesStore {
    countries = []
    addCountry = action((value) => {
        let canAdd = true
        this.countries.forEach((country) => {
            if (country === value || value === '') {
                canAdd = false
            }
        })

        if (canAdd) {
            this.countries.push(value)
        }
    })
    get beenTo() {
        return this.countries.length
    }
}

decorate(CountriesStore,{
    countries: observable,
    beenTo: computed
})


let store = new CountriesStore()

autorun(() => {
    _.map(beenTo, (val) => {
        store.addCountry(val)
    })
})


export default store