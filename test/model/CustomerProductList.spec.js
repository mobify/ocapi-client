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

let instance

beforeEach(() => {
    instance = new ShopApi.CustomerProductList()
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') {
        return object[getter]()
    } else {
        return object[property]
    }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') {
        object[setter](value)
    } else {
        object[property] = value
    }
}

describe('CustomerProductListModel', () => {
    it('should create an instance of CustomerProductListModel', () => {
        // uncomment below and update the code to test CustomerProductListModel
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be.a(ShopApi.CustomerProductList);
    })

    it('should have the property coRegistrant (base name: "co_registrant")', () => {
        // uncomment below and update the code to test the property coRegistrant
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property creationDate (base name: "creation_date")', () => {
        // uncomment below and update the code to test the property creationDate
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property currentShippingAddressLink (base name: "current_shipping_address_link")', () => {
        // uncomment below and update the code to test the property currentShippingAddressLink
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property customerProductListItems (base name: "customer_product_list_items")', () => {
        // uncomment below and update the code to test the property customerProductListItems
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property description (base name: "description")', () => {
        // uncomment below and update the code to test the property description
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property event (base name: "event")', () => {
        // uncomment below and update the code to test the property event
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property id (base name: "id")', () => {
        // uncomment below and update the code to test the property id
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property itemsLink (base name: "items_link")', () => {
        // uncomment below and update the code to test the property itemsLink
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property lastModified (base name: "last_modified")', () => {
        // uncomment below and update the code to test the property lastModified
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property name (base name: "name")', () => {
        // uncomment below and update the code to test the property name
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property postEventShippingAddressLink (base name: "post_event_shipping_address_link")', () => {
        // uncomment below and update the code to test the property postEventShippingAddressLink
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property productListShippingAddress (base name: "product_list_shipping_address")', () => {
        // uncomment below and update the code to test the property productListShippingAddress
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property _public (base name: "public")', () => {
        // uncomment below and update the code to test the property _public
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property registrant (base name: "registrant")', () => {
        // uncomment below and update the code to test the property registrant
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property shippingAddressLink (base name: "shipping_address_link")', () => {
        // uncomment below and update the code to test the property shippingAddressLink
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

    it('should have the property type (base name: "type")', () => {
        // uncomment below and update the code to test the property type
        // var instane = new ShopApi.CustomerProductList()
        // expect(instance).to.be();
    })

})
