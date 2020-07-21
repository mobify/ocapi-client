/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2020 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import expect from 'expect.js'
import ShopApi from '../../src/index'

import {clientId, proxyUrl, baseUrl} from '../config.json'

let instance
let client

before(() => {
    client = new ShopApi.ApiClient({
        basePath: `${baseUrl}`,
        defaultHeaders: {'x-dw-client-id': clientId}
    })
})

beforeEach(() => {
    instance = new ShopApi.StoresApi(client)
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
}

describe('StoresApi', () => {

    describe('getStores', () => {
        it('should call getStores successfully', () =>
            instance.getStores({countryCode: 'US', postalCode: '90210'})
                .catch((error) => {
                    throw error
                })
        )

        it('call getStores without country code expects error', () =>
            instance.getStores({postalCode: '90210'})
                .catch((fault) => {
                    expect(fault.type).to.be('MissingCountryCodeException')
                })
        )

        it('call getStores without postal code expects error', () =>
            instance.getStores({countryCode: 'US'})
                .catch((fault) => {
                    expect(fault.type).to.be('MissingPostalCodeException')
                })
        )
    })

    describe('getStoresByID', () => {
        it('should call getStoresByID successfully', () =>
            instance.getStoresByID('flagship')
                .then((store) => {
                    expect(store.constructor.name).to.be('Store')
                })
        )

        it('should throw Fault when calling getStoresByID with unknown store id', () => {
            instance.getStoresByID('badstoreid')
                .catch((fault) => {
                    expect(fault.constructor.name).to.be('Fault')
                    console.log('fault: ', fault)
                })
        })
    })

    describe('getStoresByIDs', () => {
        it('should call getStoresByIDs successfully', () =>
            instance.getStoresByIDs(['flagship'])
                .then((result) => {
                    expect(result.constructor.name).to.be('StoreResult')
                })
        )
    })

})
