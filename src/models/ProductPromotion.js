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
* The ProductPromotion model module.
* @module models/ProductPromotion
* @version 17.8
*/
export default class ProductPromotion {
    /**
    * Constructs a new <code>ProductPromotion</code>.
    * Document representing a product promotion.
    * @alias module:models/ProductPromotion
    * @class
    */
    constructor() {
        /**
        * The localized call-out message of the promotion.
        * @member {String} callout_msg
        */
        this.callout_msg = undefined

        /**
        * The URL addressing the promotion.
        * @member {String} link
        */
        this.link = undefined

        /**
        * The unique id of the promotion.
        * @member {String} promotion_id
        */
        this.promotion_id = undefined

        /**
        * The promotional price for this product.
        * @member {Number} promotional_price
        */
        this.promotional_price = undefined
    }

    /**
    * Constructs a <code>ProductPromotion</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/ProductPromotion} obj Optional instance to populate.
    * @return {module:models/ProductPromotion} The populated <code>ProductPromotion</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductPromotion()

            if (data.hasOwnProperty('callout_msg')) {
                obj['callout_msg'] = ApiClient.convertToType(data['callout_msg'], 'String')
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String')
            }
            if (data.hasOwnProperty('promotion_id')) {
                obj['promotion_id'] = ApiClient.convertToType(data['promotion_id'], 'String')
            }
            if (data.hasOwnProperty('promotional_price')) {
                obj['promotional_price'] = ApiClient.convertToType(data['promotional_price'], 'Number')
            }
        }

        return obj
    }
}
