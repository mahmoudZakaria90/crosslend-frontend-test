import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Documents from '../../src/components/Documents.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretUp, faCaretDown, faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft, faChevronDown, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'


library.add(faCaretUp,faCaretDown, faAngleRight, faAngleLeft, faAngleDoubleRight, faAngleDoubleLeft, faCalendar, faChevronDown, faTimes, faBars)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)


import documents from '../documets.json';

beforeAll(() => {
  require("whatwg-fetch");
});

const pattern = /\.pdf$|\.docx$/;

describe('App.vue', () => {
  it('returns an array of documents', async () => {
    const expected = documents
    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expected)
      };
      return Promise.resolve(fetchResponse);
    });

    const { VUE_APP_DOCUMENTS_ENDPOINT } = process.env;
    const request = await fetch(VUE_APP_DOCUMENTS_ENDPOINT);
    const response = await request.json();
    expect(response).toMatchObject(expected);

  })

  it('filters out .pdf and .docx documents', async () => {
    const expected = documents.filter(({ name }) => pattern.test(name));
    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expected)
      };
      return Promise.resolve(fetchResponse);
    });

    const { VUE_APP_DOCUMENTS_ENDPOINT } = process.env;
    const request = await fetch(VUE_APP_DOCUMENTS_ENDPOINT);
    const response = await request.json();
    const filteredDocs = response.filter(({ name }) => pattern.test(name));
    expect(filteredDocs).toMatchObject(expected);
  })

  it('by default sorts out documents by date', async () => {
    const expected = documents
      .filter(({ name }) => pattern.test(name))
      .sort(
        ({ name: aName, date: aDate }, { name: bName, date: bDate }) => {
          const aTimeStamp = new Date(aDate.split("T")[0]).getTime();
          const bTimeStamp = new Date(bDate.split("T")[0]).getTime();
          if (aTimeStamp === bTimeStamp) {
            return aName.localeCompare(bName);
          }
          return bTimeStamp - aTimeStamp;
        }
      );
    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expected)
      };
      return Promise.resolve(fetchResponse);
    });

    const { VUE_APP_DOCUMENTS_ENDPOINT } = process.env;
    const request = await fetch(VUE_APP_DOCUMENTS_ENDPOINT);
    const response = await request.json();
    const filteredDocs = response
      .filter(({ name }) => pattern.test(name))
      .sort(
        ({ name: aName, date: aDate }, { name: bName, date: bDate }) => {
          const aTimeStamp = new Date(aDate.split("T")[0]).getTime();
          const bTimeStamp = new Date(bDate.split("T")[0]).getTime();
          if (aTimeStamp === bTimeStamp) {
            return aName.localeCompare(bName);
          }
          return bTimeStamp - aTimeStamp;
        }
      );
    expect(filteredDocs).toMatchObject(expected);
  })
})

describe('Documents.vue', () => {
  it('Sort documents by their names alphabetically', async () => {
    const wrapper = await mount(Documents, {
      data() {
        return {
          documents
        }
      }
    });

    const expected = documents
      .filter(({ name }) => pattern.test(name))
      .sort(
        ({ name: aName, date: aDate }, { name: bName, date: bDate }) => {
          const aTimeStamp = new Date(aDate.split("T")[0]).getTime();
          const bTimeStamp = new Date(bDate.split("T")[0]).getTime();
          if (aTimeStamp === bTimeStamp) {
            return aName.localeCompare(bName);
          }
          return bTimeStamp - aTimeStamp;
        }
      );

    const sortByNameBtn = wrapper.find('#sort_by_name');
    sortByNameBtn.trigger('click')

    const sortedByName = wrapper.vm.$data.documents
      .filter(({ name }) => pattern.test(name))
      .sort(
        ({ name: aName, date: aDate }, { name: bName, date: bDate }) => {
          const aTimeStamp = new Date(aDate.split("T")[0]).getTime();
          const bTimeStamp = new Date(bDate.split("T")[0]).getTime();
          if (aTimeStamp === bTimeStamp) {
            return aName.localeCompare(bName);
          }
          return bTimeStamp - aTimeStamp;
        }
      );
    expect(sortedByName).toMatchObject(expected);
  })

  it('Each document date should formatted in "dd-mm-yyyy"', async () => {
    const wrapper = await mount(Documents, {
      data() {
        return {
          documents
        }
      }
    });

    const dateRegExPattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

    expect(wrapper.find('.document-item-date').text()).toMatch(dateRegExPattern)
  })
})
