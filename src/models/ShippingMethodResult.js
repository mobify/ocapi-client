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
import ShippingMethod from './ShippingMethod'

/**
* The ShippingMethodResult model module.
* @module models/ShippingMethodResult
* @version 17.8
*/
export default class ShippingMethodResult {
    /**
    * Constructs a new <code>ShippingMethodResult</code>.
    * Result document containing shipping methods.
    * @alias module:models/ShippingMethodResult
    * @class
    */
    constructor() {
        /**
        * The applicable shipping method documents.
        * @member {Array.<module:models/ShippingMethod>} applicable_shipping_methods
        */
        this.applicable_shipping_methods = undefined

        /**
        * The default shipping method.
        * @member {String} default_shipping_method_id
        */
        this.default_shipping_method_id = undefined
    }

    /**
    * Constructs a <code>ShippingMethodResult</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ShippingMethodResult} obj Optional instance to populate.
    * @return {module:models/ShippingMethodResult} The populated <code>ShippingMethodResult</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShippingMethodResult()

            if (data.hasOwnProperty('applicable_shipping_methods')) {
                obj['applicable_shipping_methods'] = ApiClient.convertToType(data['applicable_shipping_methods'], [ShippingMethod])
            }
            if (data.hasOwnProperty('default_shipping_method_id')) {
                obj['default_shipping_method_id'] = ApiClient.convertToType(data['default_shipping_method_id'], 'String')
            }
        }

        return obj
    }
}
