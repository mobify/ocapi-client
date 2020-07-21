/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2020 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
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
import ApiClient from '../ApiClient'

/**
* The Inventory model module.
* @module models/Inventory
* @version 17.8
*/
export default class Inventory {
    /**
    * Constructs a new <code>Inventory</code>.
    * Document representing inventory information of the current product for a particular inventory list.
    * @alias module:models/Inventory
    * @class
    * @param id {String} The inventory id.
    */
    constructor(id) {
        /**
        * The ats of the product. If it is infinity, the return value is 999999. The value can be overwritten by the  OCAPI setting 'product.inventory.ats.max_threshold'.
        * @member {Number} ats
        */
        this.ats = undefined

        /**
        * A flag indicating whether the product is back orderable.
        * @member {Boolean} backorderable
        */
        this.backorderable = undefined

        /**
        * The inventory id.
        * @member {String} id
        */
        this.id = id

        /**
        * A flag indicating the date when the product will be in stock.
        * @member {Date} in_stock_date
        */
        this.in_stock_date = undefined

        /**
        * A flag indicating whether at least one of products is available to sell.
        * @member {Boolean} orderable
        */
        this.orderable = undefined

        /**
        * A flag indicating whether the product is pre orderable.
        * @member {Boolean} preorderable
        */
        this.preorderable = undefined

        /**
        * The stock level of the product. If it is infinity, the return value is 999999. The value can be overwritten by the  OCAPI setting 'product.inventory.stock_level.max_threshold'.
        * @member {Number} stock_level
        */
        this.stock_level = undefined
    }

    /**
    * Constructs a <code>Inventory</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/Inventory} obj Optional instance to populate.
    * @return {module:models/Inventory} The populated <code>Inventory</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Inventory()

            if (data.hasOwnProperty('ats')) {
                obj['ats'] = ApiClient.convertToType(data['ats'], 'Number')
            }
            if (data.hasOwnProperty('backorderable')) {
                obj['backorderable'] = ApiClient.convertToType(data['backorderable'], 'Boolean')
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String')
            }
            if (data.hasOwnProperty('in_stock_date')) {
                obj['in_stock_date'] = ApiClient.convertToType(data['in_stock_date'], 'Date')
            }
            if (data.hasOwnProperty('orderable')) {
                obj['orderable'] = ApiClient.convertToType(data['orderable'], 'Boolean')
            }
            if (data.hasOwnProperty('preorderable')) {
                obj['preorderable'] = ApiClient.convertToType(data['preorderable'], 'Boolean')
            }
            if (data.hasOwnProperty('stock_level')) {
                obj['stock_level'] = ApiClient.convertToType(data['stock_level'], 'Number')
            }
        }

        return obj
    }
}
