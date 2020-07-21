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
    instance = new ShopApi.PaymentBankAccountRequest()
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

describe('PaymentBankAccountRequestModel', () => {
    it('should create an instance of PaymentBankAccountRequestModel', () => {
        // uncomment below and update the code to test PaymentBankAccountRequestModel
        // var instane = new ShopApi.PaymentBankAccountRequest()
        // expect(instance).to.be.a(ShopApi.PaymentBankAccountRequest);
    })

    it('should have the property driversLicense (base name: "drivers_license")', () => {
        // uncomment below and update the code to test the property driversLicense
        // var instane = new ShopApi.PaymentBankAccountRequest()
        // expect(instance).to.be();
    })

    it('should have the property driversLicenseStateCode (base name: "drivers_license_state_code")', () => {
        // uncomment below and update the code to test the property driversLicenseStateCode
        // var instane = new ShopApi.PaymentBankAccountRequest()
        // expect(instance).to.be();
    })

    it('should have the property holder (base name: "holder")', () => {
        // uncomment below and update the code to test the property holder
        // var instane = new ShopApi.PaymentBankAccountRequest()
        // expect(instance).to.be();
    })

    it('should have the property _number (base name: "number")', () => {
        // uncomment below and update the code to test the property _number
        // var instane = new ShopApi.PaymentBankAccountRequest()
        // expect(instance).to.be();
    })

})
