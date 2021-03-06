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
    instance = new ShopApi.Note()
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

describe('NoteModel', () => {
    it('should create an instance of NoteModel', () => {
        // uncomment below and update the code to test NoteModel
        // var instane = new ShopApi.Note()
        // expect(instance).to.be.a(ShopApi.Note);
    })

    it('should have the property createdBy (base name: "created_by")', () => {
        // uncomment below and update the code to test the property createdBy
        // var instane = new ShopApi.Note()
        // expect(instance).to.be();
    })

    it('should have the property creationDate (base name: "creation_date")', () => {
        // uncomment below and update the code to test the property creationDate
        // var instane = new ShopApi.Note()
        // expect(instance).to.be();
    })

    it('should have the property id (base name: "id")', () => {
        // uncomment below and update the code to test the property id
        // var instane = new ShopApi.Note()
        // expect(instance).to.be();
    })

    it('should have the property subject (base name: "subject")', () => {
        // uncomment below and update the code to test the property subject
        // var instane = new ShopApi.Note()
        // expect(instance).to.be();
    })

    it('should have the property text (base name: "text")', () => {
        // uncomment below and update the code to test the property text
        // var instane = new ShopApi.Note()
        // expect(instance).to.be();
    })

})
