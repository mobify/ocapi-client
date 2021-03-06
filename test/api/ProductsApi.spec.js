/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2020 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 20.4
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
    instance = new ShopApi.ProductsApi(client)
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
}

const VALID_PRODUCT_ID = '008884303989'
const INVALID_PRODUCT_ID = '-1'

describe('ProductsApi', () => {

    describe('getProductsByID', () => {
        it('should return product when calling getProductsByID with valid product id', () =>
            instance.getProductsByID(VALID_PRODUCT_ID)
                .then((product) => {
                    expect(product.id).to.be(VALID_PRODUCT_ID)
                })
        )

        it('should return fault calling getProductsByID with invalid product id', () =>
            instance.getProductsByID(INVALID_PRODUCT_ID)
                .catch((fault) => {
                    expect(fault.type).to.be('ProductNotFoundException')
                })
        )
    })

    describe('getProductsByIDAvailability', () => {
        it('should call getProductsByIDAvailability successfully', () =>
            instance.getProductsByIDAvailability(VALID_PRODUCT_ID)
                .then((product) => {
                    expect(product.inventory).to.be.an('object')
                })
        )
    })

    describe('getProductsByIDBundledProducts', () => {
        it('should call getProductsByIDBundledProducts successfully', () =>
            instance.getProductsByIDBundledProducts(VALID_PRODUCT_ID)
                .then((product) => {
                    expect(product.constructor.name).to.be('Product')
                })
        )
    })

    describe('getProductsByIDImages', () => {
        it('should call getProductsByIDImages successfully', () =>
            instance.getProductsByIDImages(VALID_PRODUCT_ID)
                .then((product) => {
                    expect(product.image_groups).to.be.an('array')
                })
        )
    })

    describe('getProductsByIDLinks', () => {
        it('should call getProductsByIDLinks successfully', () =>
            instance.getProductsByIDLinks(VALID_PRODUCT_ID)
                .then((product) => {
                    expect(product.constructor.name).to.be('Product')
                })
        )
    })


    describe('getProductsByIDOptions', () => {
        it('should call getProductsByIDOptions successfully', () =>
            instance.getProductsByIDOptions(VALID_PRODUCT_ID)
                .then((product) => {
                    expect(product.constructor.name).to.be('Product')
                })
        )
    })

    describe('getProductsByIDPrices', () => {
        it('should call getProductsByIDPrices successfully', () =>
            instance.getProductsByIDPrices(VALID_PRODUCT_ID)
                .then((product) => {
                    expect(product.constructor.name).to.be('Product')
                    expect(product.prices).to.be.an('object')
                })
        )
    })

    describe('getProductsByIDPromotions', () => {
        it('should call getProductsByIDPromotions successfully', () =>
            instance.getProductsByIDPromotions(VALID_PRODUCT_ID)
                .then((product) => {
                    expect(product.constructor.name).to.be('Product')
                })
        )
    })

    describe('getProductsByIDVariations', () => {
        it('should call getProductsByIDVariations successfully', () =>
            instance.getProductsByIDVariations(VALID_PRODUCT_ID)
                .then((product) => {
                    expect(product.constructor.name).to.be('Product')
                    expect(product.variants).to.be.an('array')
                })
        )
    })

    describe('getProductsByIDs', () => {
        it('should call getProductsByIDs successfully', () =>
            instance.getProductsByIDs(['008884303996', '008884304009'])
                .then((result) => {
                    expect(result.constructor.name).to.be('ProductResult')
                    expect(result.total).to.be(2)
                })
        )
    })

})
