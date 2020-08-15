import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Documents from '../../src/components/Documents.vue'
import Filter from '../../src/components/Filter.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown, faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft, faChevronDown, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'


library.add(faCaretUp, faCaretDown, faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft, faCalendar, faChevronDown, faTimes, faBars)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)


import documents from '../documets.json';


describe('Filter.vue', () => {
    it('filters out documents based on DatePickers values', async () => {
        const wrapper = await mount(Filter);
        const documentWrapper = mount(Documents, {
            data(){
                return {
                    documents
                }
            }
        })

        const startDate = wrapper.find('#start_date input')
        const endDate = wrapper.find('#end_date input')

        startDate.trigger('change')
        startDate.setValue(1491775200000)

        startDate.trigger('change')
        endDate.setValue(1597349857130)

        const expected = documents.filter(({ date }) => {
            const dateTimestamp = new Date(date.split("T")[0]).getTime();
            return (
              dateTimestamp >= startDate.element.value && dateTimestamp <= endDate.element.value
            );
          }); 
        const filtered = documentWrapper.vm.$data.documents
        .filter(({ date }) => {
            const dateTimestamp = new Date(date.split("T")[0]).getTime();
            return (
              dateTimestamp >= startDate.element.value && dateTimestamp <= endDate.element.value
            );
          }); 
          expect(filtered).toMatchObject(expected)
    })

})
