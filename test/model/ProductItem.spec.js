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
    instance = new ShopApi.ProductItem()
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

describe('ProductItemModel', () => {
    it('should create an instance of ProductItemModel', () => {
        // uncomment below and update the code to test ProductItemModel
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be.a(ShopApi.ProductItem);
    })

    it('should have the property adjustedTax (base name: "adjusted_tax")', () => {
        // uncomment below and update the code to test the property adjustedTax
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property basePrice (base name: "base_price")', () => {
        // uncomment below and update the code to test the property basePrice
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property bonusDiscountLineItemId (base name: "bonus_discount_line_item_id")', () => {
        // uncomment below and update the code to test the property bonusDiscountLineItemId
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property bonusProductLineItem (base name: "bonus_product_line_item")', () => {
        // uncomment below and update the code to test the property bonusProductLineItem
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property bundledProductItems (base name: "bundled_product_items")', () => {
        // uncomment below and update the code to test the property bundledProductItems
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property cFromStoreId (base name: "c_fromStoreId")', () => {
        // uncomment below and update the code to test the property cFromStoreId
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property gift (base name: "gift")', () => {
        // uncomment below and update the code to test the property gift
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property giftMessage (base name: "gift_message")', () => {
        // uncomment below and update the code to test the property giftMessage
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property inventoryId (base name: "inventory_id")', () => {
        // uncomment below and update the code to test the property inventoryId
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property itemId (base name: "item_id")', () => {
        // uncomment below and update the code to test the property itemId
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property itemText (base name: "item_text")', () => {
        // uncomment below and update the code to test the property itemText
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property optionItems (base name: "option_items")', () => {
        // uncomment below and update the code to test the property optionItems
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property price (base name: "price")', () => {
        // uncomment below and update the code to test the property price
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property priceAdjustments (base name: "price_adjustments")', () => {
        // uncomment below and update the code to test the property priceAdjustments
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property priceAfterItemDiscount (base name: "price_after_item_discount")', () => {
        // uncomment below and update the code to test the property priceAfterItemDiscount
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property priceAfterOrderDiscount (base name: "price_after_order_discount")', () => {
        // uncomment below and update the code to test the property priceAfterOrderDiscount
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property productId (base name: "product_id")', () => {
        // uncomment below and update the code to test the property productId
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property productListItem (base name: "product_list_item")', () => {
        // uncomment below and update the code to test the property productListItem
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property productName (base name: "product_name")', () => {
        // uncomment below and update the code to test the property productName
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property quantity (base name: "quantity")', () => {
        // uncomment below and update the code to test the property quantity
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property shipmentId (base name: "shipment_id")', () => {
        // uncomment below and update the code to test the property shipmentId
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property shippingItemId (base name: "shipping_item_id")', () => {
        // uncomment below and update the code to test the property shippingItemId
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property tax (base name: "tax")', () => {
        // uncomment below and update the code to test the property tax
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property taxBasis (base name: "tax_basis")', () => {
        // uncomment below and update the code to test the property taxBasis
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property taxClassId (base name: "tax_class_id")', () => {
        // uncomment below and update the code to test the property taxClassId
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

    it('should have the property taxRate (base name: "tax_rate")', () => {
        // uncomment below and update the code to test the property taxRate
        // var instane = new ShopApi.ProductItem()
        // expect(instance).to.be();
    })

})
