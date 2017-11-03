/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
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
    instance = new ShopApi.Basket()
})

const getProperty = (object, getter, property) => {
// Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
}

const setProperty = (object, setter, property, value) => {
// Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
}

describe('BasketModel', () => {
    it('should create an instance of BasketModel', () => {
  // uncomment below and update the code to test BasketModel
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be.a(ShopApi.Basket);
    })

    it('should have the property adjustedMerchandizeTotalTax (base name: "adjusted_merchandize_total_tax")', () => {
  // uncomment below and update the code to test the property adjustedMerchandizeTotalTax
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property adjustedShippingTotalTax (base name: "adjusted_shipping_total_tax")', () => {
  // uncomment below and update the code to test the property adjustedShippingTotalTax
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property agentBasket (base name: "agent_basket")', () => {
  // uncomment below and update the code to test the property agentBasket
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property basketId (base name: "basket_id")', () => {
  // uncomment below and update the code to test the property basketId
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property billingAddress (base name: "billing_address")', () => {
  // uncomment below and update the code to test the property billingAddress
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property bonusDiscountLineItems (base name: "bonus_discount_line_items")', () => {
  // uncomment below and update the code to test the property bonusDiscountLineItems
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property cSessionAddressBook (base name: "c_sessionAddressBook")', () => {
  // uncomment below and update the code to test the property cSessionAddressBook
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property channelType (base name: "channel_type")', () => {
  // uncomment below and update the code to test the property channelType
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property couponItems (base name: "coupon_items")', () => {
  // uncomment below and update the code to test the property couponItems
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property creationDate (base name: "creation_date")', () => {
  // uncomment below and update the code to test the property creationDate
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property currency (base name: "currency")', () => {
  // uncomment below and update the code to test the property currency
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property customerInfo (base name: "customer_info")', () => {
  // uncomment below and update the code to test the property customerInfo
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property giftCertificateItems (base name: "gift_certificate_items")', () => {
  // uncomment below and update the code to test the property giftCertificateItems
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property inventoryReservationExpiry (base name: "inventory_reservation_expiry")', () => {
  // uncomment below and update the code to test the property inventoryReservationExpiry
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property lastModified (base name: "last_modified")', () => {
  // uncomment below and update the code to test the property lastModified
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property merchandizeTotalTax (base name: "merchandize_total_tax")', () => {
  // uncomment below and update the code to test the property merchandizeTotalTax
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property notes (base name: "notes")', () => {
  // uncomment below and update the code to test the property notes
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property orderPriceAdjustments (base name: "order_price_adjustments")', () => {
  // uncomment below and update the code to test the property orderPriceAdjustments
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property orderTotal (base name: "order_total")', () => {
  // uncomment below and update the code to test the property orderTotal
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property paymentInstruments (base name: "payment_instruments")', () => {
  // uncomment below and update the code to test the property paymentInstruments
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property productItems (base name: "product_items")', () => {
  // uncomment below and update the code to test the property productItems
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property productSubTotal (base name: "product_sub_total")', () => {
  // uncomment below and update the code to test the property productSubTotal
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property productTotal (base name: "product_total")', () => {
  // uncomment below and update the code to test the property productTotal
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property shipments (base name: "shipments")', () => {
  // uncomment below and update the code to test the property shipments
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property shippingItems (base name: "shipping_items")', () => {
  // uncomment below and update the code to test the property shippingItems
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property shippingTotal (base name: "shipping_total")', () => {
  // uncomment below and update the code to test the property shippingTotal
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property shippingTotalTax (base name: "shipping_total_tax")', () => {
  // uncomment below and update the code to test the property shippingTotalTax
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property sourceCode (base name: "source_code")', () => {
  // uncomment below and update the code to test the property sourceCode
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property taxTotal (base name: "tax_total")', () => {
  // uncomment below and update the code to test the property taxTotal
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

    it('should have the property taxation (base name: "taxation")', () => {
  // uncomment below and update the code to test the property taxation
  // var instane = new ShopApi.Basket()
  // expect(instance).to.be();
    })

})