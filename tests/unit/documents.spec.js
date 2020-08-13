import { shallowMount } from '@vue/test-utils'
import Documents from '../../src/components/App.vue'

import documents from '../documets.json';

beforeAll(() => {
  require("whatwg-fetch");
});

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
    const pattern = /\.pdf$|\.docx$/;
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
    expect(filteredDocs).toMatchObject(pattern);
  })

  it('by default sorts out documents by date', async () => {
    const pattern = /\.pdf$|\.docx$/;
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
    expect(filteredDocs).toMatchObject(pattern);
  })
})

describe('Documents.vue', () => {
  it('Sort documents by its name alphabetically', async () => {
    const wrapper = shallowMount(Documents);
    const pattern = /\.pdf$|\.docx$/;
    const expected = documents.filter(({ name }) => pattern.test(name));

    const sortByNameBtn = wrapper.findComponent('.sort-by-name');
    sortByNameBtn.trigger('click')

    expected.sort(
      ({ name: aName, date: aDate }, { name: bName, date: bDate }) => {
        const aTimeStamp = new Date(aDate.split("T")[0]).getTime();
        const bTimeStamp = new Date(bDate.split("T")[0]).getTime();
        if (aTimeStamp === bTimeStamp) {
          return aName.localeCompare(bName);
        }
        return bTimeStamp - aTimeStamp;
      }
    );
  })
})
