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

let instance

beforeEach(() => {
    instance = new ShopApi.Option()
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

describe('OptionModel', () => {
    it('should create an instance of OptionModel', () => {
        // uncomment below and update the code to test OptionModel
        // var instane = new ShopApi.Option()
        // expect(instance).to.be.a(ShopApi.Option);
    })

    it('should have the property description (base name: "description")', () => {
        // uncomment below and update the code to test the property description
        // var instane = new ShopApi.Option()
        // expect(instance).to.be();
    })

    it('should have the property id (base name: "id")', () => {
        // uncomment below and update the code to test the property id
        // var instane = new ShopApi.Option()
        // expect(instance).to.be();
    })

    it('should have the property image (base name: "image")', () => {
        // uncomment below and update the code to test the property image
        // var instane = new ShopApi.Option()
        // expect(instance).to.be();
    })

    it('should have the property name (base name: "name")', () => {
        // uncomment below and update the code to test the property name
        // var instane = new ShopApi.Option()
        // expect(instance).to.be();
    })

    it('should have the property values (base name: "values")', () => {
        // uncomment below and update the code to test the property values
        // var instane = new ShopApi.Option()
        // expect(instance).to.be();
    })

})
